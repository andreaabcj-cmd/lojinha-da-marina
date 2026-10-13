"""Transforma os prints brutos da gravação em prints censurados para o site + os dados do player.
Entrada: _gravacoes/bruto/<idioma>/log.json (+ imagens) e _gravacoes/roteiro_<idioma>.json
Saída:   assets/tutoriais/<idioma>/<id>.webp e assets/tutoriais/<idioma>/dados.js
Uso: python _ferramentas/preparar_prints.py pt
Os brutos têm dados pessoais e NUNCA vão para o Git (ver .gitignore)."""
from PIL import Image, ImageDraw, ImageFilter, ImageFont
import json, os, sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LARG = 2000  # largura máxima dos prints (nunca amplia um print menor)


def fonte(tam):
    for f in ('segoeuib.ttf', 'arialbd.ttf'):
        try:
            return ImageFont.truetype(os.path.join(os.environ.get('WINDIR', 'C:/Windows'), 'Fonts', f), tam)
        except OSError:
            pass
    return ImageFont.load_default()


def pixelar(im, caixa, bloco=7):
    x, y, w, h = [int(v) for v in caixa]
    reg = im.crop((x, y, x + w, y + h))
    pequeno = reg.resize((max(1, w // bloco), max(1, h // bloco)), Image.BILINEAR)
    im.paste(pequeno.resize((w, h), Image.NEAREST).filter(ImageFilter.GaussianBlur(1)), (x, y))


def rotulo(im, caixa, texto):
    x, y, w, h = [int(v) for v in caixa]
    pixelar(im, caixa)
    d = ImageDraw.Draw(im)
    f = fonte(max(10, int(h * 0.62)))
    tw = d.textlength(texto, font=f)
    W = max(w, int(tw + 14))
    d.rounded_rectangle([x, y, x + W, y + h], radius=max(3, h // 4), fill='#FFF4D6', outline='#C98E1A', width=2)
    d.text((x + W / 2, y + h / 2), texto, font=f, fill='#7A5600', anchor='mm')


def tampa(im, caixa):
    x, y, w, h = [int(v) for v in caixa]
    cor = im.getpixel((max(0, x - 6), min(im.height - 1, y + h // 2)))
    ImageDraw.Draw(im).rectangle([x, y, x + w, y + h], fill=cor)


def main(lang):
    bruto = os.path.join(RAIZ, '_gravacoes', 'bruto', lang)
    saida = os.path.join(RAIZ, 'assets', 'tutoriais', lang)
    os.makedirs(saida, exist_ok=True)
    log = json.load(open(os.path.join(bruto, 'log.json'), encoding='utf-8'))
    roteiro = json.load(open(os.path.join(RAIZ, '_gravacoes', 'roteiro_' + lang + '.json'), encoding='utf-8'))
    passos = []
    for sid in sorted(log):
        m = log[sid]
        im = Image.open(os.path.join(bruto, m['arquivo'])).convert('RGB')
        W, H = im.size
        for c in m.get('tampa', []):
            tampa(im, c)
        for c in m.get('censura', []):
            pixelar(im, c)
        for c, txt in m.get('rotulos', []):
            rotulo(im, c, txt)
        esc = min(1, LARG / W)
        if esc < 1:
            im = im.resize((round(W * esc), round(H * esc)), Image.LANCZOS)
        im.save(os.path.join(saida, sid + '.webp'), quality=92, method=6)
        ax, ay, aw, ah = m['alvo']
        extra = roteiro.get('passos', {}).get(sid, {})
        passos.append({'id': sid, 'etapa': m['etapa'], 'tipo': m.get('tipo', 'passo'), 'img': sid + '.webp',
                       'w': im.width, 'h': im.height,
                       'alvo': [round(ax / W, 4), round(ay / H, 4), round(aw / W, 4), round(ah / H, 4)],
                       'texto': extra.get('texto', m['caption']), 'titulo': extra.get('titulo', ''),
                       'dica': extra.get('dica', ''), 'clique': extra.get('clique', True)})
        print('ok', sid)
    dados = {'etapas': roteiro['etapas'], 'passos': passos}
    with open(os.path.join(saida, 'dados.js'), 'w', encoding='utf-8') as f:
        f.write('window.TUTORIAL_' + lang.upper() + ' = ' + json.dumps(dados, ensure_ascii=False, indent=1) + ';\n')
    print('dados.js ->', len(passos), 'passos')


if __name__ == '__main__':
    main(sys.argv[1] if len(sys.argv) > 1 else 'pt')

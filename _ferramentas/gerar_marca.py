"""Gera a identidade visual da página do Facebook (perfil 720x720 e capa 1640x624) no estilo da loja.
Uso: python _ferramentas/gerar_marca.py  (a partir da pasta do site) -> salva em marca/"""
from PIL import Image, ImageDraw, ImageFont
import os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from gerar_imagens import SPR, PAL

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(RAIZ, 'marca')
INK, BLUE, BLUE_L, YEL, YEL_L, PAPER = '#16294A', '#2F6FD6', '#E7F0FF', '#F2B632', '#FFF4D6', '#FAFBFD'

# a lojinha do logo do site (grade 20x20)
LOJA = [(1, 6, 18, 13, '#22304A'), (2, 7, 16, 11, '#FFF4E0'), (0, 3, 20, 4, '#2F6FD6'),
        (2, 3, 2, 4, '#fff'), (6, 3, 2, 4, '#fff'), (10, 3, 2, 4, '#fff'), (14, 3, 2, 4, '#fff'), (18, 3, 2, 4, '#fff'),
        (8, 11, 4, 7, '#2F6FD6'), (3, 10, 4, 4, '#CFE6FF'), (13, 10, 4, 4, '#CFE6FF')]


def fonte(tam, negrito=True):
    for f in (['segoeuib.ttf', 'arialbd.ttf'] if negrito else ['segoeui.ttf', 'arial.ttf']):
        try:
            return ImageFont.truetype(os.path.join(os.environ.get('WINDIR', 'C:/Windows'), 'Fonts', f), tam)
        except OSError:
            pass
    return ImageFont.load_default()


def desenha_loja(d, x0, y0, cel):
    for x, y, w, h, c in LOJA:
        d.rectangle([x0 + x * cel, y0 + y * cel, x0 + (x + w) * cel - 1, y0 + (y + h) * cel - 1], fill=c)


def desenha_sprite(d, rows, x0, y0, cel):
    for y, r in enumerate(rows):
        for x, ch in enumerate(r):
            if ch != '.':
                d.rectangle([x0 + x * cel, y0 + y * cel, x0 + (x + 1) * cel - 1, y0 + (y + 1) * cel - 1], fill=PAL[ch])


def xadrez(d, w, h, passo, c1, c2):
    for y in range(0, h, passo):
        for x in range(0, w, passo):
            d.rectangle([x, y, x + passo - 1, y + passo - 1], fill=c1 if (x // passo + y // passo) % 2 == 0 else c2)


def perfil():
    S = 720
    im = Image.new('RGB', (S, S), BLUE_L)
    d = ImageDraw.Draw(im)
    xadrez(d, S, S, 40, '#E7F0FF', '#DDE9FF')
    # disco amarelo atrás (o Facebook corta em círculo)
    d.ellipse([90, 90, S - 90, S - 90], fill=YEL_L, outline=INK, width=10)
    cel = 20
    desenha_loja(d, (S - 20 * cel) // 2, (S - 20 * cel) // 2 - 10, cel)
    im.save(os.path.join(OUT, 'perfil.png'), optimize=True)


def capa():
    W, H = 1640, 624
    im = Image.new('RGB', (W, H), PAPER)
    d = ImageDraw.Draw(im)
    xadrez(d, W, H, 48, '#F4F7FC', '#EEF3FA')
    # toldo listrado no topo
    for i in range(0, W, 80):
        d.rectangle([i, 0, i + 39, 46], fill=BLUE)
        d.rectangle([i + 40, 0, i + 79, 46], fill='#FFFFFF')
    d.rectangle([0, 46, W, 54], fill=INK)
    # textos (zona segura central: o celular corta as laterais)
    x = 300
    d.text((x, 96), 'Lojinha da Marina', font=fonte(100), fill=INK)
    d.text((x + 4, 224), 'Canecas, camisetas e ecobags feitas com carinho', font=fonte(38, False), fill='#3A4D6B')
    selo = 'Loja fictícia para aulas de Meta Pixel'
    f = fonte(28)
    tw = d.textlength(selo, font=f)
    d.rounded_rectangle([x, 296, x + tw + 48, 348], radius=12, fill=YEL_L, outline='#C98E1A', width=3)
    d.text((x + 24, 303), selo, font=f, fill='#7A5600')
    # chão
    chao = 520
    d.rectangle([0, chao, W, H], fill='#DDE9FF')
    d.rectangle([0, chao - 4, W, chao + 2], fill=INK)
    # a lojinha à direita, apoiada no chão
    cel_l = 15
    desenha_loja(d, 1270, chao - 4 - 19 * cel_l, cel_l)
    # vitrine de produtos no chão
    itens = ['CANECA_01', 'CAMISETA_02', 'ECOBAG_03', 'CANECA_02', 'BONE_01', 'CANECA_03']
    cel, gx = 8, 300
    for k in itens:
        rows = SPR[k]
        desenha_sprite(d, rows, gx, chao - 4 - len(rows) * cel, cel)
        gx += 16 * cel + 26
    im.save(os.path.join(OUT, 'capa.png'), optimize=True)


if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    perfil(); capa()
    print('ok ->', OUT)

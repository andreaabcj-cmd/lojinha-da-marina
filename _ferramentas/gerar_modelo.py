"""Gera _modelos/tutorial-modelo.html: o player de tutoriais num ÚNICO arquivo (abre offline, sem o site).
Serve de modelo para tutoriais futuros (outras ferramentas da Meta). Usa 3 prints reais do tutorial 01 como exemplo.
Uso: python _ferramentas/gerar_modelo.py"""
import base64, io, json, os

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ler = lambda p: io.open(os.path.join(RAIZ, p), encoding='utf-8').read()

dados_js = ler('assets/tutoriais/pt/dados.js')
dados = json.loads(dados_js[dados_js.index('=') + 1:].strip().rstrip(';'))
passos = [p for p in dados['passos'] if p['id'] in ('01-01', '01-03', '01-04')]
for p in passos:
    b = open(os.path.join(RAIZ, 'assets/tutoriais/pt', p['img']), 'rb').read()
    p['img'] = 'data:image/webp;base64,' + base64.b64encode(b).decode()
etapa = dict(dados['etapas'][0]); etapa['titulo'] = 'Modelo de tutorial (exemplo: portfólio empresarial)'
modelo = {'etapas': [etapa], 'passos': passos}

COMO = '''<!--
  MODELO DE TUTORIAL · Lojinha da Marina
  Para fazer um tutorial novo:
   1. Tire os prints (o ideal é pelo fluxo do projeto: _gravacoes + preparar_prints.py, que censura dados pessoais).
   2. Troque o bloco window.TUTORIAL_PT abaixo:
      - etapas: id, bloco, titulo, resumo, porque (lista), checklist (lista), status ("pronto"/"parcial"/"em breve")
      - passos: id, etapa, tipo ("passo"/"erro"/"alternativo"), img (arquivo ou data:), w, h,
                alvo [x, y, largura, altura] em frações do print (0 a 1), titulo, texto, dica, clique (true/false)
   3. Abra este arquivo no navegador. Nada mais é preciso.
-->'''

html = f'''<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Modelo de tutorial</title>
{COMO}
<style>
{ler('assets/css/loja.css')}
{ler('assets/css/tutorial.css')}
body{{padding-top:0}}
</style>
</head>
<body>
<main class="wrap"><div class="tu" id="tutorial"></div></main>
<script>window.TUTORIAL_PT = {json.dumps(modelo, ensure_ascii=False)};</script>
<script>
{ler('assets/js/tutorial.js')}
</script>
</body>
</html>
'''
os.makedirs(os.path.join(RAIZ, '_modelos'), exist_ok=True)
saida = os.path.join(RAIZ, '_modelos', 'tutorial-modelo.html')
io.open(saida, 'w', encoding='utf-8').write(html)
print('ok', saida, round(len(html) / 1024), 'KB')

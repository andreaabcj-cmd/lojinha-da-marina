"""Gera as fotos dos produtos (PNG 800x800) em pixel art, no formato aceito pelo catálogo da Meta.
Uso: python _ferramentas/gerar_imagens.py  (a partir da pasta do site)"""
from PIL import Image, ImageDraw
import os

PAL = {'k': '#22304A', 'w': '#FFFFFF', 'u': '#2F6FD6', 'U': '#1F4FA8', 'y': '#F2B632', 'Y': '#C98E1A',
       't': '#E2BB80', 'T': '#C99A55', 'g': '#1E9E55', 'G': '#157A40', 'n': '#1F3A6E', 'N': '#142850',
       'r': '#E0245E', 'l': '#DDEBFF', 's': '#C9D6E8', 'o': '#FF9E7A', 'p': '#F472B6'}

SPR = {
 'CANECA_01': ['..kkkkkkkkk.....', '..kwwuuuuuk.....', '..kwuuuuuukkkk..', '..kuuuuuuuuk..k.', '..kuuuuuuuuk..k.',
               '..kuuuuuuuuk..k.', '..kuuuuuuuukkkk.', '..kuuuuuuuuk....', '..kUUUUUUUUk....', '...kkkkkkkk.....'],
 'CANECA_02': None,  # amarela (derivada)
 'CANECA_03': ['..kkkkkkkkk.....', '..kwwwwwwwk.....', '..kwwrwwrwwkkkk.', '..kwrrrrrrwk..k.', '..kwrrrrrrwk..k.',
               '..kwwrrrrwwk..k.', '..kwwwrrwwwkkkk.', '..kwwwwwwwwk....', '..ksssssssk.....', '...kkkkkkkk.....'],
 'CAMISETA_02': ['..kkkk....kkkk..', '.kuuuukkkkuuuuk.', 'kuuuuuuuuuuuuuuk', 'kuuuuuuuuuuuuuuk', '.kkkuuuuuuuukkk.',
                 '...kuuuwuuuuk...', '...kuuwwwuuuk...', '...kuwwwwwuuk...', '...kwwwwwwwwk...', '...kuuuuuuuuk...', '...kkkkkkkkkk...'],
 'CAMISETA_03': None,  # branca (derivada)
 'ECOBAG_03': ['.....kkkkkk.....', '....k......k....', '....k......k....', '..kkkkkkkkkkkk..', '..kttttttttttk..',
               '..ktttttgtttttk.', '..kttttggGttttk.', '..ktttggGGtttk..', '..kttttGGttttk..', '..ktttttGtttttk.', '..kttttttttttk..', '..kkkkkkkkkkkk..'],
 'BONE_01': ['................', '.....kkkkkk.....', '....kuuuuuuk....', '...kuuuwwuuuk...', '..kuuuuuuuuuuk..',
             '..kuuuuuuuuuuk..', '..kkkkkkkkkkkkkk', '..........kUUUUk', '...........kkkk.'],
 'MOLETOM_01': ['....kkkkkkkk....', '...knnNNNNnnk...', '..knnNkkkkNnnk..', '.knnnnNkkNnnnnk.', 'knnnnnnnnnnnnnnk',
                'knnnnnnnnnnnnnnk', 'knnkknnnnnnkknnk', 'knnk.knnnnk.knnk', 'knnk.knnnnk.knnk', 'kkkk.knnnnk.kkkk', '.....kkkkkk.....'],
}
SPR['CANECA_02'] = [r.replace('u', 'y').replace('U', 'Y') for r in SPR['CANECA_01']]
SPR['CAMISETA_03'] = [r.replace('u', 's') for r in SPR['CAMISETA_02']]
BG = {'CANECA_01': '#E7F0FF', 'CANECA_02': '#FFF4D6', 'CANECA_03': '#FDECF1', 'CAMISETA_02': '#E4EEFF', 'CAMISETA_03': '#EEF2F7',
      'ECOBAG_03': '#EAF7EE', 'BONE_01': '#E7F0FF', 'MOLETOM_01': '#E9ECF4'}

def render(name, rows, bg, size=800):
    im = Image.new('RGB', (size, size), bg)
    d = ImageDraw.Draw(im)
    w = max(len(r) for r in rows); h = len(rows)
    cell = int(size * 0.74 / max(w, h))
    ox = (size - w * cell) // 2; oy = (size - h * cell) // 2 - cell // 2
    # sombra
    d.rectangle([ox + cell, oy + h * cell + cell // 2, ox + (w - 1) * cell, oy + h * cell + cell], fill='#D3DCE8')
    for y, r in enumerate(rows):
        for x, ch in enumerate(r):
            if ch == '.': continue
            d.rectangle([ox + x * cell, oy + y * cell, ox + (x + 1) * cell - 1, oy + (y + 1) * cell - 1], fill=PAL[ch])
    return im

if __name__ == '__main__':
    out = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'assets', 'img')
    os.makedirs(out, exist_ok=True)
    for k, rows in SPR.items():
        render(k, rows, BG[k]).save(os.path.join(out, k.lower() + '.png'), optimize=True)
        print('ok', k)

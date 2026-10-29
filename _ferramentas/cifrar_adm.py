# Tranca um arquivo para a aba ADM: o site é público, então o arquivo sobe CIFRADO (AES-256-GCM) e só abre com a senha de admin.
# A chave sai da senha (PBKDF2-SHA256); o arquivo vira partes de até 40 MB (o GitHub não aceita arquivo acima de 100 MB).
# Uso (a senha vem da variável ADM_SENHA, nunca no código):
#   ADM_SENHA=... python _ferramentas/cifrar_adm.py <arquivo> <id> "<nome PT>" "<nome ES>" [descrição PT] [descrição ES]
# Escreve assets/adm/<id>/pNN.bin e atualiza assets/adm/arquivos.js (lista que a aba ADM mostra).
import base64, hashlib, json, os, re, sys
from pathlib import Path
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

RAIZ = Path(__file__).resolve().parent.parent
PASTA = RAIZ / "assets" / "adm"
LISTA = PASTA / "arquivos.js"
PARTE = 40 * 1024 * 1024
ITER = 250000
TIPOS = {".mp4": "video/mp4", ".srt": "text/plain", ".pdf": "application/pdf", ".zip": "application/zip"}


def b64(b):
    return base64.b64encode(b).decode()


def ler_lista():
    if not LISTA.exists():
        return None
    t = LISTA.read_text(encoding="utf-8")
    return json.loads(t[t.index("{"):t.rindex("}") + 1])


def main():
    senha = os.environ.get("ADM_SENHA", "").strip().lower()   # a porta compara a senha em minúsculas
    if not senha or len(sys.argv) < 5:
        sys.exit("Uso: ADM_SENHA=... python _ferramentas/cifrar_adm.py <arquivo> <id> \"<nome PT>\" \"<nome ES>\" [desc PT] [desc ES]")
    arq, ident, nome_pt, nome_es = Path(sys.argv[1]), sys.argv[2], sys.argv[3], sys.argv[4]
    desc = {"pt": sys.argv[5] if len(sys.argv) > 5 else "", "es": sys.argv[6] if len(sys.argv) > 6 else ""}
    if not re.fullmatch(r"[a-z0-9-]+", ident):
        sys.exit("id só com letras minúsculas, números e hífen")
    dados = ler_lista()
    if dados is None:   # primeira vez: sorteia o sal e grava um "teste" para a página conferir a senha sem baixar nada
        sal = os.urandom(16)
        chave = hashlib.pbkdf2_hmac("sha256", senha.encode(), sal, ITER, 32)
        iv = os.urandom(12)
        dados = {"sal": b64(sal), "iter": ITER, "teste": b64(iv + AESGCM(chave).encrypt(iv, b"ok", None)), "arquivos": []}
    else:
        sal = base64.b64decode(dados["sal"])
        chave = hashlib.pbkdf2_hmac("sha256", senha.encode(), sal, dados["iter"], 32)
        t = base64.b64decode(dados["teste"])
        try:
            AESGCM(chave).decrypt(t[:12], t[12:], None)
        except Exception:
            sys.exit("Senha diferente da que trancou os outros arquivos.")
    aes, destino = AESGCM(chave), PASTA / ident
    destino.mkdir(parents=True, exist_ok=True)
    for velho in destino.glob("p*.bin"):
        velho.unlink()
    partes, tam = [], 0
    with open(arq, "rb") as f:
        while True:
            bloco = f.read(PARTE)
            if not bloco:
                break
            iv = os.urandom(12)
            nome = destino / f"p{len(partes):02d}.bin"
            nome.write_bytes(iv + aes.encrypt(iv, bloco, None))
            partes.append(nome.relative_to(RAIZ).as_posix())
            tam += len(bloco)
            print(nome.name, len(bloco))
    item = {"id": ident, "nome": {"pt": nome_pt, "es": nome_es}, "desc": desc, "arquivo": arq.name,
            "tipo": TIPOS.get(arq.suffix.lower(), "application/octet-stream"), "tamanho": tam, "partes": partes}
    dados["arquivos"] = [a for a in dados["arquivos"] if a["id"] != ident] + [item]
    LISTA.write_text("/* Arquivos da aba ADM (gerado por _ferramentas/cifrar_adm.py; não editar à mão). Cada parte está cifrada com a senha de admin. */\n"
                     "window.ADM_ARQUIVOS = " + json.dumps(dados, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
    print("OK", ident, tam, "bytes em", len(partes), "partes")


if __name__ == "__main__":
    main()

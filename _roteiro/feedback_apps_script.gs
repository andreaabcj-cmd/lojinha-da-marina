/* Recebedor das sugestões da aba Feedback (Google Apps Script, na conta do André).
   A SENHA fica guardada no próprio Google (Propriedades do script, chave SENHA): NÃO escreva a senha neste arquivo nem no site.
   Passo a passo: _roteiro/FEEDBACK_COMO_LIGAR.md */
var ABA = 'Respostas';

function saida(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function aba() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(ABA);
  if (!sh) { sh = ss.insertSheet(ABA); sh.appendRow(['Quando', 'Tipo', 'Assunto', 'Detalhes', 'Nome', 'Idioma']); }
  return sh;
}

function limpa(v, max) {
  v = String(v == null ? '' : v).slice(0, max);
  return /^[=+\-@]/.test(v) ? "'" + v : v;   // evita que a planilha trate o texto como fórmula
}

function doPost(e) {
  var d;
  try { d = JSON.parse(e.postData.contents); } catch (x) { return saida({ ok: false }); }
  if (d.acao === 'enviar') {
    var cache = CacheService.getScriptCache();
    if (cache.get('lim')) return saida({ ok: false, erro: 'muitos' });   // no máximo ~1 envio por segundo no total
    cache.put('lim', '1', 1);
    if (!d.assunto) return saida({ ok: false });
    aba().appendRow([new Date(), limpa(d.tipo, 20), limpa(d.assunto, 120), limpa(d.detalhe, 2000), limpa(d.nome, 60), limpa(d.idioma, 5)]);
    return saida({ ok: true });
  }
  if (d.acao === 'listar') {
    var senha = PropertiesService.getScriptProperties().getProperty('SENHA');
    if (!senha || d.senha !== senha) return saida({ ok: false, erro: 'senha' });
    var v = aba().getDataRange().getValues().slice(1).slice(-300);
    return saida({ ok: true, itens: v.map(function (l) { return { quando: new Date(l[0]).toISOString(), tipo: l[1], assunto: l[2], detalhe: l[3], nome: l[4] }; }) });
  }
  return saida({ ok: false });
}

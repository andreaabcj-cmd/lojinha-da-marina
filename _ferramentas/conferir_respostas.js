/* Confere a regra das perguntas (A, B, C, D) em todas as aulas e casos prontos, PT e ES (28/10/2026):
   - 4 alternativas, uma certa, cada uma com explicação (fb) nos dois idiomas;
   - a certa nunca é a mais longa;
   - as quatro têm tamanho parecido (a menor tem pelo menos 60% da maior, ou no máximo 15 letras a menos).
   As erradas têm de ser enganos que um atendente de verdade cometeria — isso o script não mede: é revisão de quem escreve.
   Uso (na pasta do projeto): node _ferramentas/conferir_respostas.js [--lista]   (sai com erro se alguma regra quebrar) */
const fs = require('fs'), path = require('path');
global.window = global; global.document = { documentElement: {}, addEventListener() { }, querySelector() { return null } };
global.localStorage = { getItem() { return null }, setItem() { } }; global.location = { search: '', href: '' }; global.navigator = {};
const R = path.join(__dirname, '..');
window.FERRAMENTAS = {};
const wa = ['assets/wa/nucleo.js', 'assets/wa/aulas/trilha.js'].concat(fs.readdirSync(path.join(R, 'assets/wa/aulas')).filter(f => /^a\d\d\.js$/.test(f)).map(f => 'assets/wa/aulas/' + f));
for (const f of ['assets/academia/conteudo.js', 'assets/academia/praticas.js'].concat(wa, ['assets/academia/conteudo-wa.js'])) eval(fs.readFileSync(path.join(R, f), 'utf8'));
const tira = s => String(s || '').replace(/<[^>]+>/g, '');
let erros = 0, total = 0; const lista = process.argv.includes('--lista'), ruins = [];
function confere(nome, ops) {
  total++; const probs = [];
  if (ops.length !== 4) probs.push(ops.length + ' alternativas');
  if (ops.filter(o => o.certa).length !== 1) probs.push('precisa de exatamente uma certa');
  for (const L of ['pt', 'es']) {
    const tam = ops.map(o => tira(o.txt && o.txt[L]).length), max = Math.max(...tam), min = Math.min(...tam), c = ops.findIndex(o => o.certa);
    if (c >= 0 && tam[c] === max) probs.push(L + ': a certa é a mais longa (' + tam.join(', ') + ')');
    if (min < max * 0.6 && max - min > 15) probs.push(L + ': tamanhos desiguais (' + tam.join(', ') + ')');
    if (ops.some(o => !(o.fb && o.fb[L]))) probs.push(L + ': falta explicação');
  }
  if (probs.length) { erros++; ruins.push(nome); if (!lista) console.log(nome + ': ' + probs.join(' · ')) }
}
for (const [m, L] of Object.entries(window.AULAS)) for (const a of L) {
  if (a.status !== 'pronta' || !a.atender || !a.atender.opcoes) continue;
  confere(m + '/' + a.id, a.atender.opcoes);
  (a.atender.mais || []).forEach((q, k) => confere(m + '/' + a.id + '#' + (k + 2), q.opcoes));
}
for (const [k, p] of Object.entries(window.PRATICAS || {})) if (p.pergunta && p.pergunta.opcoes) confere('pratica/' + k, p.pergunta.opcoes);
if (lista) console.log(ruins.join('\n'));
console.log(total + ' perguntas · ' + (total - erros) + ' ok · ' + erros + ' fora da regra');
process.exit(erros ? 1 : 0);

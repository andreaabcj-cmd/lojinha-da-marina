// Carrega o conteúdo da plataforma + o motor do Pergunte ao Pixel no Node (sem navegador), para os testes.
const fs = require('fs'), path = require('path'), B = path.resolve(__dirname, '../..').split(path.sep).join('/') + '/';
global.window = global; global.location = { hostname: 'localhost', search: '' }; global.localStorage = { getItem() { return null }, setItem() { } };
require(B + 'assets/academia/conteudo.js');
// os tutoriais (COMO) moram dentro de plataforma.js, que precisa de página: só a lista é lida
const pl = fs.readFileSync(B + 'assets/js/plataforma.js', 'utf8'), i = pl.indexOf('var COMO = ['), j = pl.indexOf('window.COMO = COMO');
eval(pl.slice(i, j).replace('var COMO', 'global.COMO'));
require(B + 'assets/academia/busca-frases.js');
require(B + 'assets/js/pergunte.js');
const t0 = Date.now(); BUSCA.monta(); module.exports = { ms: Date.now() - t0 };

/* Gera catalogo.csv e catalogo.xml (arquivos fixos do site) a partir de assets/js/produtos.js.
   O Gerenciador de Comércio pode ler esses arquivos direto pelo endereço público (feed programado).
   Uso: node _ferramentas/gerar_catalogo.js [endereço público]  (a partir da pasta do site) */
const fs = require('fs'), path = require('path'), vm = require('vm');
const RAIZ = path.join(__dirname, '..');
const BASE = (process.argv[2] || 'https://andreaabcj-cmd.github.io/lojinha-da-marina/').replace(/\/?$/, '/');

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(RAIZ, 'assets/js/config.js'), 'utf8'), ctx);
vm.runInNewContext(fs.readFileSync(path.join(RAIZ, 'assets/js/produtos.js'), 'utf8'), ctx);
const C = ctx.window.LOJA_CONFIG, P = ctx.window.PRODUTOS;

const cols = ['id', 'item_group_id', 'title', 'description', 'availability', 'condition', 'price', 'link', 'image_link', 'brand', 'size'];
const linhas = [];
P.forEach(p => (p.variantes || [null]).forEach(v => linhas.push({
  id: v ? v.id : p.id, item_group_id: v ? p.id : '', title: p.titulo + (v ? ' - ' + v.nome : ''),
  description: p.descricao, availability: p.estoque, condition: 'new', price: p.preco.toFixed(2) + ' ' + C.moeda,
  link: BASE + 'produto-' + p.id.toLowerCase() + '.html', image_link: new URL(p.img, BASE).href, brand: C.nomeLoja, size: v ? v.nome : ''
})));

const cq = s => /[",\n]/.test(s) ? '"' + String(s).replace(/"/g, '""') + '"' : s;
const csv = cols.join(',') + '\n' + linhas.map(l => cols.map(c => cq(l[c])).join(',')).join('\n') + '\n';
const xe = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">\n<channel>\n<title>' + xe(C.nomeLoja) +
  '</title>\n<link>' + xe(BASE) + '</link>\n<description>Catálogo de treinamento</description>\n' +
  linhas.map(l => '<item>\n' + cols.filter(c => l[c] !== '').map(c => '  <g:' + c + '>' + xe(l[c]) + '</g:' + c + '>').join('\n') + '\n</item>').join('\n') +
  '\n</channel>\n</rss>\n';

fs.writeFileSync(path.join(RAIZ, 'catalogo.csv'), '﻿' + csv);
fs.writeFileSync(path.join(RAIZ, 'catalogo.xml'), xml);
console.log('ok', linhas.length, 'itens ->', BASE + 'catalogo.csv');

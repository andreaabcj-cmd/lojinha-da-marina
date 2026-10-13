/* Lista de produtos = as "fichas" do catálogo.
   O campo id é o código que o Pixel envia em content_ids. Ele PRECISA ser igual ao id do catálogo.
   Produtos com variantes (tamanhos) usam o id da variante; o id do grupo vai em item_group_id. */
window.PRODUTOS = [
  { id:'CANECA_01', titulo:'Caneca azul', categoria:'canecas', preco:49.90, img:'assets/img/caneca_01.png', estoque:'in stock',
    descricao:'Caneca de cerâmica azul, 300 ml. Vai ao micro-ondas e à lava-louças.' },
  { id:'CANECA_02', titulo:'Caneca amarela', categoria:'canecas', preco:49.90, img:'assets/img/caneca_02.png', estoque:'in stock',
    descricao:'Caneca de cerâmica amarela, 300 ml. Para começar o dia com sol.' },
  { id:'CANECA_03', titulo:'Caneca Boas Ideias', categoria:'canecas', preco:54.90, img:'assets/img/caneca_03.png', estoque:'in stock',
    descricao:'Caneca branca com coração, 300 ml. Edição “Boas ideias vendem sempre”.' },
  { id:'CAMISETA_02', titulo:'Camiseta Montanha', categoria:'camisetas', preco:69.90, img:'assets/img/camiseta_02.png', estoque:'in stock',
    descricao:'Camiseta azul 100% algodão com estampa de montanha.',
    variantes:[{id:'CAMISETA_02_P',nome:'P'},{id:'CAMISETA_02_M',nome:'M'},{id:'CAMISETA_02_G',nome:'G'}] },
  { id:'CAMISETA_03', titulo:'Camiseta Básica Branca', categoria:'camisetas', preco:59.90, img:'assets/img/camiseta_03.png', estoque:'in stock',
    descricao:'Camiseta branca 100% algodão, corte reto.',
    variantes:[{id:'CAMISETA_03_P',nome:'P'},{id:'CAMISETA_03_M',nome:'M'},{id:'CAMISETA_03_G',nome:'G'}] },
  { id:'ECOBAG_03', titulo:'Ecobag Folha', categoria:'acessorios', preco:39.90, img:'assets/img/ecobag_03.png', estoque:'in stock',
    descricao:'Ecobag de algodão cru com estampa de folha. Aguenta até 8 kg.' },
  { id:'BONE_01', titulo:'Boné Azul', categoria:'acessorios', preco:59.90, img:'assets/img/bone_01.png', estoque:'in stock',
    descricao:'Boné azul com aba curva e regulagem atrás.' },
  { id:'MOLETOM_01', titulo:'Moletom Marinho', categoria:'camisetas', preco:149.90, img:'assets/img/moletom_01.png', estoque:'out of stock',
    descricao:'Moletom marinho com capuz. Esgotado no momento: ótimo para mostrar a disponibilidade no catálogo.' }
];
window.CATEGORIAS = { canecas:'Canecas', camisetas:'Camisetas', acessorios:'Acessórios' };

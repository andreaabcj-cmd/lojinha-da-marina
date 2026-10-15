/* =====================================================================
   CONFIGURAÇÃO DA LOJINHA — o ÚNICO arquivo que você precisa editar.
   ---------------------------------------------------------------------
   1) Crie o Pixel (conjunto de dados) no Gerenciador de Eventos.
   2) Copie o ID (só números) e cole abaixo, no lugar de SEU_PIXEL_ID.
   3) Publique o site de novo. Pronto: os eventos passam a chegar na Meta.

   Enquanto o ID for "SEU_PIXEL_ID", o site roda em MODO SIMULAÇÃO:
   tudo funciona na tela (painel do Pixel, laboratório etc.),
   mas nada é enviado para a Meta.
   ===================================================================== */
window.LOJA_CONFIG = {
  pixelId: '1779103133372149',   // "Pixel da Mari" (criado em 14/10/2026)

  // Um segundo ID, usado só no laboratório "ID de Pixel errado".
  // Pode deixar assim; se quiser mostrar o erro de verdade, crie um 2º Pixel de teste.
  pixelIdErrado: '000000000000000',

  // Pedir consentimento de cookies antes de enviar eventos (recomendado: true)
  pedirConsentimento: true,

  // Moeda usada em todos os eventos (código de 3 letras)
  moeda: 'BRL',

  // Nome da loja (aparece no site e no catálogo)
  nomeLoja: 'Lojinha da Marina'
};

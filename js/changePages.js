// Seleciona todas os itens do menu lateral 
const menuItems = document.querySelectorAll('.menu-item');

//seleciona os elemntos que exibem título e subtítulo da página.
const pages= document.querySelectorAll('.page');

// Seleciona os elementos que exibem título e subtítulo de página
const pageTitle = document.getElementById('page-title');
const pageSubtitle = document.getElementById('page-subtitle');

// Para cada item do meu menu lateral, adiciona um evento de clique
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // ====Atuali o item ativo do menu lateral====
    // Remove a classe 'active' de todos os itens do menu lateral
    menuItems.forEach (item => item.classList.remove('active'));
    // Adiona a classe 'active' ao item clicado
    item.classList.add('active');
    //==== Atuliza o titulo do cabeçalho da pagina exibida no momento===
   // ==== Define o titulo como o texto do item clicado
   pageTitle.textContent = item. textContent; 
   
  })
})
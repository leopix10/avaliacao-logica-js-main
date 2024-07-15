let hamburguer = document.getElementById("frango");

let cheeseburguer = document.getElementById("carne");

let duploCheesebacon = document.getElementById("ovo");

let cheesebacon = document.getElementById("atum");

hamburguer = 10;

cheeseburguer = 15;

duploCheesebacon = 20;

cheesebacon = 21;

function acompanhamentos() {
    // let listaDeAcompanhamentos = document.getElementById("acompanhamentos");
    
    // Array de itens
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

// Seleciona o elemento da lista no HTML
const itemList = document.getElementById('item-list');

// Loop para adicionar cada item ao HTML
for (let i = 0; i < items.length; i++) {
    // Cria um novo elemento de lista
    const listItem = document.createElement('li');

    // Define o conteúdo do elemento de lista
    listItem.textContent = items[i];

    // Adiciona o elemento de lista ao elemento da lista
    itemList.appendChild(listItem);
}
}
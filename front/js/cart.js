

//On prépare une ligne pour le tableau
const template = document.querySelector('.template__cart');

//on clone la ligne et on l'insère dans le tableau
let section = document.querySelector('#cart__items');
let clone = document.importNode(template.content, true);
let copyOfLS = JSON.parse(localStorage.getItem("products"));


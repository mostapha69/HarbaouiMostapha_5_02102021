const section = document.querySelector('section')

//On récupère le template souhaité
const template = document.querySelector('#article__template');

//On clone le template


//On récupère les données de l'API
fetch('http://localhost:3000/api/products')
.then((res) => res.json())
// console.log(template)

.catch (function(e){
    // Rejet de la promesse (si port: 3000 n'est pas ouvert)
    
    let baliseSection = document.querySelector('.item')
    baliseSection.textContent = "Nous n'avons pas pu afficher vos produits!  Votre port 3000 est-il bien ouvert?"
     console.log(e);
     baliseSection.style.textAlign = "center";
     baliseSection.style.fontSize = "x-large";
     baliseSection.style.color = "white"; 
     baliseSection.style.fontweight = "bold";

})

.then (products => {
     for(let product of products) {    
    console.log(product)
            const clone = document.importNode(template.content, true);
            let baliseImg = clone.querySelector('img');
            let baliseH3 = clone.querySelector('h3');
            let baliseA = clone.querySelector('a');
             baliseH3.textContent = product.name;
             baliseImg.setAttribute('src',product.imageUrl);
             baliseImg.setAttribute('alt',product.altTxt);
             baliseA.setAttribute('href','product.html?id='+product._id);
             section.appendChild(clone);

}
// }, (error) => {
// // Rejet de la promesse
// baliseH3.innerHTML = "Nous n'avons pas pu afficher vos produits!"
//  console.log(error);

})












  

    

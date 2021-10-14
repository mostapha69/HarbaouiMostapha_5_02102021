const section = document.querySelector('.item');
const template = document.querySelector('.template');

var searchParams = new URLSearchParams(document.location.search.substring(1));
console.log(searchParams)
console.log(document.location.search.substring(1))
let id = searchParams.get("id");
console.log(id)




fetch('http://localhost:3000/api/products/'+id)
.then((res) => res.json())

.catch (function(e){
    // Rejet de la promesse (si port: 3000 n'est pas ouvert)
    
    let baliseTitles = document.querySelector('.items')
    baliseTitles.textContent = "Nous n'avons pas pu afficher vos produits!  Votre port 3000 est-il bien ouvert?"
     console.log(e);
     baliseTitles.style.textAlign = "center";
     baliseTitles.style.fontSize = "x-large";
     baliseTitles.style.color = "white"; 
     baliseTitles.style.fontweight = "bold";

})

.then((product) => {
     
    const clone = document.importNode(template.content, true);
     let baliseImg = clone.querySelector('img');
     let baliseH1 = clone.querySelector('h1'); 
     let balisePPRIX= clone.querySelector('.price');
     let balisePDescription = clone.querySelector('#description');
    //  let baliseSelectColors = clone.querySelector('#colors');
     baliseImg.setAttribute('src',product.imageUrl);
     baliseImg.setAttribute('alt',product.altTxt);
     balisePPRIX.textContent = product.price;
     baliseH1.textContent = product.name;
     balisePDescription.textContent = product.description;
     
     

    // Sélection des couleurs via api
     let baliseSelectColors = clone.querySelector('#colors');
     for (let i = 0; i< product.colors.length; i++) {
        let option = document.createElement ('option');
        option.textContent = product.colors[i];
         baliseSelectColors.appendChild(option);
      }
       
    //   section.appendChild(clone);
    // })  
    
      
    // baliseA.setAttribute('href','product.html?id='+product._id);

    // Sélection du bouton 'Ajouter au panier'
    // function addtocart() {    
        
    let btnEnvoyerPanier = clone.querySelector('#addToCart');
    console.log(btnEnvoyerPanier);
    let baliseInputQuantity = clone.querySelector('#quantity');

   //  Ecouter le bouton et envoyer le panier
   btnEnvoyerPanier.addEventListener("click",function(e){
    e.preventDefault();
    let productAdded = {
        name: product.name,
        color : baliseSelectColors.value,
        price: product.price,
        quantity : baliseInputQuantity.value,

    }  
    console.log(productAdded)  
// });

// section.appendChild(clone);
// })  


    
//-----------------LOCAL STORAGE-----------------------

//Gestion du localStorage
  let produitEnregistreDansLeLocalStorage = [];

//  Déclaration de la variable 'produitEnregistréDansLeLocalStorage' dans
// laquelle on met les key et les valeurs qui sont dans le local storage

produitEnregistreDansLeLocalStorage = localStorage.getItem("produit");


// Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau arrayProductsInCart,
// puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
if ((produitEnregistreDansLeLocalStorage) !== null) {
    produitEnregistreDansLeLocalStorage = JSON.parse(localStorage.getItem("produit"));
    // console.log(produitEnregistreDansLeLocalStorage)
}
// console.log(produitEnregistreDansLeLocalStorage);
//JSON.parse c'est pour convertir les données en Format JSON qui sont dans le localStorage en objet Javascript

//Si le localStorage est vide on le crée avec le produit ajouté
else{
    // produitEnregistreDansLeLocalStorage = [];
    produitEnregistreDansLeLocalStorage.push(productAdded);
    localStorage.setItem("produit",JSON.stringify(produitEnregistreDansLeLocalStorage));
}

});

section.appendChild(clone);
    })  
// });

// section.appendChild(clone);
// })  

 
 




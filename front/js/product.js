const section = document.querySelector('.item');
const template = document.querySelector('.template');

var searchParams = new URLSearchParams(document.location.search.substring(1));
console.log(searchParams)
console.log(document.location.search.substring(1))
let id = searchParams.get("id");
console.log(id)




fetch('http://localhost:3000/api/products/'+id)
.then((res) => res.json())
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
          
      
    // baliseA.setAttribute('href','product.html?id='+product._id);

    // Sélection du bouton 'Ajouter au panier'
    // function addtocart() {    
        
    let btnEnvoyerPanier = clone.querySelector('#addToCart');
    console.log(btnEnvoyerPanier);

   //  Ecouter le bouton et envoyer le panier
//    btnEnvoyerPanier.addEventlistener("click",onClick); 
//    function onClick(e) {
//      e.preventDefault();
//      console.log(e);
//      let productAdded = {
//          name: product.name,
//          price: product.price,
         
//      }
//      console.log(productAdded)
   
//  }  

 section.appendChild(clone);
    
})
  
// }
// section.appendChild(clone);
    // })
    
    //  section.appendChild(clone);
    //  })

    

      //Formatage du prix pour l'afficher en euros
    //  product.price = product.price / 100;
    //  balisePPRIX.innerText = new Intl.NumberFormat("fr-FR", {
    //     style: "currency",
    //     currency: "EUR",
    // })
    //  }).format(product.price);

    // new Intl.NumberFormat('fr-FR', 
    // { style: 'currency', currency: 'EUR' })
    // .format(number);
      



    //  console.log(product)


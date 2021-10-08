const section = document.querySelector('item');
const template = document.querySelector('template__item');

var searchParams = new URLSearchParams(document.location.search.substring(1));
console.log(searchParams)
console.log(document.location.search.substring(1))
let id = searchParams.get("id");
console.log(id)




fetch('http://localhost:3000/api/products/'+id)
.then((res) => res.json())
.then (product => {
    
    //   console.log(product)
     
      const clone = document.importNode(template.content, true);
     let baliseImg= clone.querySelector('img');
     let baliseH1 = clone.querySelector('h1'); 
     let balisePPRIX= clone.querySelector('#price');
     baliseImg.setAttribute('src',product.imageUrl);
     baliseImg.setAttribute('alt',product.altTxt);
     balisePPRIX.textContent = product.price;
     baliseH1.textContent = product.name;
    // baliseA.setAttribute('href','product.html?id='+product._id);
    section.appendChild(clone);

})


    // console.log(product)


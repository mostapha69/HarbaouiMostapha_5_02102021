var searchParams = new URLSearchParams(document.location.search.substring(1));
console.log(searchParams)
console.log(document.location.search.substring(1))
let id = searchParams.get("id");
console.log(id)

fetch('http://localhost:3000/api/products/'+id)
.then((res) => res.json())
.then (product => {
     console.log(product)
})
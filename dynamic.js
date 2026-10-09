let products=[
    {
        productImage:"product.jpg",
        productName:"Bags",
        productDes:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, laborum."
    },
    {
        productImage:"cat.jpg",
        productName:"Cat",
        productDes:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, laborum."
    },
    {
        productImage:"product.jpg",
        productName:"Bags",
        productDes:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, laborum."
    }
]
let con=document.querySelector('.container')      
        products.forEach(p=>{
let card= `  <div class="card">
            <img src=${p.productImage} alt="">
            <h1>${p.productName}</h1>
            <p>${p.productDes}</p>
        </div>
  `
        con.innerHTML+=card
        })
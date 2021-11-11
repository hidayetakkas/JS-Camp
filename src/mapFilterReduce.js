let cart = [
    {id : 1, productName : "Phone", quantity : 2, unitPrice : 4500},
    {id : 2, productName : "Ipad", quantity : 5, unitPrice : 2500},
    {id : 3, productName : "Charger", quantity : 3, unitPrice : 120},
    {id : 4, productName : "Apple Pencil", quantity : 5, unitPrice : 1400},
    {id : 5, productName : "Book", quantity : 3, unitPrice : 20},
    {id : 6, productName : "Earpod", quantity : 2, unitPrice : 1000},
]

//cart.push({id : 7, prductName : "Apple Watch", quantity : 6, unitPrice : 2000})

console.log("<ul>")
cart.map(product=>{
    console.log(("<li>") + product.productName + " : " + product.unitPrice * product.quantity + ("</li>"))
})
console.log("</ul>")

let total = cart.reduce((acc,product)=>acc + product.unitPrice * product.quantity,0)
console.log(total)

let quantityOver2 = cart.filter(product=>product.quantity>2)

console.log(quantityOver2)








// function refTest(sepet) {
//     sepet.push({id : 7, prductName : "Apple Watch", quantity : 6, unitPrice : 2000})
   
    
// }

// refTest(cart)
// console.log(cart)

// let sayi = 10
// function sayiTopla(number) {
//     number += 1 
// }
// sayiTopla(sayi)
// console.log(sayi)

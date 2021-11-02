function addToChart(quantity, productName = "Apple") {

    console.log("Added to Chart : " + productName + " Quantity : " + quantity)
    
}

addToChart()
addToChart("10")
addToChart("Egg")

let sayHello = () =>  {
    console.log("Hello world")

}

sayHello()

let sayHello2 = function () {
    console.log("Hello world 2")
    
}

sayHello2()

function addToChart2(productName,quantity,unitPrice) {
    
}

addToChart2("apple",2,10)

let product1 = {productName:"Apple",unitPrice:10,quantity:5}
function addToChart3(product) {
    console.log("Product : " + product.productName)
    console.log("Unit Price : " + product.unitPrice)
    console.log("Quantity : " + product.quantity)    
}

addToChart3(product1)

let product2 = {productName:"Apple",unitPrice:10,quantity:5}
let product3 = {productName:"Egg",unitPrice:10,quantity:5}
product2=product3
product2.productName = "Watermelon"
console.log(product3.productName)

function addToChart4(products) {
    console.log(products)
}
let products = [
    {productName:"Apple",unitPrice:10,quantity:5},
    {productName:"Egg",unitPrice:10,quantity:5},
    {productName:"Watermelon",unitPrice:10,quantity:5}
]
addToChart4(products)


function add(num,...numbers) {
    let total=0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
        
    }
    console.log(total)
    console.log(num)
}

add(20,30,50)
let numbers = [30,10,50,600,120,520]
console.log(numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name :"iç anadolu", population : "20M"},
    {name :"Marmara", population : "30M"},
    {name :"Karadeniz", population : "10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)
let newProductName, newUnitPrice, newQuantity

({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
= {productName:"Egg",unitPrice:10,quantity:5})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)


console.log("Hello Kodlama io")

// JS is not type safe.   e.g euroToday = "Hello"

let euroYesterday = 9.20
let euroToday = 9.35

{
    let euroYesterday = 9.10
}

console.log(euroToday)
console.log(euroYesterday)

const dollarYesterday = 8.70
//dollarYesterday = 8  //can not define another 
console.log(dollarYesterday)

let housingLoans = ["Loan Type 1", "Loan Type 2", "Loan Type 3", "Loan Type 4" ]

for (let i = 0; i < housingLoans.length; i++) 
{
    console.log(housingLoans[i])
    
}

console.log("</ul>")
for (let i = 0; i < housingLoans.length; i++) 
{
    console.log("</ul>"+housingLoans[i]+"</ul>")    
}
console.log("</ul>")
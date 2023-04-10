// function changePrice(change = 0){
//     let price_html = document.querySelector('.table-product #second p')
//     let price = price_html.innerHTML.replace("$","") //replace меняет одно на другое

//     price = parseFloat(price) //Попытка преобразовать в число
//     let new_price = price + change

//     //gпроверка новой и старой цены и смена их цветов
//     if(new_price < price){
//         price_html.setAttribute('style','color:green;')
//     }
//     else if(new_price===price){
//         price_html.setAttribute('style','color:glue;')
//     }
//     else{
//         price_html.setAttribute('style','color:red;')
//     }


//     price_html.innerHTML ='$'+ new_price
//     console.log(new_price)
// }


// // changePrice(50)


// function ChangePrice(change = 0){
//     let price_html = document.querySelector('.table-product #second p')
//     let price = price_html.innerHTML.replace("$", "")
//     price = parseFloat(price)
//     let newPrice = price - change


// if (newPrice < price){
//    price_html.setAttribute("style","color:green")
// }
// else if(newPrice === price){
//     price_html.setAttribute("style","color:blue")
// }
// else{
// price_html.setAttribute("style","color:red")
// }
// price_html.innerHTML ='$'+ newPrice

// }
// ChangePrice(20)

function changePrice(change = 0){
    let price_html = document.querySelector('.table-product #second p')
    let price = price_html.innerHTML.replace('$','')
    // преобразую строку в число
    price = parseFloat(price)
    let new_price = price - change
    // проверка новой и старой цены
    if(new_price < price){
        price_html.setAttribute('style','color:green;')
    }
    else if(new_price === price){
        price_html.setAttribute('style','color:blue;')
    }
    else{
        price_html.setAttribute('style','color:red;')
    }

    price_html.innerHTML = '$' + new_price
    console.log(new_price)
    return new_price
}
function PlusCount(event){
let Count_html = event.target.parentNode.querySelector(".count")
let Count = Count_html.innerHTML
Count = parseFloat(Count)
let NewCount = Count+1
Count_html.innerHTML = NewCount
let Total = document.getElementById("total")
let TotalPrice = changePrice()*NewCount
Total.innerHTML = "$" + TotalPrice
}
function MinusCount(event){
    let Count_html =  event.target.parentNode.querySelector(".count")
    let Count = Count_html.innerHTML
    Count = parseFloat(Count)
    if(Count > 1){
     Count-= 1
    Count_html.innerHTML = Count
    let Total = document.getElementById("total")
let TotalPrice = changePrice()*Count
Total.innerHTML = "$" + TotalPrice
}
    
}




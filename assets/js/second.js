let cards = [
    {
        img : "./assets/img/Nigger.png",
        title: "T-shirt summer collection",
        price: 45
    },
    {
        img : "./assets/img/Stuff.png",
        title: "Random stuff",
        price: 250
    },
    {
        img : "./assets/img/bluhead.png",
        title: "Синеволосая женщина(не факт)",
        price: 300    }
]

let cards_container = document.querySelector(".cards .container")
cards_container.setAttribute('style','flex-wrap:wrap;')
console.log(cards_container)

cards.forEach(item => {
    let card = `<div class="card">
    <a href="./assets/pages/product.html">  <div class="cover">
          <img src=${item.img} alt="">
          <div class="circle"></div>
      </div>
      <div class="card-content">
          <h3>${item.title}</h3>
          <p class="price">${item.price}</p>
      </div>
  </div>`
  cards_container.innerHTML += card
})
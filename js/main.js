const navLinks = document.querySelectorAll(".nav-item:not(:last-child) .nav-link");
const showData = document.querySelector(".show-data");
const quickPeek = document.querySelector(".quick-peek")
const cartItem = document.querySelector(".cart");
const cartCountElement = document.querySelector(".cart-count");
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')
let nav = document.getElementById("nav");
let btnHide = document.querySelector(".btnHide");


let product = []
let data = []

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishList = JSON.parse(localStorage.getItem("wishList")) || [];


const getApi =  async function (){
  
  //GET
  let response = await fetch("./api.json") 
  let data = await response.json()
  let plants = data.plants
  // console.log(plants);
  display(plants)
  product=plants
  
}
getApi()

function display(data){
  let list=""
  for(let i = 0 ; i<data.length; i++){
      list+=`
      <div class="col-lg-3">
      <div class="card">
        <div class="card-image">
        <a class="whish-icon" onclick="addToWhishList(${i})" href=""><i class="fa-regular fa-heart"></i></a>
        <div class="layer">
        <div class="btnss">
                    <a class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="quickView(${i})" href="#">Quick View</a>
                    <a class="btn btn-light" onclick="addToCart(${i}); return false;" href="#">Add to Cart</a>
                </div>
        </div>
          <img src="${data[i].image_url}" alt="">
        </div>
          <div class="card-body text-center">
              <p>${data[i].title}<p>
              <p class="price">${data[i].price}</p>
          </div>
      </div>
  </div>
      `

  }

  showData.innerHTML = list
}
display(data)


function quickView(index){
  let item = product[index];
  let content = `
    <div class="col-lg-6">
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="${item.image_url}" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="${item.image_url2}" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="${item.image_url3}" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    </div>
    <div class="col-lg-6">
        <h1 class="text-center"> ${item.title}</h1>
        <p class="text-center">Plant Price: ${item.price}</p>
        <p>${item.description}</p>
        <button type="button" class="btn" onclick="addToCart(${index})">Add to cart</button>
      
    </div>
  `;
  quickPeek.innerHTML = content;
}




navLinks.forEach((item) => {
  item.addEventListener("click",function(event){
    getApi(event.target.textContent)
  })
})

function addToCart(index){
  let cardProduct= (product[index])
  let founded = cart.find((item)=>item.plant_id === cardProduct.plant_id)
  if(founded){
    founded.count++
  }else{
    cart.push(cardProduct)
  }
  localStorage.setItem("cart",JSON.stringify(cart))
}


function addToWhishList(index){
  let cardProduct= (product[index])
  let founded = wishList.find((item)=>item.plant_id === cardProduct.plant_id)
  if(founded){
    founded.count++
  }else{
    wishList.push(cardProduct)
  
  localStorage.setItem("wishList",JSON.stringify(wishList))
}
}


var splide = new Splide( '.splide', {
  type   : 'loop',
  drag   : 'free',
  snap   : true,
  perPage: 1,
} );

splide.mount();



// data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="quickView(${i})" 

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })






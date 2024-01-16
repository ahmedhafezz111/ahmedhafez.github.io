const mediaObj = document.getElementById("media")
const clearBtn = document.querySelector(".clear-list")
let wishData = JSON.parse(localStorage.getItem("wishList")) || []



function wishList(){
  let cartoona = ''
  for(let i = 0 ; i < wishData.length; i++ ){
      cartoona+=`
      <div class="card mb-3" >
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${wishData[i].image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${wishData[i].title}</h5>
            <p class="card-text">${wishData[i].description}</p>
            <a href="" class="btn" onclick="deleteItem(${i})">Delete Item</a>
          </div>
        </div>
      </div>
    </div>

      `
  }
  mediaObj.innerHTML = cartoona
}
wishList()


// deleteItem
function deleteItem(i) {
  wishData.splice(i, 1)
  localStorage.setItem("wishList", JSON.stringify(wishData))
  render()
}


//deleteAll
function deleteAll() {
  wishData.splice(0);
  localStorage.setItem("wishList", JSON.stringify(wishData))
  render()
}
clearBtn.addEventListener("click",deleteAll)
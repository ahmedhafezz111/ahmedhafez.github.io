const tableBody = document.querySelector("#tBody")
const clearBtn = document.querySelector(".clear-cart")
let cartData = JSON.parse(localStorage.getItem("cart")) || []

function render(){
    let list = ''
    for(let i = 0 ; i < cartData.length ; i++){
        list += `<tr>
                <td scope="col">${cartData[i].plant_id}</td>
                    <td scope="col">${cartData[i].title}</td>
                    <td scope="col">${cartData[i].price}</td>
                    <td scope="col"><img src="${cartData[i].image_url}"" class="card-img-top img-fluid" style="width: 100px"></td>
                    <td scope="col">${cartData[i].count}</td>
                    <td><button class="btn remove-item" onclick="deleteItem(${i})"> <i class="fa-solid fa-xmark"></i> </button></td>
                </tr>
        
        `

    }
    tableBody.innerHTML=list;
}
render()

// deleteItem
function deleteItem(i) {
    cartData[i].count = cartData[i].count-1
    if(cartData[i].count<1){
    cartData.splice(i, 1)
    }
    localStorage.setItem("cart", JSON.stringify(cartData))
    render()
}


//deleteAll
function deleteAll() {
    cartData.splice(0);
    localStorage.setItem("cart", JSON.stringify(cartData))
    render()
}
clearBtn.addEventListener("click",deleteAll)
let wishList;
const wishListCount = document.querySelector(".wishList_icon span");

function getDataFromLocalStrorage() {
  if (localStorage.getItem("wishList")) {
    wishList = JSON.parse(localStorage.getItem("wishList"));
    wishListCount.textContent = wishList.length;
    displayWishList(wishList);
  }
}
getDataFromLocalStrorage();
function saveDataToLocalStorage(type, data) {
  localStorage.setItem(`${type}`, `${data}`);
}

function displayWishList(data) {
  let temp="";
  data.forEach(
    (data,index)=>
    (temp+=` <div class="food_info ${data.typeOfProduct}" id=${data.id}>
  <div class="image">
      <img class="w-100 h-100" src="${data.productImage}" alt="">
  </div>
  <a href="#"><h3>${data.productName}</h3></a>
  <div class="icons d-flex justify-content-center align-items-center">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star-half-stroke"></i>
      <i class="fa-regular fa-star"></i>
      <span> ${data.minusOfProduct}</span>
  </div>
  <h4>$${data.productOffer} <del>$${data.productPrice}</del></h4>
  <div class="add_carts d-flex py-2 justify-content-center align-items-center mx-2">
      <div class="cart_icons d-flex gap-3">
      <div class="heart active" onclick="removeWishList(this)">
          <a><i class="fa-regular fa-heart py-2 px-2 "></i></a>
          </div>
        
      </div>
  </div>
  
  </div>`)
  );
  document.getElementById("_foodsId").innerHTML=temp;

  if (temp.length == 0) {
    document.getElementById("showData").innerHTML = `<h1?>Cart is Empty</h1?`;
  }
}
function removeWishList(e) {
  let newData = JSON.parse(localStorage.getItem("wishList")) || [];
  if (e.classList.contains("active")) {
    let removeId = parseInt(e.closest(".food_info").getAttribute("id"));
    e.closest(".food_info").remove();
    let data = newData.filter((data) => data.id != removeId);
    saveDataToLocalStorage("wishList", JSON.stringify([...data]));
    wishListCount.textContent = newData.length-1;
    newData.push(...data);
  }
  console.log(wishList);
}

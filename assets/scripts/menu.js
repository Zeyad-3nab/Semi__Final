const btns=document.querySelectorAll(".food_menu .container .btns button")
async function filterType(typeOfProduct){ 
  let res=await fetch(`${baseUrl}/products?typeOfProduct=${typeOfProduct}`)
  let finalRes=await res.json();
  displayProduct(finalRes); 
}
btns.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
    let type=(e.target.textContent).toLowerCase();
    deactive();
    btn.classList.add("active")
    if(type=="all menu"){
     

     getProduct("products")
    }
    else{
      filterType(`${type}`);
    }
   
  })
})
function deactive(){
  btns.forEach((menu)=>menu.classList.remove("active"))
}


const dropdownBtn=document.querySelector(".slider .container .fa-bars")
const dropdownMenu=document.querySelector(".slider .container .drop_down")
dropdownBtn.addEventListener("click",()=>
{
 if(dropdownMenu.style.display=="flex"){
  dropdownMenu.style.display="none"
 }
  else
 {
  dropdownMenu.style.display="flex"
 }

})


// const wishListIcon = document.querySelector(".nav_icons .menu_icon .wishList_icon");
const wishListCount = document.querySelector(".nav_icons .menu_icon .wishList_icon span");
// console.log(wishListIcon);
const baseUrl = `http://localhost:3000`;
function saveDataToLocalStorage(type,data){
 localStorage.setItem(`${type}`,`${data}`); 
}
async function getProduct(endPoint){
  let res=await fetch(`${baseUrl}/${endPoint}`)
  let finalRes=await res.json();
  displayProduct(finalRes); 
}
getProduct("products");
function displayProduct(data){
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
<div class="add_carts d-flex py-2 justify-content-between align-items-center mx-2">
<a class="add_cart" onclick="showSingleProduct(${data.id})">Add To Cart</a>
    <div class="cart_icons d-flex gap-3">
    <div class="heart" onclick="addProductToWishList(${index})">
        <a><i class="fa-regular fa-heart py-2 px-2" ></i></a>
        </div>
        <a><i class="fa-regular fa-eye py-2 px-2" onclick="showSingleProduct(${data.id})"></i></a>
    </div>
</div>
</div>`)
);
document.getElementById("_foodsId").innerHTML=temp;
} 

async function showSingleProduct(id){
  let res=await fetch(`${baseUrl}/products/${id}`)
  let finalRes=await res.json();
  saveDataToLocalStorage("singleProduct",JSON.stringify(finalRes));
  location.assign("singleProduct.html")
}

let wishListContainer = [];
async function addProductToWishList(id) {
  let res = await fetch(`${baseUrl}/products`);
  let finalRes = await res.json();
  wishListContainer.push(finalRes[id]);
  saveDataToLocalStorage("wishList", JSON.stringify(wishListContainer));
  wishListCount.textContent = JSON.parse(localStorage.getItem("wishList")).length;
}

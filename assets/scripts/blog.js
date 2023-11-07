const dropdownBtn=document.querySelector(".slider .container .fa-bars")
const dropdownMenu=document.querySelector(".slider .container .drop_down")


const cartValue=document.querySelector(".nav_icons .menu_icon .cart_icon span")
  cartValue.textContent=JSON.parse(localStorage.getItem("cartItem")).length 
  const wish_List_value=document.querySelector(".nav_icons .menu_icon .wishList_icon span")
wish_List_value.textContent=JSON.parse(localStorage.getItem("wishList")).length 


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


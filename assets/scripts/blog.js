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


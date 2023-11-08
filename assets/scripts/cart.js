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

const cartValue=document.querySelector(".nav_icons .menu_icon .cart_icon span")
  cartValue.textContent=JSON.parse(localStorage.getItem("cartItem")).length 
  const wish_List_value=document.querySelector(".nav_icons .menu_icon .wishList_icon span")
wish_List_value.textContent=JSON.parse(localStorage.getItem("wishList")).length 


function displayWishList(data)
{
    let temp="";
    data.forEach(
      (data)=>{
       if(data.option1Name==null&&data.option2Name==null){
            temp+=` 
            <tr id="${data.productName+data.productQuantity}">
          <td class="tf__pro_img">
              <img src="${data.productImage}" alt="product" class="img-fluid w-100">
          </td>
    
          <td class="tf__pro_name">
              <a href="#">${data.productName}</a>
              <span>${data.productSize}</span>
          </td>
    
          <td class="tf__pro_status">
              <h6>${data.productPrice}</h6>
          </td>
    
          <td class="tf__pro_select">
              <h6>${data.productQuantity}</h6>
          </td>
    
          <td class="tf__pro_tk">
              <h6>$${data.productQuantity* Number(data.productPrice.replace('$',''))}</h6>
          </td>
    
          <td class="tf__pro_icon">
              <a href="#" onclick="removeCart(this)"><i class="fa-solid fa-xmark"></i></a>
          </td>
      </tr>`
        }
        else if(data.option1Name==null){
            temp+=` 
            <tr id="${data.productName+data.productQuantity}">
          <td class="tf__pro_img">
              <img src="${data.productImage}" alt="product" class="img-fluid w-100">
          </td>
    
          <td class="tf__pro_name">
              <a href="#">${data.productName}</a>
              <span>${data.productSize}</span>
              <p class="d-flex">
             <span class="text-dark">${data.option2Name}</span>
             <span class="text-dark"> ${data.option2Price}</span>
              </p>
          </td>
    
          <td class="tf__pro_status">
              <h6>${data.productPrice}</h6>
          </td>
    
          <td class="tf__pro_select">
              <h6>${data.productQuantity}</h6>
          </td>
    
          <td class="tf__pro_tk">
          <h6>$${data.productQuantity* Number(data.productPrice.replace('$',''))}</h6>
          </td>
    
          <td class="tf__pro_icon">
          <a href="#" onclick="removeCart(this)"><i class="fa-solid fa-xmark"></i></a>
          </td>
      </tr>`
        }
        else if(data.option2Name==null){
            temp+=` 
      <tr id="${data.productName+data.productQuantity}">
          <td class="tf__pro_img">
              <img src="${data.productImage}" alt="product" class="img-fluid w-100">
          </td>
    
          <td class="tf__pro_name">
              <a href="#">${data.productName}</a>
              <span>${data.productSize}</span>
              <p class="d-flex">
             <span class="text-dark">${data.option1Name}</span>
             <span class="text-dark"> ${data.option1Price}</span>
              </p>
          </td>
    
          <td class="tf__pro_status">
              <h6>${data.productPrice}</h6>
          </td>
    
          <td class="tf__pro_select">
              <h6>${data.productQuantity}</h6>
          </td>
    
          <td class="tf__pro_tk">
          <h6>$${data.productQuantity* Number(data.productPrice.replace('$',''))}</h6>
          </td>
    
          <td class="tf__pro_icon">
          <a href="#" onclick="removeCart(this)"><i class="fa-solid fa-xmark"></i></a>
          </td>
      </tr>`
        }
        else 
        {
            temp+=` 
            <tr id="${data.productName+data.productQuantity}">
          <td class="tf__pro_img">
              <img src="${data.productImage}" alt="product" class="img-fluid w-100">
          </td>
    
          <td class="tf__pro_name">
              <a href="#">${data.productName}</a>
              <span>${data.productSize}</span>
              <p class="d-flex">
             <span class="text-dark">${data.option1Name}</span>
             <span class="text-dark"> ${data.option1Price}</span>
              </p>
              <p class="d-flex">
             <span class="text-dark">${data.option2Name}</span>
             <span class="text-dark"> ${data.option2Price}</span>
              </p>
          </td>
    
          <td class="tf__pro_status">
              <h6>${data.productPrice}</h6>
          </td>
    
          <td class="tf__pro_select">
              <h6>${data.productQuantity}</h6>
          </td>
    
          <td class="tf__pro_tk">
          <h6>$${data.productQuantity* Number(data.productPrice.replace('$',''))}</h6>
          </td>
    
          <td class="tf__pro_icon">
          <a href="#" onclick="removeCart(this)"><i class="fa-solid fa-xmark"></i></a>
          </td>
      </tr>`
        }
      }
    );
    document.getElementById("_tbody").innerHTML=temp;
}
function getDataFromLocalStorage(){
    if(localStorage.getItem("cartItem")){
        let singleProduct=JSON.parse(localStorage.getItem("cartItem"))
        displayWishList(singleProduct);
    }
}
getDataFromLocalStorage();



function removeCart(e)
 {
    
    let newData = JSON.parse(localStorage.getItem("cartItem")) || [];
      let removeId =e.closest("tr").getAttribute("id");
      console.log(removeId);
      e.closest("tr").remove();
      let data = newData.filter((data) => data.productName+data.productQuantity != removeId);
      saveDataToLocalStorage("cartItem", JSON.stringify([...data]));
      cartValue.textContent=JSON.parse(localStorage.getItem("cartItem")).length 
      newData.push(...data);
      if(localStorage.getItem("cartItem").length<=2){
        const  text= `<h5 class="text-center">EmptyCart</h5>`
      
        document.getElementById("_tbody").innerHTML=text
        document.querySelector(".html_empty").style.display="none";
    }
  }

  const allTr=document.querySelectorAll("tbody tr")
  const clearAllBtn=document.querySelector(".tf__cart_list thead .tf__pro_icon .clear_all")
  clearAllBtn.addEventListener("click",()=>{
    removeAllCart();
  })
  console.log(clearAllBtn);
  function removeAllCart(e)
 {
    saveDataToLocalStorage("cartItem", JSON.stringify([]));
    allTr.forEach(e => {
        e.remove();
        document.querySelector(".html_empty").style.display="none";
        
    });
    if(localStorage.getItem("cartItem").length<=2){
        const  text= `<h5 class="text-center">EmptyCart</h5>`
      
        document.getElementById("_tbody").innerHTML=text
    }
}
  
  function saveDataToLocalStorage(type, data) {
    localStorage.setItem(`${type}`, `${data}`);
  }


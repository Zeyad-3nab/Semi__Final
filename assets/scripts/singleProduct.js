function getDataFromLocalStorage(){
    if(localStorage.getItem("singleProduct")){
        let singleProduct=JSON.parse(localStorage.getItem("singleProduct"))
        displaySingleProduct(singleProduct);
    }
}
getDataFromLocalStorage();

function displaySingleProduct(data){
    let temp="";
    temp+=`   
    <a class="wrong" href="menu.html"><i class="fa-solid fa-xmark"></i></a> 
    <div class="single_product d-flex justify-content-center align-items-center gap-5 flex-wrap">
    <div class="image">
       <img src="${data.productImage}" alt="">
    </div>
    <div class="details">
        <h2>${data.productName}</h2>
        <h3 class="price gap-2">
            $${data.productOffer}
            <del>$${data.productPrice}</del>
        </h3>
        <div class="details_size my-3">
            <h5>select size</h5>
            <div class="form-check">
                <input class="form-check-input" type="radio" value="$${Math.round((data.productOffer/3)+data.productOffer)}.00" name="flexRadioDefault" id="large" checked="">
                <label class="form-check-label " for="large">
                    large <span>$${Math.round((data.productOffer/3)+data.productOffer)}.00</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" value="$${Math.round((data.productOffer/4)+data.productOffer)}.00" name="flexRadioDefault" id="medium" >
                <label class="form-check-label" for="medium">
                    medium <span>$${Math.round((data.productOffer/4)+data.productOffer)}.00</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" value="$${data.productOffer}.00" name="flexRadioDefault" id="small">
                <label class="form-check-label" for="small">
                    small <span>$${data.productOffer}.00</span>
                </label>
            </div>
        </div>
        <div class="details_extra_item my-3">
            <h5>select option <span>(optional)</span></h5>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="$10" id="coca-cola">
                <label class="form-check-label" for="coca-cola">
                    coca-cola <span>$10</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="$15" id="7up">
                <label class="form-check-label" for="7up">
                    7up <span>$15</span>
                </label>
            </div>
        </div>
        <h5>select quentity</h5>
        <div class="quentity_btn_area d-flex flex-wrap align-items-center gap-5">
            <div class="quentity_btn">
                <button class="btn btn-danger" onclick="minus()"><i class="fa-solid fa-minus" aria-hidden="true"></i></button>
                <input class="text-center inputNumber " value=1 type="text" placeholder="1">
                <button class="btn btn-success" onclick="plus()"><i class="fa-solid fa-plus" aria-hidden="true"></i></button>
            </div>
            <h3>$${data.productOffer}</h3>
        </div>
        <div class="d-block text-center">
        <button class="addcard" onclick="getData()" ><a href="#">Add To Card</a></button>
        <h5 class="done">Done</h5>
        </div>
    </div>

</div>`
document.body.innerHTML=temp
}
function plus (){
    var value=document.querySelector(".inputNumber");
    value.value=Number(value.value)+1;
}
function minus (){
    var value=document.querySelector(".inputNumber");
    value.value=Number(value.value)-1;
}


var cart=[]
var cartitem=[];
if(localStorage.getItem("cartItem")){
    cartitem=JSON.parse(localStorage.getItem("cartItem"))
    for(var i=0;i<cartitem.length;i++){
        cart.push(cartitem[i]);
    }
    console.log(cartitem);
}
else{
    cart=[];

}

const done=document.querySelector(".done")
console.log(done);
function getData(){
    var item={
        productImage:null,
        productName:null,
        productSize:null,
        productPrice:null,
        option1Name:null,
        option1Price:null,
        option2Name:null,
        option2Price:null,
        productQuantity:null
    }
    var img=document.querySelector(".image img")
    var input_values =document.querySelectorAll(('.form-check-input'))
    item.productImage=`${document.querySelector(".image img").getAttribute("src")}`
    item.productName=`${document.querySelector(".details h2").textContent}`
    input_values.forEach(element => {
        if(element.id=="large"||element.id=="small"||element.id=="medium"){
            if(element.checked==true){
                item.productSize=element.id
                item.productPrice=element.value
            }
        }
        else if(element.id=="coca-cola"){
            if(element.checked==true){
                item.option1Name=element.id
            item.option1Price=element.value
            }
        }
        else{
            if(element.checked==true){
                item.option2Name=element.id
            item.option2Price=element.value
            }
        }
    });
    item.productQuantity=document.querySelector(".quentity_btn .inputNumber").value
    cart.push(item);
    saveDataToLocalStorage("cartItem", JSON.stringify(cart));
    done.style.display="block";
    setTimeout(() => {
        done.style.display="none";
      }, 2000);

}

function saveDataToLocalStorage(type,data){
    localStorage.setItem(`${type}`,`${data}`); 
   }

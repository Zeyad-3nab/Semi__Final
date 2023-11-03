function getDataFromLocalStorage(){
    if(localStorage.getItem("singleProduct")){
        let singleProduct=JSON.parse(localStorage.getItem("singleProduct"))
        displaySingleProduct(singleProduct);
    }
}
getDataFromLocalStorage();

function displaySingleProduct(data){
    let temp="";
    temp+=`<div class="single_product d-flex justify-content-center align-items-center gap-5 flex-wrap">
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
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="large" checked="">
                <label class="form-check-label " for="large">
                    large <span>$${Math.round((data.productOffer/3)+data.productOffer)}.00</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="medium">
                <label class="form-check-label" for="medium">
                    medium <span>$${Math.round((data.productOffer/4)+data.productOffer)}.00</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="small">
                <label class="form-check-label" for="small">
                    small <span>$${data.productOffer}.00</span>
                </label>
            </div>
        </div>
        <div class="details_extra_item my-3">
            <h5>select option <span>(optional)</span></h5>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="coca-cola">
                <label class="form-check-label" for="coca-cola">
                    coca-cola <span>+ $10</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="7up">
                <label class="form-check-label" for="7up">
                    7up <span>+ $15</span>
                </label>
            </div>
        </div>
        <h5>select quentity</h5>
        <div class="quentity_btn_area d-flex flex-wrapa align-items-center gap-5">
            <div class="quentity_btn">
                <button class="btn btn-danger"  onclick=""><i class="fa-solid fa-minus" aria-hidden="true"></i></button>
                <input class="text-center " value="1" type="text" placeholder="1">
                <button class="btn btn-success"><i class="fa-solid fa-plus" aria-hidden="true"></i></button>
            </div>
            <h3>$${data.productOffer}</h3>
        </div>
        <button class="addcard"><a href="#">Add To Card</a></button>
    </div>

</div>`
document.body.innerHTML=temp
}


















const baseUrl = `http://localhost:3000`;
async function showData(){ 
    let res=await fetch(`${baseUrl}/cart`)
    let finalRes=await res.json();
  }
  function setDataToDB(data){
    data.productImage=document.querySelector(".image img").getAttribute("src");
  }
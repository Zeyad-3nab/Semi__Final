const btn = document.querySelector(".btns button");
const form = document.querySelector("form");
const email = document.querySelector(`input[name="email"]`);
const password = document.querySelector(`input[name="password"]`);
const account = document.querySelector(".account");
const errorMessage = document.querySelectorAll(".form-group .errorMessage");
const image=document.querySelector(".form-pic img")
function getUserDataLocalStrorage() {
  if (localStorage.getItem("userData")) {
    let userData = JSON.parse(localStorage.getItem("userData"));
    if (userData.email != email.value) {
      errorMessage[0].style.display="block";
      image.src="assets/styles/images/images/th.jpg";
      setTimeout(()=>{
        errorMessage[0].style.display="none";
        image.src="assets/styles/images/images/th4.jpg"

      },2000)
      
    } else {
      if (userData.password != password.value){
        errorMessage[1].style.display="block";
      image.src="assets/styles/images/images/th3.jpg";
      setTimeout(()=>{
        errorMessage[1].style.display="none";
        image.src="assets/styles/images/images/th4.jpg"
      },2000)
      }
        
      else {
        let btnText = btn.textContent;
        errorMessage[1].textContent = ``;
        image.src="assets/styles/images/images/th6.jpg";
        btn.innerHTML = `<i class="fas fa-spinner fa-span"></i>`;
        setTimeout(() => {
          image.src="assets/styles/images/images/th6.jpg"
          btn.textContent = btnText;
          window.location.assign("index.html");
        }, 3000);
      }
    }
  } else {
    let btnText = btn.textContent;
    btn.innerHTML = `<i class="fas fa-spinner fa-span"></i>`;
    account.textContent = "اعمل اكونت ي حيوان";
    setTimeout(() => {
      btn.textContent = btnText;
      window.location.assign("register.html");
    }, 3000);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getUserDataLocalStrorage();
});

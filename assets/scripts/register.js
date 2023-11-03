const form = document.querySelector("form");
const name = document.querySelector(`input[name="name"]`);
const email = document.querySelector(`input[name="email"]`);
const password = document.querySelector(`input[name="password"]`);
const errorMessage = document.querySelectorAll(".form-group .errorMessage");
const btn = document.querySelector(".btns button");
const image=document.querySelector(".form-pic img")
console.log(name, email, password);

function getUserDataForm() {
  let userData = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  if (!validationForm(/^[A-Z][a-z]{3,6}$/, userData.name)) {
    errorMessage[0].style.display="block";
    image.src="assets/styles/images/images/th.jpg";
    setTimeout(()=>{
      errorMessage[0].style.display="none";
      image.src="assets/styles/images/images/th4.jpg"
    },2000)
  } else {
    errorMessage[0].textContent = ``;
    if (!validationForm(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$$/, userData.email)) {
      errorMessage[1].style.display="block";
    image.src="assets/styles/images/images/th3.jpg";
    setTimeout(()=>{
      errorMessage[1].style.display="none";
      image.src="assets/styles/images/images/th4.jpg"
    },2000)
    } else {
      // errorMessage[1].textContent = ``;
      if (!validationForm(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/, userData.password)) {
        errorMessage[2].style.display="block";
    image.src="assets/styles/images/images/th9.jpg";
    setTimeout(()=>{
      errorMessage[2].style.display="none";
      image.src="assets/styles/images/images/th4.jpg"
    },2000)
      } else {
        let btnText = btn.textContent;
        
        setUserDataLocalStorage(userData);
        btn.innerHTML = `<i class="fas fa-spinner fa-span"></i>`;
        image.src="assets/styles/images/images/th8.jpg"
        setTimeout(() => {
          image.src="assets/styles/images/images/th10.jpg"
          btn.textContent = btnText;
          window.location.assign("login.html");
        }, 3000);
      }
    }
  }
}
// validationForm(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$$/, userData.email) &&
//     validationForm(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/, userData.password)

function setUserDataLocalStorage(data) {
  localStorage.setItem("userData", JSON.stringify(data));
}

function validationForm(rgx, input) {
  let regx = rgx;
  if (regx.test(input)) {
    return true;
  } else {
    return false;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getUserDataForm();
});

// let x = setInterval(() => {
//   console.log("hello");
// }, 500);

// document.addEventListener("click", () => {
//   clearInterval(x);
// });

// let x = setTimeout(() => {
//   console.log("hello");
// }, 5000);

// document.addEventListener("click", () => {
//   clearTimeout(x);
// });

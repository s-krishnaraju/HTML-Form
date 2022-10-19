const password = document.querySelector("#password")
const passwordConfirm = document.querySelector("#confirm")
const btnSubmit = document.querySelector(".submit")
const errorMsg = document.querySelector(".password.input p")
btnSubmit.addEventListener('click', (event) => {
    password.classList.add("error");
    passwordConfirm.classList.add("error")
    if (password.value == passwordConfirm.value) {
        password.classList.remove("error");
        passwordConfirm.classList.remove("error")
        errorMsg.style.display="none";
    }else{
        event.preventDefault();
        errorMsg.style.display="block";
    }
})
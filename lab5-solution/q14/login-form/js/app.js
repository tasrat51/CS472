// app.js
// console.log("hello lab5");

window.onload = function() {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", printFormData);

    function printFormData(event) {
        event.preventDefault();
        const txtEmail = document.getElementById("txtEmailAddr");
        const txtPassword = document.getElementById("txtPwd");
        console.log(txtEmail.value);
        console.log(txtPassword.value);
        txtEmail.value = "";
        txtPassword.value = "";
        txtEmail.focus();
    }
}

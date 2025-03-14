const formularioLogin = document.getElementById("loginForm");
function login(email, password) {

    fetch("../controllers/auth.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'login',
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.success) {
            alert("Login exitoso");
            window.location.href = "dasboard.php";
        }
    })
    .catch(error => {
        console.log(error);
    });

}

formularioLogin.addEventListener("submit", function (event) {
    event.preventDefault();
    var formData= new FormData(formularioLogin);
    console.log(formData.get("email"), formData.get("password"));
    login(formData.get("email"), formData.get("password"));
});
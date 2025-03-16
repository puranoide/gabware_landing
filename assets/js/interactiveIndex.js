var contactanosbutton = document.getElementById("contactanosbutton");
contactanosbutton.addEventListener("click", function () { 
    window.scrollTo({ top: document.getElementById("contactanos").offsetTop, behavior: "smooth" });
});

var mailButton = document.getElementById("buttonMail");
var nameEmpresa = document.getElementById("name");
var email= document.getElementById("email");

var message = document.getElementById("message");
mailButton.addEventListener("click", function () {
alert("name: " + nameEmpresa.value + "\nemail: " + email.value + "\nmessage: " + message.value);
});

function mandarDatos(name, email, message) {
    fetch("controllers/mensaje.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'mensaje',
            email: email,
            name: name, 
            message: message
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.success) {
            alert("mensaje enviado con existo");
        }
    })
    .catch(error => {
        console.log(error);
    });

}
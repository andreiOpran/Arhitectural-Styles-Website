document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("2users.json")
        .then((response) => response.json())
        .then((users) => {
            const userExists = users.some(
                (user) => user.username === username && user.password === password
            );

            if (userExists) {
                sessionStorage.setItem("username", username);
                alert("Autentificare reusita!");
                setTimeout(function () {
                    window.location.href = "/trivia.html";
                }, 500);
            } else {
                window.location.href = "/2404.html";
            }
        })
        .catch((error) => {
            console.error("Eroare la preluarea listei de utilizatori: ", error);
        });
});

// culoare primul buton
var firstButton = document.querySelector('button');
firstButton.style.backgroundColor = 'rgb(47, 79, 79)';

// range output
var range = document.getElementById('range');
var output = document.getElementById('value');
range.oninput = function () {
    output.textContent = this.value;
}
output.textContent = range.value;

// schimbare culoare formular cnd intri prima data
setTimeout(function () {
    var schimbCuloare = document.getElementById('formular');
    schimbCuloare.classList.add('fade-in');
}, 2000);

setTimeout(function () {
    var schimbCuloare = document.getElementById('formular');
    schimbCuloare.classList.add('fade-out');
}, 8000);

// resetare culoare buton
button = document.getElementById('loginButton');
button.style.backgroundColor = '';


// match culoare buton cu background color ul de la formular
document.getElementById("styleButton").addEventListener("click", function () {
    var formular = document.getElementById("formular");
    var currentStyle = window.getComputedStyle(formular);
    var currentBackgroundColor = currentStyle.backgroundColor;

    var button = document.getElementById('loginButton');
    if (!button.classList.contains('new-style')) 
    {
        button.classList.add('new-style');
        button.style.backgroundColor = currentBackgroundColor;
    } 
    else 
    {
        button.classList.remove('new-style');
        button.style.backgroundColor = '';
    }
});

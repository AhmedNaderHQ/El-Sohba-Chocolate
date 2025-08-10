// login and register
function togglePassword() {
    var x = document.getElementById("floatingInputPassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
// login
function login() {
    var username = document.getElementById("floatingInputUserName").value;
    var password = document.getElementById("floatingInputPassword").value;

    if (username === "Ahmed" && password === "A123456789") {
        alert("Welcome!");
        window.location.href = "shop.html";
    } else {
        alert("Invalid username or password");
    }
}

// contact
function showThankYouMessageAndRedirect() {
    alert("Thank you for your message! We'll get back to you soon.");
    window.location.href = "index.html";
}
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    showThankYouMessageAndRedirect();
});
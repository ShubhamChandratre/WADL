document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
        alert("Invalid email or password!");
        return;
    }

    alert("Login successful! Redirecting to registration...");
    window.location.href = "registration.html";
});

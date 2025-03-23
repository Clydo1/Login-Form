const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');
const submitSignIn = document.getElementById('submitSignIn');

// Toggle between Sign Up and Sign In forms
signUpButton.addEventListener('click', function () {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
});

signInButton.addEventListener('click', function () {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
});

// Login handling and redirect
submitSignIn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents page reload

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Dummy authentication (Replace with Firebase authentication later)
    if (email.trim() === "admin@gmail.com" && password === "1234") {
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        alert("Invalid email or password. Please try again!");
    }
});

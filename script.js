// Import Firebase Modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase Configuration (Replace with your actual Firebase config)
const firebaseConfig = {
    apiKey: "AIzaSyD5TSGbL1agsq9HTZiRUAJCltjrmF7TG2E",
    authDomain: "login-form-a2dc8.firebaseapp.com",
    projectId: "login-form-a2dc8",
    storageBucket: "login-form-a2dc8.firebasestorage.app",
    messagingSenderId: "45518239620",
    appId: "1:545518239620:web:bddbd5dab7c92a975fa7d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to Register a New User
window.registerUser = function() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Account created successfully! You can now log in.");
            showLogin();
        })
        .catch((error) => {
            alert(error.message);
        });
};

// Function to Log In Users
window.loginUser = function() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "dashboard.html"; // ✅ Redirect to profile
        })
        .catch((error) => {
            alert(error.message);
        });
};

// Show Signup Form
window.showSignup = function() {
    document.getElementById("login-box").classList.add("hidden");
    document.getElementById("signup-box").classList.remove("hidden");
};

// Show Login Form
window.showLogin = function() {
    document.getElementById("signup-box").classList.add("hidden");
    document.getElementById("login-box").classList.remove("hidden");
};
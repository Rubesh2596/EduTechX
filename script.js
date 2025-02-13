function validateLogin() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let rememberCheckbox = document.getElementById("remember");

    // Step 1: Validate credentials
    if (username === "Rubesh01" && password === "Teamzoro") {
        alert("Login successful!");

        // Step 2: Save credentials if "Remember Me" is checked
        if (rememberCheckbox.checked) {
            localStorage.setItem("rememberMe", "true");
            localStorage.setItem("savedUsername", username);
            localStorage.setItem("savedPassword", password);
        } else {
            localStorage.removeItem("rememberMe");
            localStorage.removeItem("savedUsername");
            localStorage.removeItem("savedPassword");
        }

        // Store username in sessionStorage to show on the next page
        sessionStorage.setItem("loggedInUser", username);

        // Redirect to the next page
        window.location.href = "index.html"; // Update path if necessary
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Function to load saved credentials if "Remember Me" was previously checked
function loadRememberedUser() {
    if (localStorage.getItem("rememberMe") === "true") {
        document.getElementById("username").value = localStorage.getItem("savedUsername");
        document.getElementById("password").value = localStorage.getItem("savedPassword");
        document.getElementById("remember").checked = true;
    }
}

// Function to display the logged-in username
function displayLoggedInUser() {
    let loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
        document.getElementById("welcomeMessage").innerText = "Welcome, " + loggedInUser + "!";
    }
}

// Call functions on page load
document.addEventListener("DOMContentLoaded", function() {
    loadRememberedUser();
    displayLoggedInUser();
});

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
            // If "Remember Me" is unchecked, clear saved data
            localStorage.removeItem("rememberMe");
            localStorage.removeItem("savedUsername");
            localStorage.removeItem("savedPassword");
        }

        // Log for debugging
        console.log("Redirecting to nextpage.html");

        // Redirect to the next page
        window.location.href = "nextpage.html"; // Update path if necessary
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Function to load saved credentials if "Remember Me" was previously checked
function loadRememberedUser() {
    // Check if "Remember Me" is set in localStorage
    if (localStorage.getItem("rememberMe") === "true") {
        // Auto-fill the username and password fields
        document.getElementById("username").value = localStorage.getItem("savedUsername");
        document.getElementById("password").value = localStorage.getItem("savedPassword");
        // Check the "Remember Me" checkbox
        document.getElementById("remember").checked = true;
    }
}

// Call the loadRememberedUser function when the page loads
document.addEventListener("DOMContentLoaded", loadRememberedUser);

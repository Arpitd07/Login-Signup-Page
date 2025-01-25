document.addEventListener("DOMContentLoaded", function () {
    // Handle form submission for login
    document.getElementById("checkButton").addEventListener("click", async function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const result = document.getElementById("result");

        if (!username || !password) {
            result.textContent = "Username and password are required.";
            result.style.color = "red";
            return;
        }

        // Send login request to the server
        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                window.location.href = "home"; // Redirect on success
            } else {
                const message = await response.text();
                result.textContent = message;
                result.style.color = "red";
            }
        } catch (error) {
            result.textContent = "Error during login. Please try again.";
            result.style.color = "red";
        }

        setTimeout(() => {
            result.textContent = '';
        }, 1000);
    });


    document.getElementById('togglePassword').addEventListener('click', function () {
            if (document.getElementById('password').value.length > 0){
                const passwordField = document.getElementById('password');
                const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordField.setAttribute('type', type);
                this.src = type === 'password' ? '/images/hidden.png' : '/images/eye.png';
            }    
    });
    
});

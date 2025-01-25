document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("checkButton").addEventListener("click", async function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const result = document.getElementById("result");
        const length = password.length >= 8;
        const capitalLetter = /[A-Z]/.test(password);
        const number = /[0-9]/.test(password);
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const usernameInPass = password.includes(username);

        if (!username || !password) {
            result.textContent = "Username and password are required.";
            result.style.color = "red";
            return;
        }
        else if (length && capitalLetter && number && specialChar && !usernameInPass) {
            alert('Password is Strong');
            result.textContent = 'Password is Strong';
            result.style.color = 'green';
        }
        else if (!length) {
            result.textContent = 'Password must be atlest 8 characters long';
            result.style.color = 'red';
        }
        else if (!capitalLetter) {
            result.textContent = 'Password must contain a capital letter';
            result.style.color = 'red';
        }
        else if (!number) {
            result.textContent = 'Password must contain atleat one number';
            result.style.color = 'red';
        }
        else if (!specialChar) {
            result.textContent = 'Password must atleast contain one special symbol';
            result.style.color = 'red';
        }
        else if (usernameInPass) {
            result.textContent = 'Password must not contain the username';
            result.style.color = 'red';
        }
        else {
            result.textContent = 'Password is not Strong';
            result.style.color = 'red';
        }
        
        // Send signup request to the server
        try {
            const response = await fetch("/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            
            if (response.ok) {
                window.location.href = "/home"; // Redirect on success
            } else {
                const message = await response.text();
                result.textContent = message;
                result.style.color = "red";
            }
        } catch (error) {
            result.textContent = "Error during signup. Please try again.";
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

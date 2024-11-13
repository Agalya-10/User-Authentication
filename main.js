

async function MyButton(event) { 
    event.preventDefault();

    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;

    let nameError = document.getElementById('nameError');
    let passwordError = document.getElementById('passwordError');

    let valid = true;

    if (userName.trim() === "") {
        nameError.textContent = "Username is required*";
        nameError.style.color = "red";
        nameError.style.fontSize = "13px";
        nameError.style.paddingLeft = "15px";
        valid = false;
    }
    else if (userName !== "ebrain") {
         nameError.textContent = "Username is wrong.";
         nameError.style.color = "red";
         nameError.style.fontSize = "13px";
         nameError.style.paddingLeft = "15px";
        valid = false;
    }  
    else {
        nameError.textContent = '';
    }

    if (password.trim() === "") {
        passwordError.textContent = "Password is required*";
        passwordError.style.color = "red";
        passwordError.style.fontSize = "13px";
        passwordError.style.paddingLeft = "15px";
        valid = false;
    } 
    else if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        passwordError.style.color = "red";
        passwordError.style.fontSize = "13px";
        passwordError.style.paddingLeft = "15px";
        valid = false;
    }
    else if (password !== "Ji#993te") {
        passwordError.textContent = "Password is wrong.";
        passwordError.style.color = "red";
        passwordError.style.fontSize = "13px";
        passwordError.style.paddingLeft = "15px";
        valid = false;
    } 
    else {
        passwordError.textContent = '';
    }
    if (valid) {
        const data = {
            userName: userName,
            password: password
        };

        try {
            const response = await fetch('https://hastin-container.com/staging/app/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Logged in Successfully.:", result);
                alert("Logged in Successfully.!");
                document.getElementById('form').reset(); 
            } else {
                throw new Error("Creation failed");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Password is wrong.!");
        }
    }
}
document.getElementById("togglePasswords").addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    const toggleIcon = document.getElementById("togglePasswords");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("bxs-hide");
        toggleIcon.classList.add("bxs-show");
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("bxs-show");
        toggleIcon.classList.add("bxs-hide");
    }
});



































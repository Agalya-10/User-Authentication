
let valid = true;
if (valid) {
    const data = {
        userName: userName,
        email: email,
        password: password,
        cpassword: cpassword
    };
}

async function fetchUserData() {
    try {
        const response = await fetch('  https://hastin-container.com/staging/api/vendor/create');
        if (response.ok) {
            const users = await response.json();
            displayTable(users);
        } else {
            throw new Error("Failed to fetch data");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

function displayTable(users) {
    const tableBody = document.getElementById('table2');
    tableBody.innerHTML = ''; 

    users.forEach(user => {
        const row = `<tr>
            <td>${user.userName}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.cpassword}</td>
           
        </tr>`;
        tableBody.innerHTML += row;
    });
}
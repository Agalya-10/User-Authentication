function addButton() {
    window.location = "create.html";
}

function saveButton(event) { 
    event.preventDefault();

    let vendorName = document.getElementById('vendorName').value;
    let vendorCode = document.getElementById('vendorCode').value;
    let vendorType = document.getElementById('vendorType').value;
    let registrationNo = document.getElementById('registrationNo').value;
    let comRegistrationNo = document.getElementById('comRegistrationNo').value;
    let currency = document.getElementById('currency').value;
    let address1 = document.getElementById('address1').value;
    let country = document.getElementById('country').value;
    let city= document.getElementById('city').value;
    let zipCode = document.getElementById('zipCode').value;


    let nameError = document.getElementById('nameError');
    let vendorCodeError = document.getElementById('vendorCodeError');
    let typeError = document.getElementById('typeError');
    let taxRegistrationNoError = document.getElementById('taxRegistrationNoError');
    let comRegistrationNoError = document.getElementById('comRegistrationNoError');
    let currencyError = document.getElementById('currencyError');
    let AddressError1 = document.getElementById('AddressError1');
    let countryError = document.getElementById('countryError');
    let cityError = document.getElementById('cityError');
    let zipcodeError = document.getElementById('zipcodeError');
    


    let valid = true;

    if (vendorName.trim() === "") {
        nameError.textContent = "Required*";
        nameError.style.color = "red";
        nameError.style.fontSize = "13px";
        nameError.style.paddingLeft = "15px";
        valid = false;
    }
    else {
        nameError.textContent = '';
    }
    if (vendorCode.trim() === "") {
       codeError.textContent = "Required*";
       codeError.style.color = "red";
       codeError.style.fontSize = "13px";
       codeError.style.paddingLeft = "15px";
        valid = false;
    }
    else {
       codeError.textContent = '';
    }

    if (vendorType.trim() === "") {
        typeError.textContent = "Required*";
        typeError.style.color = "red";
        typeError.style.fontSize = "13px";
        typeError.style.paddingLeft = "15px";
         valid = false;
     }
     else {
        typeError.textContent = '';
     }
 
     if (registrationNo.trim() === "") {
       taxRegistrationNoError.textContent = "Required*";
       taxRegistrationNoError.style.color = "red";
       taxRegistrationNoError.style.fontSize = "13px";
       taxRegistrationNoError.style.paddingLeft = "15px";
         valid = false;
     }
     else {
       taxRegistrationNoError.textContent = '';
     }

     if (comRegistrationNo.trim() === "") {
       comRegistrationNoError.textContent = " Required*";
       comRegistrationNoError.style.color = "red";
       comRegistrationNoError.style.fontSize = "13px";
       comRegistrationNoError.style.paddingLeft = "15px";
         valid = false;
     }
     else {
       comRegistrationNoError.textContent = '';
     }
     if (currency.trim() === "") {
        currencyError.textContent = " Required*";
        currencyError.style.color = "red";
        currencyError.style.fontSize = "13px";
        currencyError.style.paddingLeft = "15px";
         valid = false;
     }
     else {
        currencyError.textContent = '';
     }
     if (address1.trim() === "") {
        AddressError1.textContent = " Required*";
        AddressError1.style.color = "red";
        AddressError1.style.fontSize = "13px";
        AddressError1.style.paddingLeft = "15px";
         valid = false;
     }
     else {
        AddressError1.textContent = '';
     }
     
     if (country.trim() === "") {
        countryError.textContent = " Required*";
        countryError.style.color = "red";
        countryError.style.fontSize = "13px";
        countryError.style.paddingLeft = "15px";
         valid = false;
     }
     else {
        countryError.textContent = '';
     }
     if (city.trim() === "") {
         cityError.textContent = " Required*";
         cityError.style.color = "red";
         cityError.style.fontSize = "13px";
         cityError.style.paddingLeft = "15px";
         valid = false;
     }
     else {
         cityError.textContent = '';
     }
     if (zipCode.trim() === "") {
        zipcodeError.textContent = " Required*";
        zipcodeError.style.color = "red";
        zipcodeError.style.fontSize = "13px";
        zipcodeError.style.paddingLeft = "15px";
        valid = false;
    }
    else {
        zipcodeError.textContent = '';
    }

}


async function populateCurrencies() {
    try {
        // Retrieve the JWT token from local storage
        const jwtToken = localStorage.getItem('jwtToken');
        
        if (!jwtToken) {
            alert("Authorization token is missing.");
            return;
        }

        // API call to fetch currencies
        const response = await fetch('https://hastin-container.com/staging/api/meta/currencies', {
            method: 'GET',
            headers: {
                'Authorization': `BslogiKey ${jwtToken}`,
                'Content-Type': 'application/json',
            },
        });

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch currencies');
        }

        // Parse the response as JSON
        const data = await response.json();

        // Debugging: Log the response to verify structure
        console.log(data);

        // Validate and extract the currency array
        const currency = data?.data;

        if (!Array.isArray(currency)) {
            throw new Error('Currency data is missing or invalid.');
        }

        // Get the dropdown element
        const dropdown = document.getElementById('currencies-dropdown');

        // Clear existing options (if any)
        dropdown.innerHTML = '<option value="" disabled selected>Select a currency</option>';

        // Populate the dropdown with options
        currency.forEach(currencys => {
            const option = document.createElement('option');
            option.value = currencys.code; // Set the value of the option
            option.textContent = currencys.name; // Set the display text of the option
            dropdown.appendChild(option); // Add the option to the dropdown
        });
    } catch (error) {
        // Handle errors and display a user-friendly message
        console.error('Error:', error.message);
        const errorDiv = document.getElementById('currencyError');
        errorDiv.textContent = `Error: ${error.message}`;
        errorDiv.style.color = 'red';
    }
}

// Call the function to populate the currencies
populateCurrencies();


async function populatecountry() {
    try {
        // Retrieve the JWT token from local storage
        const jwtToken = localStorage.getItem('jwtToken');
        
        if (!jwtToken) {
            alert("Authorization token is missing.");
            return;
        }

        // API call to fetch currencies
        const response = await fetch('https://hastin-container.com/staging/api/meta/country', {
            method: 'GET',
            headers: {
                'Authorization': `BslogiKey ${jwtToken}`,
                'Content-Type': 'application/json',
            },
        });

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch currencies');
        }

        // Parse the response as JSON
        const data = await response.json();

        // Debugging: Log the response to verify structure
        console.log(data);

        // Validate and extract the currency array
        const country = data?.data;

        if (!Array.isArray(country)) {
            throw new Error('country data is missing or invalid.');
        }

        // Get the dropdown element
        const dropdown = document.getElementById('country-dropdown');

        // Populate the dropdown with options
        country.forEach(countrys => {
            const option = document.createElement('option');
            option.value = countrys.code; // Set the value of the option
            option.textContent = countrys.name; // Set the display text of the option
            dropdown.appendChild(option); // Add the option to the dropdown
        });
    } catch (error) {
        // Handle errors
        console.error('Error:', error.message);
    }
}

// Call the function to populate the currencies
populatecountry();


async function populatecity() {
    try {
        // Retrieve the JWT token from local storage
        const jwtToken = localStorage.getItem('jwtToken');
        
        if (!jwtToken) {
            alert("Authorization token is missing.");
            return;
        }

        // API call to fetch currencies
        const response = await fetch(' https://hastin-container.com/staging/api/countryCities/get', {
            method: 'GET',
            headers: {
                'Authorization': `BslogiKey ${jwtToken}`,
                'Content-Type': 'application/json',
            },
        });

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch currencies');
        }

        // Parse the response as JSON
        const data = await response.json();

        // Debugging: Log the response to verify structure
        console.log(data);

        // Validate and extract the currency array
        const city = data?.data;

        if (!Array.isArray(city)) {
            throw new Error('Currency data is missing or invalid.');
        }

        // Get the dropdown element
        const dropdown = document.getElementById('city-dropdown');

        // Populate the dropdown with options
        city.forEach(citys => {
            const option = document.createElement('option');
            option.value = citys.code; // Set the value of the option
            option.textContent = citys.name; // Set the display text of the option
            dropdown.appendChild(option); // Add the option to the dropdown
        });
    } catch (error) {
        // Handle errors
        console.error('Error:', error.message);
    }
}

// Call the function to populate the currencies
populatecity();

// async function populateCurrencies() {
//     try {
//         const jwtToken = localStorage.getItem('jwtToken');
        
//         if (!jwtToken) {
//             alert("Authorization token is missing.");
//             return;
//         }
//       const response = await fetch ('https://hastin-container.com/staging/api/meta/currencies',{
//         method: 'GET',
//         headers: {
//             'Authorization': `BslogiKey ${jwtToken}`,
//             'Content-Type': 'application/json',
//         }
//     });

      
//       if (!response.ok) {
//         throw new Error('Failed to fetch currencies');
//       }
//       const data = await response.json();

//       const dropdown = document.getElementById('currency-dropdown');

//       data.forEach(currency => {
//         const option = document.createElement('option');
//         option.value = currency.code; 
//         option.textContent = currency.name; 
//         dropdown.appendChild(option); 
//       });
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   }
 
//   populateCurrencies();
function addButton() {
    window.location = "create.html";
}

function getQueryParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id'); 
    console.log(id);
    editUser(id);
  }
  
  getQueryParam(); 
let countryId = '';


async function editUser(id) {
    const jwtToken = localStorage.getItem('jwtToken');
        const response = await fetch(` https://hastin-container.com/staging/api/vendor/get/${id}`,{
            method: 'GET',
            headers: {
                'Authorization': `BslogiKey ${jwtToken}`,
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            // window.location ="create.html";
            const user = await response.json();
            const data =user.data;
        //    console.log(document.getElementById('vendorName').value);
          document.getElementById('vendorName').value =data.vendorName;
          document.getElementById('vendorCode').value =data.vendorCode;
          document.getElementById('vendorType').value =data.vendorType;
          document.getElementById('registrationNo').value =data.taxRegNo;
          document.getElementById('comRegistrationNo').value =data.companyRegNo;
          document.getElementById('currency').value =data.vendorName;
          document.getElementById('address1').value =data.address1;
          document.getElementById('address2').value =data. address2;
          document.getElementById('city').value =data.cityId;
          document.getElementById('country').value =data. country;
          document.getElementById('zipCode').value =data.postalCode;
          document.getElementById('accName').value =data.name;
          document.getElementById('accNo').value =data.email;
          document.getElementById('bankName').value =data.mobileNo;
          document.getElementById('bankName').value =data.mobileNo;



        for (let i = 0; i <data.contactList.length; i++) {
            document.getElementById('Name').value =data.contactList[i].name;
            document.getElementById('Email').value =data.contactList[i].email;
            document.getElementById('phoneNumber').value =data.contactList[i].mobileNo;
            document.getElementById('chooseDefault').value =data.contactList[i].isDefault;
          }
            editingUserId = id; 
           

        } else {
            throw new Error("Failed to fetch user data");
        }

}
document.addEventListener('DOMContentLoaded', () => {
    editUser();
});


async function saveButton(event,id) { 
    event.preventDefault();

    let vendorName = document.getElementById('vendorName').value;
    let vendorCode = document.getElementById('vendorCode').value;
    let vendorType = document.getElementById('vendorType').value;
    let registrationNo = document.getElementById('registrationNo').value;
    let comRegistrationNo = document.getElementById('comRegistrationNo').value;
    let currency = document.getElementById('currency').value;
    let address1 = document.getElementById('address1').value;
    let address2 = document.getElementById('address2').value;
    let country = document.getElementById('country').value;
    let city= document.getElementById('city').value;
    let zipCode = document.getElementById('zipCode').value;
    let Name = document.getElementById('Name').value;
    let Email = document.getElementById('Email').value;
    let phoneno = document.getElementById('phoneno').value;
    // let Default = document.getElementById('Default').value;


    let nameError = document.getElementById('nameError');
    let codeError = document.getElementById('codeError');
    let typeError = document.getElementById('typeError');
    let taxRegistrationNoError = document.getElementById('taxRegistrationNoError');
    let comRegistrationNoError = document.getElementById('comRegistrationNoError');
    let currencyError = document.getElementById('currencyError');
    let AddressError1 = document.getElementById('AddressError1');
    let AddressError2 = document.getElementById('AddressError2');
    let countryError = document.getElementById('countryError');
    let cityError = document.getElementById('cityError');
    let zipcodeError = document.getElementById('zipcodeError');
    let Nameerror = document.getElementById('Nameerror');
    let Emailerror = document.getElementById('Emailerror');
    let numError = document.getElementById('numError');
    // let defaultError = document.getElementById('defaultError');

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
     if (address2.trim() === "") {
        AddressError2.textContent = " Required*";
        AddressError2.style.color = "red";
        AddressError2.style.fontSize = "13px";
        AddressError2.style.paddingLeft = "15px";
         valid = false;
     }
     else {
        AddressError2.textContent = '';
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
    if (Name.trim() === "") {
       Nameerror.textContent = " Required*";
       Nameerror.style.color = "red";
       Nameerror.style.fontSize = "13px";
       Nameerror.style.paddingLeft = "15px";
        valid = false;
    }
    else {
       Nameerror.textContent = '';
    }
    if (Email.trim() === "") {
       Emailerror.textContent = " Required*";
       Emailerror.style.color = "red";
       Emailerror.style.fontSize = "13px";
       Emailerror.style.paddingLeft = "15px";
        valid = false;
    }
    else {
       Emailerror.textContent = '';
    }
    if (phoneno.trim() === "") {
        numError.textContent = " Required*";
        numError.style.color = "red";
        numError.style.fontSize = "13px";
        numError.style.paddingLeft = "15px";
         valid = false;
     }
     else {
        numError.textContent = '';
     }
    //  if (Default.trim() === "") {
    //    defaultError.textContent = " Required*";
    //    defaultError.style.color = "red";
    //    defaultError.style.fontSize = "13px";
    //    defaultError.style.paddingLeft = "15px";
    //      valid = false;
    //  }
    //  else {
    //    defaultError.textContent = '';
    //  }


    // Payload creation
//     const payload = {
//         contactList: [
//             {
//                 name: Name,
//                 email: Email,
//                 mobileNo: phoneno,
//                 isDefault: true, 
//                 id: null,
//             }
//         ],
//         vendorName: vendorName,
//         vendorCode: vendorCode,
//         vendorType: vendorType,
//         taxRegNo: registrationNo,
//         companyRegNo: comRegistrationNo,
//         address1: address1,
//         address2: address2,
//         country: country,
//         postalCode: zipCode,
//         cityId: "baba903e-c5be-4165-a20a-c24dbb714325",
//         createdBy: "adf8906a-cf9a-490f-a233-4df16fc86c58",
//         documentList: []
//     };

//     try {
    
//         const jwtToken = localStorage.getItem('jwtToken');
//         if (!jwtToken) {
//             alert("Authorization token is missing. Please login again.");
//             return;
//         }
//         // let response;
//         if (id) {
//             response = await fetch(`https://hastin-container.com/staging/api/vendor/update${id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `BslogiKey ${jwtToken}`
//                 },
//                 body: JSON.stringify(payload)
//             });
//         } else {
//            const response = await fetch('https://hastin-container.com/staging/api/vendor/create', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `BslogiKey ${jwtToken}`
//             },
//             body: JSON.stringify(payload)
//         });}
    
//         if (response.ok) {
//             const result = await response.json();
//             console.log(editingUserId ? "vendor updated successfully:" : "vendor created successfully:", result);
//             alert(editingUserId ? "vendor updated successfully!" : "vendor created successfully!");
//             // document.getElementById('formpage').reset(); 
//             editingUserId = null; 
//             fetchUserData();
//             // const result = await response.json();
//             // console.log("Vendor Created Successfully:", result);
//             // alert("Vendor Created Successfully!");
//         } else {
//             const errorMessage = await response.text();
//             console.error("Vendor creation failed:", errorMessage);
//             alert(`Error: ${errorMessage}`);
//         }
//     } catch (error) {
//         console.error("Error occurred:", error);
//         alert("An unexpected error occurred. Please try again.");
//     }

// }




const payload = {
    contactList: [
        {
            name: document.getElementById('Name').value,
            email: document.getElementById('Email').value,
            mobileNo: document.getElementById('phoneNumber')?.value,
            isDefault: true,
            id: null,
        },
    ],
    vendorName: document.getElementById('vendorName').value,
    vendorCode: document.getElementById('vendorCode').value,
    vendorType: document.getElementById('vendorType').value,
    taxRegNo: document.getElementById('registrationNo').value,
    companyRegNo: document.getElementById('comRegistrationNo').value,
    address1: document.getElementById('address1').value,
    address2: document.getElementById('address2').value,
    country: document.getElementById('country').value,
    postalCode: document.getElementById('zipCode').value,
    cityId: "baba903e-c5be-4165-a20a-c24dbb714325",
    createdBy: "adf8906a-cf9a-490f-a233-4df16fc86c58",
    documentList: [],
};

try {
    let response;
    const jwtToken = localStorage.getItem('jwtToken');
console.log(id)
    if (id) {
        console.log(id)
        // Update vendor if ID is present
        response = await fetch(`https://hastin-container.com/staging/api/vendor/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `BslogiKey ${jwtToken}`,
            },
            body: JSON.stringify(payload),
        });
    } else {
        // Create new vendor
        response = await fetch('https://hastin-container.com/staging/api/vendor/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `BslogiKey ${jwtToken}`,
            },
            body: JSON.stringify(payload),
        });
    }

    if (response.ok) {
        const result = await response.json();
        alert(id ? "Vendor updated successfully!" : "Vendor created successfully!");
        console.log(result);
        editingUserId = null; // Reset editing ID
        fetchUserData(); // Refresh data
    } else {
        const errorMessage = await response.text();
        console.error("Operation failed:", errorMessage);
        alert(`Error: ${errorMessage}`);
    }
} catch (error) {
    console.error("Error occurred:", error);
    alert("An unexpected error occurred. Please try again.");
}
}






async function populateCurrencies() {
    try {
        const jwtToken = localStorage.getItem('jwtToken');
        
        if (!jwtToken) {
            alert("Authorization token is missing.");
            return;
        }
        const response = await fetch('https://hastin-container.com/staging/api/meta/currencies', {
            method: 'GET',
            headers: {
                'Authorization': `BslogiKey ${jwtToken}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch currencies');
        }
        const data = await response.json();
        console.log(data);

        const currency = data?.data;

        if (!Array.isArray(currency)) {
            throw new Error('Currency data is missing or invalid.');
        }
        const dropdown = document.getElementById('currency');
        dropdown.innerHTML = '<option value="" disabled selected></option>';

        currency.forEach(currencys => {
            const option = document.createElement('option');
            option.value = currencys.code; 
            option.textContent = currencys.name; 
            dropdown.appendChild(option); 
        });
    } catch (error) {
        console.error('Error:', error.message);
        const errorDiv = document.getElementById('currencyError');
        errorDiv.textContent = `Error: ${error.message}`;
        errorDiv.style.color = 'red';
    }
}


populateCurrencies();


async function populateCountry() {
    try {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
            alert("Authorization token is missing.");
            return;
        }

        const response = await fetch('https://hastin-container.com/staging/api/meta/country', {
            method: 'GET',
            headers: {
                'Authorization': `BslogiKey ${jwtToken}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch countries');
        }

        const data = await response.json();
        const countries = data?.data;

        if (!Array.isArray(countries)) {
            throw new Error('Country data is missing or invalid.');
        }

        const countryDropdown = document.getElementById('country');

        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.id;
            option.textContent = country.name;
            countryDropdown.appendChild(option);
        });

        countryDropdown.addEventListener('change', (event) => {
            const selectedCountryId = event.target.value; 
            populateCity(selectedCountryId); 
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}


async function populateCity(countryId) {
    try {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
            alert("Authorization token is missing.");
            return;
        }

        const response = await fetch('https://hastin-container.com/staging/api/countryCities/get', {
            method: 'GET',
            headers: {
                'Authorization': `BslogiKey ${jwtToken}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch cities');
        }

        const data = await response.json();
        const cities = data?.data;

        const filteredCities = cities.filter(city => city.countryId === countryId);
        populateCityDropdown(filteredCities); 
    } catch (error) {
        console.error('Error:', error.message);
    }
}

function populateCityDropdown(cities) {
    const cityDropdown = document.getElementById('city');

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city.id; 
        option.textContent = city.cityName; 
        cityDropdown.appendChild(option);
    });
}

populateCountry();




function updateSerialNumbers() {
    const rows = document.querySelectorAll("#tableBody tr");
    rows.forEach((row, index) => {
        row.querySelector(".sno").textContent = index + 1; 
    });
}

function addRow() {
    const tableBody = document.getElementById("tableBody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
                <td class="sno" style="text-align: center;"></td>
                <td>
                    <div class="form-floating ">
                        <input type="text" class="form-control border-1 rounded-0 border-start-0 border-end-0 border-top-0 " style="box-shadow: none;" id="Name" placeholder=" Name" name=" Name">
                        <label for="name"> Name</label>
                        <div id="Nameerror"></div>
                    </div>
                </td>
                <td> 
                    <div class="form-floating ">
                        <input type="text" class="form-control border-1 rounded-0 border-start-0 border-end-0 border-top-0 " style="box-shadow: none;" id="Email" placeholder=" Email" name=" Email">
                        <label for="Email"> Email</label>
                        <div id="Emailerror"></div>
                    </div>
                </td>
                <td>
                    <div class="form-floating ">
                        <input type="text" class="form-control border-1 rounded-0 border-start-0 border-end-0 border-top-0 " style="box-shadow: none;" id="phoneno" placeholder=" phno" name=" phno">
                        <label for="phno">Phone No</label>
                        <div id="numError"></div>
                    </div>
                </td>
               
                <td>
                    <select class="form-select border-1 rounded-0 border-start-0 border-end-0 border-top-0 border-bottom-0"style=""id="default" placeholder="default"  name="default">
                        <option value="" selected disabled>Is Default</option>
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                    <label for="default"></label>
                    <div id="defaultError"></div>
                </td>
                <td>
                    <i class='bx bxs-trash text-danger fs-3 delete-row'  id="delete" ></i>
                    </td>
            
    `;
    

    tableBody.appendChild(newRow);
    updateSerialNumbers(); 
}
function removeRow(event) {
    if (event.target.classList.contains("delete-row")) {
        const row = event.target.closest("tr");
        row.remove(); 
        updateSerialNumbers();
    }
}
document.getElementById("addRowButton").addEventListener("click", addRow); 
document.getElementById("tableBody").addEventListener("click", removeRow);





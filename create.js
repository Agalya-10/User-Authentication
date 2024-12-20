function addButton() {
    window.location = "create.html";
}


let countryIdGet = "";
let parentId = "";
let edit = false;
function getQueryParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  console.log(id);
  if(id!=null){
    editUser(id);
  }
}
let savebutton = document.getElementById('savebutton');
getQueryParam();

async function editUser(id) {
  edit = true;
  savebutton.innerHTML = 'Update';
  const jwtToken = localStorage.getItem("jwtToken");
  const response = await fetch(
    `https://hastin-container.com/staging/api/vendor/get/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `BslogiKey ${jwtToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (response.ok) {
    const user = await response.json();
    const data = user.data;
    await fetchCurrencies();
    await countryGet();
    parentId = data.id;
    document.getElementById("vendorName").value = data.vendorName;
    document.getElementById("vendorCode").value = data.vendorCode;
    document.getElementById("vendorType").value = data.vendorType;
    document.getElementById("add1").value = data.address;
    document.getElementById("country").value = data.country;
    countryIdGet = data.country;
    document.getElementById("registrationNo").value = data.taxRegNo;
    document.getElementById("comRegistrationNo").value = data.companyRegNo;
    document.getElementById("currencyContainer").value = data.defaultCurrencyId;
    await cityGet();
    document.getElementById("add1").value = data.address1;
    document.getElementById("add2").value = data.address2;
    document.getElementById("city").value = data.cityId;
    document.getElementById("zip").value = data.postalCode;
    document.getElementById("bankaccountName").value = data.bankAcctName;
    document.getElementById("bankaccountNumber").value = data.bankAccountNum;
    document.getElementById("bankName").value = data.bankName;
    document.getElementById("branch").value = data.bankBranchName;
    document.getElementById("swiftCode").value = data.bankSwiftCode;

    for (let i = 0; i < data.contactList.length - 1; i++) {
      addRow();
    }

    for (let i = 0; i <= data.contactList.length; i++) {

      j = i + 1
      document.getElementById("Name"+j).value = data.contactList[i].name;
      document.getElementById("Email"+j).value = data.contactList[i].email;
      document.getElementById("phoneNumber"+j).value =data.contactList[i].mobileNo;
      document.getElementById("chooseDefault"+j).value = data.contactList[i].isDefault;
      document.getElementById("rowId").value = data.contactList[i].id;
    }

  } else {
    throw new Error("Failed to fetch user data");
  }
}

async function saveButton(event) {
  event.preventDefault();

  let vendorName = document.getElementById("vendorName").value;
  let vendorCode = document.getElementById("vendorCode").value;
  let vendorType = document.getElementById("vendorType").value;
  let registrationNo = document.getElementById("registrationNo").value;
  let comRegistrationNo = document.getElementById("comRegistrationNo").value;
  let currencyContainer = document.getElementById("currencyContainer").value;
  let add1 = document.getElementById("add1").value;
  let add2 = document.getElementById("add2").value;
  let country = document.getElementById("country").value;
  let city = document.getElementById("city").value;
  let zip = document.getElementById("zip").value;
  let Name1 = document.getElementById("Name1").value;
  let Email1 = document.getElementById("Email1").value;
  let phoneNumber1 = document.getElementById("phoneNumber1").value;
  let chooseDefault1 = document.getElementById("chooseDefault1").value;
  let rowId = document.getElementById("rowId").value;
  let bankAcctName = document.getElementById("bankaccountName").value;
  let bankName = document.getElementById("bankName").value;
  let bankBranchName = document.getElementById("branch").value;
  let bankAccountNum = document.getElementById("bankaccountNumber").value;
  let bankSwiftCode = document.getElementById("swiftCode").value;

  let nameError = document.getElementById("nameError");
  let vendorCodeError = document.getElementById("vendorCodeError");
  let typeError = document.getElementById("typeError");
  let taxRegistrationNoError = document.getElementById("taxRegistrationNoError");
  let comRegistrationNoError = document.getElementById("comRegistrationNoError");
  let currencyError = document.getElementById("currencyError");
  let addressError1 = document.getElementById("addressError1");
  let addressError2 = document.getElementById("addressError2");
  let countryError = document.getElementById("countryError");
  let chooseCityError = document.getElementById("chooseCityError");
  let zipError = document.getElementById("zipError");
  let Nameerror1 = document.getElementById("Nameerror1");
  let Emailerror1 = document.getElementById("Emailerror1");
  let numberError1 = document.getElementById("numberError1");
  let defaultError1 = document.getElementById("defaultError1");

  let valid = true;

  if (vendorName.trim() === "") {
    nameError.textContent = "Required*";
    nameError.style.color = "red";
    nameError.style.fontSize = "13px";
    nameError.style.paddingLeft = "15px";
    valid = false;
  } else {
    nameError.textContent = "";
  }
  if (vendorCode.trim() === "") {
    codeError.textContent = "Required*";
    codeError.style.color = "red";
    codeError.style.fontSize = "13px";
    codeError.style.paddingLeft = "15px";
    valid = false;
  } else {
    codeError.textContent = "";
  }

  if (vendorType.trim() === "") {
    typeError.textContent = "Required*";
    typeError.style.color = "red";
    typeError.style.fontSize = "13px";
    typeError.style.paddingLeft = "15px";
    valid = false;
  } else {
    typeError.textContent = "";
  }

  if (registrationNo.trim() === "") {
    taxRegistrationNoError.textContent = "Required*";
    taxRegistrationNoError.style.color = "red";
    taxRegistrationNoError.style.fontSize = "13px";
    taxRegistrationNoError.style.paddingLeft = "15px";
    valid = false;
  } else {
    taxRegistrationNoError.textContent = "";
  }

  if (comRegistrationNo.trim() === "") {
    comRegistrationNoError.textContent = " Required*";
    comRegistrationNoError.style.color = "red";
    comRegistrationNoError.style.fontSize = "13px";
    comRegistrationNoError.style.paddingLeft = "15px";
    valid = false;
  } else {
    comRegistrationNoError.textContent = "";
  }

  if (currencyContainer.trim() === "") {
    currencyError.textContent = " Required*";
    currencyError.style.color = "red";
    currencyError.style.fontSize = "13px";
    currencyError.style.paddingLeft = "15px";
    valid = false;
  } else {
    currencyError.textContent = "";
  }

  if (add1.trim() === "") {
    addressError1.textContent = " Required*";
    addressError1.style.color = "red";
    addressError1.style.fontSize = "13px";
    addressError1.style.paddingLeft = "15px";
    valid = false;
  } else {
    addressError1.textContent = "";
  }

  if (country.trim() === "") {
    countryError.textContent = " Required*";
    countryError.style.color = "red";
    countryError.style.fontSize = "13px";
    countryError.style.paddingLeft = "15px";
    valid = false;
  } else {
    countryError.textContent = "";
  }


  if (city.trim() === "") {
    chooseCityError.textContent = " Required*";
    chooseCityError.style.color = "red";
    chooseCityError.style.fontSize = "13px";
    chooseCityError.style.paddingLeft = "15px";
    valid = false;
  } else {
    chooseCityError.textContent = "";
  }
  if (zip.trim() === "") {
    zipError.textContent = " Required*";
    zipError.style.color = "red";
    zipError.style.fontSize = "13px";
    zipError.style.paddingLeft = "15px";
    valid = false;
  } else {
    zipError.textContent = "";
  }

  if (Name1.trim() === "") {
    Nameerror1.textContent = " Required*";
    Nameerror1.style.color = "red";
    Nameerror1.style.fontSize = "13px";
    Nameerror1.style.paddingLeft = "15px";
    valid = false;
  } else {
    Nameerror1.textContent = "";
  }

  if (Email1.trim() === "") {
    Emailerror1.textContent = " Required*";
    Emailerror1.style.color = "red";
    Emailerror1.style.fontSize = "13px";
    Emailerror1.style.paddingLeft = "15px";
    valid = false;
  } else {
    Emailerror1.textContent = "";
  }
  if (phoneNumber1.trim() === "") {
    numberError1.textContent = " Required*";
    numberError1.style.color = "red";
    numberError1.style.fontSize = "13px";
    numberError1.style.paddingLeft = "15px";
    valid = false;
  }
  else if (phoneNumber1.length < 10) {
    passwordError1.textContent = "Invalid mobile number";
    passwordError1.style.color = "red";
    passwordError1.style.fontSize = "13px";
    passwordError1.style.paddingLeft = "15px";
    valid = false;
} 
  else {
    numberError1.textContent = "";
  }

  if (chooseDefault1.trim() === "") {
    defaultError1.textContent = " Required*";
    defaultError1.style.color = "red";
    defaultError1.style.fontSize = "13px";
    defaultError1.style.paddingLeft = "15px";
    valid = false;
  } else {
    defaultError1.textContent = "";
  }
const contactList = [];
  const rows = document.querySelectorAll('#table2 tr');

  let allRowsValid = true; 

  rows.forEach(row => {
    const Name = document.getElementById(`Name${i}`).value;
    const Email = document.getElementById(`Email${i}`).value;
    const phoneNumber = document.getElementById(`phoneNumber${i}`).value;
    const chooseDefault = document.getElementById(`chooseDefault${i}`).value;

   
    const isRowValid = validateRow(i);
    if (!isRowValid) {
      allRowsValid = false;
    }

    if (isRowValid) {
      contactList.push({
        name: Name,
        email: Email,
        mobileNo: phoneNumber,
        isDefault: chooseDefault,
      });
    }
  });

  if (valid && allRowsValid) {
    const jwtToken = localStorage.getItem("jwtToken");

    // try
    if (edit) {
      const payload = {
        id: parentId,
        vendorName: vendorName,
        vendorCode: vendorCode,
        vendorType: vendorType,
        taxRegNo: registrationNo,
        companyRegNo: comRegistrationNo,
        // currencyContainer:currencyContainer,
        defaultCurrencyId: currencyContainer,
        address1: add1,
        address2: add2,
        country: country,
        postalCode: zip,
        bankAcctName: bankAcctName,
        bankName: bankName,
        bankBranchName: bankBranchName,
        bankAccountNum: bankAccountNum,
        bankSwiftCode: bankSwiftCode,
        cityId: city,
        cityName: "",
        notes: "",
        createdBy: "adf8906a-cf9a-490f-a233-4df16fc86c58",
        documentList: [],
        contactList: [
          {
            name: Name1,
            email: Email1,
            mobileNo: phoneNumber1,
            isDefault: chooseDefault1,
            id: rowId ? rowId : "",
          },
        ],
      };
      const response = await fetch(
        "https://hastin-container.com/staging/api/vendor/update",
        {
          method: "PUT",
          headers: {
            Authorization: `BslogiKey ${jwtToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Vendor Updated Successfully:", result);
        alert("Vendor Updated Successfully!");
        window.location = "vendor.html";


        //document.getElementById("formpage").reset();
      } else {
        throw new Error("Vendor creation failed!");
      }
    } else {
      const payload = {
        contactList: [
          {
            name: Name1,
            email: Email1,
            mobileNo: phoneNumber1,
            isDefault: chooseDefault1,
            id: rowId ? rowId : "",
          },
        ],
        vendorName: vendorName,
        vendorCode: vendorCode,
        vendorType: vendorType,
        taxRegNo: registrationNo,
        companyRegNo: comRegistrationNo,
        // currencyContainer:currencyContainer,
        defaultCurrencyId: currencyContainer,
        address1: add1,
        address2: add2,
        country: country,
        postalCode: zip,
        cityId: city,
        createdBy: "adf8906a-cf9a-490f-a233-4df16fc86c58",
        documentList: [],
      };
      const response = await fetch(
        "https://hastin-container.com/staging/api/vendor/create",
        {
          method: "POST",
          headers: {
            Authorization: `BslogiKey ${jwtToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Data saved successfully!", result);
        alert("Vendor Created Successfully!");
        window.location = "vendor.html";
        document.getElementById("formpage").reset();
      } else {
        throw new Error("Vendor creation failed!");
      }
    }
    
  }
}

////currency api

async function fetchCurrencies() {
  const jwtToken = localStorage.getItem("jwtToken");

  const response = await fetch(
    "https://hastin-container.com/staging/api/meta/currencies",
    {
      method: "GET",
      headers: {
        Authorization: `BslogiKey ${jwtToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    console.log("yes");

    const errorText = await response.data.text();
    console.error(
      `Failed to fetch currencies: ${response.status} - ${errorText}`
    );
    throw new Error(
      `Failed to fetch currencies: ${response.status} - ${errorText}`
    );
  }

  const data = await response.json();
  populateCurrencyDropdown(data.data);

  (error) => {
    console.log(error);
  };
}

async function countryGet() {
 
  const jwtToken = localStorage.getItem("jwtToken");

  const countryApi = await fetch(
    "https://hastin-container.com/staging/api/meta/country",
    {
      method: "GET",
      headers: {
        Authorization: `BslogiKey ${jwtToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (!countryApi.ok) {
    const errorText = await countryApi.data.text();
    console.error(
      `Failed to fetch currencies: ${countryApi.status} - ${errorText}`
    );
    throw new Error(
      `Failed to fetch currencies: ${countryApi.status} - ${errorText}`
    );
  }

  const contryData = await countryApi.json();
  populateCountryDropdown(contryData.data);

  (error) => {
    console.log(error);
  };
}
countryGet()
function populateCurrencyDropdown(data) {
  const currencyContainer = document.getElementById("currencyContainer");
  for (let obj of data) {
    let id = obj.id;

    currencyContainer.innerHTML += `<option value="${obj.id}"> ${obj.name}</option>`;
  }
}
function populateCountryDropdown(data) {
  const countryContainer = document.getElementById("country");
  // countryContainer.innerHTML = "";
  console.log(data);


  for (let obj of data) {
    countryContainer.innerHTML += `<option value="${obj.id}"> ${obj.name}</option>`;
  }
    countryContainer.addEventListener("change", function () {
      countryIdGet = countryContainer.value;
      console.log(countryIdGet);

      cityGet();
    });

}

async function cityGet() {
  const jwtToken = localStorage.getItem("jwtToken");
  const cityApi = await fetch(
    "https://hastin-container.com/staging/api/countryCities/get",
    {
      method: "GET",
      headers: {
        Authorization: `BslogiKey ${jwtToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!cityApi.ok) {
    console.log("yes");

    const errorText = await cityApi.data.text();
    console.error(
      `Failed to fetch currencies: ${cityApi.status} - ${errorText}`
    );
    throw new Error(
      `Failed to fetch currencies: ${cityApi.status} - ${errorText}`
    );
  }

  const cityData = await cityApi.json();
  populateCityDropdown(cityData.data);

  (error) => {
    console.log(error);
  };
}

function populateCityDropdown(data) {
  const cityContainer = document.getElementById("city");
  cityContainer.innerHTML = "";
  const cityGet = data.filter((city) => city.countryId === countryIdGet);
  console.log(cityGet);

  for (let obj of cityGet) {
    let id = obj.id;
    cityContainer.innerHTML += `<option value="${obj.id}"> ${obj.cityName}</option>`;
  }
}

fetchCurrencies();




function updateSerialNumbers() {
  const rows = document.querySelectorAll("#table2 tr");
  rows.forEach((row, index) => {
    row.querySelector(".serialno").textContent = index + 1;
  });
}

let i = 1; 

function addRow() {
  i++; 


const tableBody = document.getElementById("table2");
const newRow = document.createElement('tr');
newRow.id = 'tr' + i; 

newRow.innerHTML = `
  <td class="serialno">${i}</td>
  <td>
    <div class="form-floating">
      <input type="text" class="underInput form-control border-1 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" id="Name${i}" placeholder="Name" name="Name">
      <label for="name">Name</label>
      <div id="Nameerror${i}"></div>
    </div>
  </td>
  <td>
    <div class="form-floating">
      <input type="text" class="underInput form-control border-1 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" id="Email${i}" placeholder="Email" name="Email">
      <label for="Email">Email</label>
      <div id="Emailerror${i}"></div>
    </div>
  </td>
  <td>
    <div class="form-floating">
      <input type="text" class="underInput form-control border-1 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" id="phoneNumber${i}" placeholder="Phone No" name="PhoneNo">
      <label for="PhoneNo">Phone No</label>
      <div id="numberError${i}"></div>
    </div>
  </td>
  <td>
    <select class="form-select border-1 rounded-0 border-start-0 border-end-0 border-top-0 border-bottom-0" id="chooseDefault${i}" placeholder="default" name="default">
      <option value="" selected disabled>Is Default</option>
      <option value="true">Yes</option>
      <option value="false">No</option>
    </select>
    <div id="defaultError${i}"></div>
  </td>
  <td>
    <i id="correctButton${i}" onClick="checkButtonClick(${i})" class="bx bx-check text-success fs-3 ms-3 mt-2"></i>
    <i class="bx bxs-trash text-danger fs-3 ms-3 mt-2 delete-row" onclick="removeRow(${i})"></i>
  </td>
`;

tableBody.appendChild(newRow);
updateSerialNumbers();
}


function updateSerialNumbers() {
const rows = document.querySelectorAll("#table2 tr");
rows.forEach((row, index) => {
  row.querySelector(".serialno").textContent = index + 1;
});
}


async function checkButton(i) {
  const isValid = validateRow(i);
  const urlParams = new URLSearchParams(window.location.search);
  const vendorId = urlParams.get("id");

  const Name = document.getElementById('Name'+i).value;
  const Email = document.getElementById('Email'+i).value;
  const phoneNumber = document.getElementById('phoneNumber'+i).value;
  const chooseDefault = document.getElementById('chooseDefault'+i).value;

  const payload = {
    name: Name,
    email: Email,
    mobileNo: phoneNumber,
    isDefault: chooseDefault === "Yes",
    id: null,
    vendorId: vendorId,
    createdBy: "111c9720-4abb-4beb-9303-34d0f2df67da"
  };

  try {
    const jwtToken = localStorage.getItem("jwtToken");
    const response = await fetch(
      "https://hastin-container.com/staging/api/vendor/contact/create",
      {
        method: "POST",
        headers: {
          Authorization: `BslogiKey ${jwtToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (response.ok) {
      const result = await response.json();
      console.log("Data saved successfully!", result);
      alert("Data saved successfully!");
    } else {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error(error);
    alert(`Error: ${error.message}`);
  }
}



function validateField(value, errorElementId) {
  const errorElement = document.getElementById(errorElementId);
  if (!errorElement) {
    console.error(`Element with ID '${errorElementId}' not found.`);
    return false;
  }
  if (value.trim() === "") {
    errorElement.textContent = "Required*";
    errorElement.style.color = "red";
    errorElement.style.fontSize = "13px";
    errorElement.style.paddingLeft = "15px";
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}


function validateRow(i) {
  let isValid = true;
  const Name = document.getElementById(`Name${i}`).value;
  const Email = document.getElementById(`Email${i}`).value;
  const phoneNumber = document.getElementById(`phoneNumber${i}`).value;
  const chooseDefault = document.getElementById(`chooseDefault${i}`).value;

  isValid &= validateField(Name, `Nameerror${i}`);
  isValid &= validateField(Email, `Emailerror${i}`);
  isValid &= validateField(phoneNumber, `numberError${i}`);
  isValid &= validateField(chooseDefault, `defaultError${i}`);

  return isValid;
}

function removeRow(i) {
  const row = document.getElementById('tr' + i);
  if (row) {
    row.remove();
    updateSerialNumbers(); 
  }
}





document.getElementById("addRowButton").addEventListener("click", addRow);
document.getElementById("table2").addEventListener("click", removeRow);




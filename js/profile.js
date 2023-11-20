// Get a reference to the canvas element
var ctx = document.getElementById("myLineChart").getContext("2d");

// Define the data for your line graph
var data = {
  labels: [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ],
  datasets: [
    {
      label: "Balance",
      data: [57, 57, 58, 60, 61, 61, 63, 62, 61, 68, 65, 63, 62], // Example data values
      borderColor: "#007bff",
      borderWidth: 2,
      fill: false,
    },
  ],
};

// Configure the chart options
var options = {
  responsive: true,
  maintainAspectRatio: false,
};

// Create a new Chart instance
var myLineChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: options,
});

//CRUD
let students = [];
let userForm = document.getElementById("form");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let schoolInput = document.getElementById("school");
let cityInput = document.getElementById("city");
let tableContainer = document.getElementById("table-container");
let theButton = document.getElementById("buttonOne");

function renderStudent() {
  //reset student form
  tableContainer.innerHTML = "";

  //create Table
  let tableContent = document.createElement("table");
  let tableHead = document.createElement("thead");
  let tableBody = document.createElement("tbody");

  let headerRow = document.createElement("tr");

  headerRow.innerHTML = `
    <th class='tableTh'>Type</th>
    <th class='tableTh'>Method</th>
    <th class='tableTh'>Amount</th>
    <th class='tableTh'>Time</th>
    <th class='tableTh'>Actions</th>
    `;
  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.$firstName}</td>
      <td>${student.$email}</td>
      <td>${student.$school}</td>
      <td>${student.$city}</td>
      
      <td  class="actions">
        <button onclick="editStudent(${student.id})" class="the-edit-button">Edit</button>
        <button onclick="deleteStudent(${student.id})" class="the-delete-button">Delete</button>
      </td>
      `;
    tableBody.appendChild(row);
  });

  tableHead.appendChild(headerRow);
  tableContent.appendChild(tableHead);
  tableContent.appendChild(tableBody);
  tableContainer.appendChild(tableContent);
}

function createStudent(event) {
  event.preventDefault();
  const $firstName = nameInput.value;
  const $email = emailInput.value;
  const $school = schoolInput.value;
  const $city = cityInput.value;

  let studentsObj = {
    id: students.length + 1,
    $firstName,
    $email,
    $school,
    $city,
  };

  students.push(studentsObj);
  //refresh
  renderStudent();

  nameInput.value = "";
  emailInput.value = "";
  schoolInput.value = "";
  cityInput.value = "";
}

function editStudent(studentId) {
  const theStudent = students.find((theStudent) => theStudent.id === studentId);
  if (theStudent) {
    const newName = prompt("edit the Type", theStudent.$firstName);
    const newEmail = prompt("edit the Method", theStudent.$email);
    const newSchool = prompt("edit the Amount", theStudent.$school);
    const newCity = prompt("edit the Time", theStudent.$city);

    theStudent.$firstName = newName;
    theStudent.$email = newEmail;
    theStudent.$school = newSchool;
    theStudent.$city = newCity;

    renderStudent();
  }
}

function deleteStudent(studentId) {
  let studentIndex = students.findIndex((student) => student.id === student.id);

  if (studentIndex !== -1) {
    if (confirm("are you sure want to delete this transaction?")) {
      students.splice(studentIndex, 1);
    } else {
      console.log("this transaction doesnt egsist");
    }
    renderStudent();
  }
}

userForm.addEventListener("submit", createStudent);

renderStudent();

function getUsersFromStorage() {
  let users;
  if (localStorage.getItem("users") === null) {
    users = [];
  } else {
    users = JSON.parse(localStorage.getItem("users"));
  }

  return users;
}

// get profile picture
let changeBtn = document.getElementById("upload_image");
let avatar_info = document.querySelector(".avatar_info");
let profile_p = document.getElementById("profile_p");
let profileNav = document.getElementById("profileNav");
let userId = JSON.parse(localStorage.getItem("currentUserID"));
let changedImgUser = JSON.parse(localStorage.getItem("users")) || [];

changedImgUser.forEach((user) => {
  if (user.id === userId && user.pfp != "") {
    avatar_info.src =
      "/assets/profiles/" +
        changedImgUser.find((user) => user.id === userId)?.pfp || "";
  }
});
changedImgUser.forEach((user) => {
  if (user.id === userId && user.pfp != "") {
    profile_p.src =
      "/assets/profiles/" +
        changedImgUser.find((user) => user.id === userId)?.pfp || "";
  }
});
changedImgUser.forEach((user) => {
  if (user.id === userId && user.pfp != "") {
    profileNav.src =
      "/assets/profiles/" +
        changedImgUser.find((user) => user.id === userId)?.pfp || "";
  }
});

// change pfp
function changePfp() {
  // let image = getImageFromStorage();
  if (changeBtn.files.length > 0) {
    let userId = JSON.parse(localStorage.getItem("currentUserID"));

    changedImgUser.forEach((user) => {
      if (user.id === userId) {
        user.pfp = changeBtn.files[0].name;
      }
    });

    localStorage.setItem("users", JSON.stringify(changedImgUser));

    // Set the src based on the updated data
    avatar_info.src =
      "../../assets/profiles/" +
        changedImgUser.find((user) => user.id === userId)?.pfp || "";
    profile_p.src =
      "../../assets/profiles/" +
        changedImgUser.find((user) => user.id === userId)?.pfp || "";
    profileNav.src =
      "../../assets/profiles/" +
        changedImgUser.find((user) => user.id === userId)?.pfp || "";
  }
}
changeBtn.addEventListener("change", changePfp);

// change name
let saveNameBtn = document.getElementById("saveName");
let newNameInput = document.getElementById("newName");
function changeName() {
  let userId = localStorage.getItem("currentUserID");
  userId = JSON.parse(userId);
  let userNewName = localStorage.getItem("users");
  userNewName = JSON.parse(userNewName);
  console.log(userNewName);
  userNewName.forEach((user) => {
    if (user.id === userId) {
      user.username = newNameInput.value;
      newNameInput.value = "";
      location.reload();
      localStorage.setItem("users", JSON.stringify(userNewName));
      alert("Refresh the page to see the changed name!");
    }
  });
}
saveNameBtn.addEventListener("click", changeName);

// change email
let saveEmailBtn = document.getElementById("saveEmail");
let newEmailInput = document.getElementById("newEmail");
function changeEmail() {
  let userId = localStorage.getItem("currentUserID");
  userId = JSON.parse(userId);
  let userNewEmail = localStorage.getItem("users");
  userNewEmail = JSON.parse(userNewEmail);
  console.log(userNewEmail);
  userNewEmail.forEach((user) => {
    if (user.id === userId) {
      user.email = newEmailInput.value;
      newEmailInput.value = "";
      location.reload();
      localStorage.setItem("users", JSON.stringify(userNewEmail));
      alert("Refresh the page to see the changed email!");
    }
  });
}
saveEmailBtn.addEventListener("click", changeEmail);
// change psw
let savePswBtn = document.getElementById("savePsw");
let newPswInput = document.getElementById("newPsw");
let newPswInputSec = document.getElementById("newPswSec");
function changePsw() {
  let userId = localStorage.getItem("currentUserID");
  userId = JSON.parse(userId);
  let userNewEmail = localStorage.getItem("users");
  userNewEmail = JSON.parse(userNewEmail);
  console.log(userNewEmail);
  userNewEmail.forEach((user) => {
    if (user.id === userId && user.password === newPswInput.value) {
      user.password = newPswInputSec.value;
      localStorage.setItem("users", JSON.stringify(userNewEmail));
      newPswInput.value = "";
      newPswInputSec.value = "";
      location.reload();
    } else {
      console.log("joo");
    }
  });
}
savePswBtn.addEventListener("click", changePsw);

document.addEventListener("DOMContentLoaded", function () {
  let users = getUsersFromStorage();

  const userData = localStorage.getItem("users");
  let userId = localStorage.getItem("currentUserID");
  userId = JSON.parse(userId);
  if (userData) {
    let users = JSON.parse(userData);

    users.forEach((element) => {
      if (element.id == userId) {
        console.log(element.pfp);
        const avatar_info = document.querySelector(".avatar_info");
        avatar_info.src = "../../assets/profiles/" + element.pfp;
        const profileNav = document.querySelector("#profileNav");
        profileNav.src = "../../assets/profiles/" + element.pfp;
        const profile_p = document.querySelector("#profile_p");
        profile_p.src = "../../assets/profiles/" + element.pfp;
        const fullnameTitle = document.getElementById("fullnameTitle");
        fullnameTitle.textContent = element.username;
        const userGreeting = document.getElementById("changeName");
        userGreeting.textContent = element.username;
        const accountStatusText = document.getElementById("accountStatus");
        accountStatusText.innerHTML = element.accountStatus;
        const profileNameChange = document.getElementById("profileNameChange");
        profileNameChange.style.display = "none";
        const profileNameValue = document.getElementById("profileNameValue");
        profileNameValue.value = element.username;
        const profileEmailValue = document.getElementById("profileEmailValue");
        profileEmailValue.value = element.email;
        const helloemail = document.getElementById("helloemail");
        helloemail.innerHTML = element.email;
        const changeEmail = document.getElementById("changeEmail");
        changeEmail.innerHTML = element.email;

        const profileName = document.getElementById("profileName");
        const navbarName = document.getElementById("navbarName");
        profileName.style.display = "flex";
        // profileName.style.alignItems = "center";
        navbarName.innerHTML =
          " <i class='fa-solid fa-user'></i>" + element.username;
        const dropdown_name = document.getElementById("dropdown_name");
        dropdown_name.innerText = element.username;
        const dropdown_email = document.getElementById("dropdown_email");
        dropdown_email.innerText = element.email;
      }
    });
  }
});

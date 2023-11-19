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
    <th class='tableTh'>Name</th>
    <th class='tableTh'>Surname</th>
    <th class='tableTh'>Number</th>
    <th class='tableTh'>Email</th>
    <th class='tableTh'>Actions</th>
    `;
  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.$firstName}</td>
      <td>${student.$email}</td>
      <td>${student.$school}</td>
      <td>${student.$city}</td>
      
      <td>
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
    const newName = prompt("edit Contact's Name", theStudent.$firstName);
    const newEmail = prompt("edit Contact's Surname", theStudent.$email);
    const newSchool = prompt("edit Contact's Number", theStudent.$school);
    const newCity = prompt("edit Contact's Email", theStudent.$city);

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

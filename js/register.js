let users = [];
let form = document.querySelector("form");
let usernameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("pssw");
let submitButton = document.getElementById("submitBtn");

function signUp(e) {
  console.log(e);
  e.preventDefault();

  let users = getUsersFromStorage();
  let $usernameValue = usernameInput.value;
  let $emailValue = emailInput.value;
  let $passwordValue = passwordInput.value;

  let user = {
    id: users.length + 1,
    username: $usernameValue,
    email: $emailValue,
    password: $passwordValue,
    accountStatus: "Free",
    pfp: "user_image.png",
  };
  users.push(user);
  localStorage.setItem("currentUserID", JSON.stringify(user.id));
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("accountStatus", "Free");
  window.location.href = "../../assets/pages/login.html";
  console.log(users);
  // users.forEach((item) => {
  //   if (item.username === user.username) {
  //     let sameName = document.getElementById("sameName");
  //     sameName.innerHTML = "There is a user with that name";
  //   } else if (item.email === user.email) {
  //     let sameEmail = document.getElementById("sameEmail");
  //     sameEmail.innerHTML = "There is a user with that email";
  //   } else {
  //     checkUser(user);
  //   }
  // });
}

function getUsersFromStorage() {
  let users;
  if (localStorage.getItem("users") === null) {
    users = [];
  } else {
    users = JSON.parse(localStorage.getItem("users"));
  }

  return users;
}

function setSuccessFor(input) {
  let formControl = input.parentElement;
  formControl.classList = "form-control-div success";
}
function setErrorFor(input, message) {
  let formControl = input.parentElement;
  formControl.classList = "form-control-div error";
  const smalltext = formControl.querySelector("small");
  smalltext.innerText = message;
}
form.addEventListener("submit", signUp);

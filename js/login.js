let users = [];
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("pssw");
let submitButton = document.getElementById("submitBtn");

function login(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("pssw").value;

  let user = localStorage.getItem("users");
  // console.log(user);
  let data = JSON.parse(user);
  // console.log(data);
  data.forEach((user) => {
    if (user.username === email && user.password === pwd) {
      localStorage.setItem("currentUserID", JSON.stringify(user.id));
      localStorage.setItem("isLoggedIn", JSON.stringify(user.username));
      window.location.href = "/assets/pages/profile.html";
    } else if (user.username != email) {
      let wrongEmail = document.getElementById("wrongEmail");
      wrongEmail.style.display = "block";
    } else if (user.password != pwd) {
      let wrongMatch = document.getElementById("wrongMatch");
      wrongMatch.style.display = "block";
    } else {
      let wrongMatch = document.getElementById("wrongMatch");
      wrongMatch.style.display = "block";
      wrongMatch.innerHTML = "Conditionals dons't match";
    }
  });
}

submitButton.addEventListener("click", login);

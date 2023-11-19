function getUsersFromStorage() {
  let users;
  if (localStorage.getItem("users") === null) {
    users = [];
  } else {
    users = JSON.parse(localStorage.getItem("users"));
  }

  return users;
}
document.addEventListener("DOMContentLoaded", function () {
  let users = getUsersFromStorage();

  const userData = localStorage.getItem("users");
  let userId = localStorage.getItem("currentUserID");
  userId = JSON.parse(userId);
  if (userData) {
    let users = JSON.parse(userData);

    users.forEach((element) => {
      if (element.id == userId) {
        // const userGreeting = document.getElementById("user-greeting");
        // userGreeting.textContent = "Welcome, " + element.username;
        const profileNameChange = document.getElementById("profileNameChange");
        profileNameChange.style.display = "none";
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

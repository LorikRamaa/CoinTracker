let signoutBtn = document.getElementById("signoutBtn");

function signOut() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUserID");
  localStorage.removeItem("accountStatus");

  window.location.href = "../../index.html";
}
signoutBtn.addEventListener("click", signOut);

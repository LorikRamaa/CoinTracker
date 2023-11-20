let profileNav = document.getElementById("profileNav");
let userId = JSON.parse(localStorage.getItem("currentUserID"));
let changedImgUser = JSON.parse(localStorage.getItem("users")) || [];

changedImgUser.forEach((user) => {
  if (user.id === userId && user.pfp != "") {
    profileNav.src =
      "../../assets/profiles/" +
        changedImgUser.find((user) => user.id === userId)?.pfp || "";
  }
});

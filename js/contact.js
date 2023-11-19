let username = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let sendMsg = document.getElementById("sendMsg");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const nameValue = username.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  // username validation

  if (nameValue === "") {
    setErrorFor(username, "This canot be empty");
  } else if (nameValue.length < 2) {
    setErrorFor(username, "Username need to be longer than 2 characters");
  } else if (nameValue.length > 30) {
    setErrorFor(username, "Username longer than 30 characters");
  } else {
    setSuccessFor(username);
  }

  // email validation
  if (emailValue === "") {
    setErrorFor(email, "This canot be empty");
  } else {
    setSuccessFor(email);
  }
  // subject validation
  if (subjectValue === "") {
    setErrorFor(subject, "This canot be empty");
  } else if (subjectValue.length < 2) {
    setErrorFor(subject, "Username need to be longer than 2 characters");
  } else if (subjectValue.length > 30) {
    setErrorFor(subject, "Username longer than 30 characters");
  } else {
    setSuccessFor(subject);
  }
  // message validation
  if (messageValue === "") {
    setErrorFor(message, "This canot be empty");
  } else if (messageValue.length < 2) {
    setErrorFor(message, "Username need to be longer than 2 characters");
  } else if (messageValue.length > 30) {
    setErrorFor(message, "Username longer than 30 characters");
  } else {
    setSuccessFor(message);
  }
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
// send mail

function sendMail() {
  let params = {
    from_name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  const serviceId = "service_i7jtus5";
  const templateId = "template_jtr0l9c";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      alert("The message is sent succesfuly");
      console.log(res);
    })
    .catch((err) => alert(err));
}

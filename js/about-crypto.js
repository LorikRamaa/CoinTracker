let container = document.getElementById("first_pricing_box");
// console.log(container);

async function pricing() {
  await fetch("/js/pricing.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      container.innerHTML = `
      <div class="first-pricing-box">
      <h1 class="pricing-text">${data[0].title}</h1>
      <h1 class="h1-price"><sup>$</sup>${data[0].price}</h1>
      <h3 class="h3-price">Features</h3>
      <ul>
        <li>${data[0].features.first}</li>
        <li>${data[0].features.second}</li>
        <li>${data[0].features.third}</li>
        <li>${data[0].features.forth}</li>
      </ul>
      <div class="pricing-button-div">
        <button class="buy-now">
            <a href="/assets/pages/checkout.html?id=BASIC">Buy</a>
        </button>
      </div>
    </div>
    <div class="second-pricing-box">
      <h1 class="pricing-text">${data[1].title}</h1>
      <h1 class="h1-price"><sup>$</sup>${data[1].price}</h1>
      <h3 class="h3-price">Features</h3>
      <ul>
      <li>${data[1].features.first}</li>
      <li>${data[1].features.second}</li>
      <li>${data[1].features.third}</li>
      <li>${data[1].features.forth}</li>
      </ul>
      <div class="pricing-button-div">
        <button class="buy-now">
            <a href="/assets/pages/checkout.html?id=PREMIUM">Buy</a>
        </button>
      </div>
    </div>
    <div class="third-pricing-box">
      <h1 class="pricing-text">${data[2].title}</h1>
      <h1 class="h1-price"><sup>$</sup>${data[2].price}</h1>
      <h3 class="h3-price">Features</h3>
      <ul>
      <li>${data[2].features.first}</li>
      <li>${data[2].features.second}</li>
      <li>${data[2].features.third}</li>
      <li>${data[2].features.forth}</li>
      </ul>
      <div class="pricing-button-div">
        <button class="buy-now">
            <a href="/assets/pages/checkout.html?id=STANDARD">Buy</a>
        </button>
      </div>
    </div>
      `;
    });
}

pricing();

async function fetchPricing() {
  const productId = new URLSearchParams(window.location.search).get("id");
  const response = await fetch(`/js/pricing.json?id=${productId}`);

  const data = await response.json();
  console.log(data, "id data");
  console.log(
    data.find((obj) => obj.title.toUpperCase() === productId.toUpperCase()),
    productId
  );
  let findedDataObj = data.find(
    (obj) => obj.title.toUpperCase() === productId.toUpperCase()
  );
  console.log(findedDataObj, "displaydata log");
  let aboutContainer = document.getElementById("orderDiv");
  aboutContainer.innerHTML = `
        <div class="order-div-text">
            <p>Item(1):</p>
            <p>&dollar; ${findedDataObj.price}</p>
        </div>
        <div class="order-div-text">
            <p>Item title:</p>
            <p>${findedDataObj.title}</p>
        </div>
        <div class="order-div-text">
            <p>Tax collected:</p>
            <p>&dollar; 23.80</p>
        </div>
        <hr />
        <div class="order-div-text">
            <p>Order total:</p>
            <p>&dollar; ${findedDataObj.price + 23.82}</p>
        </div>
        <div class="buy-order">
            <button id="buyOrder">Buy</button>  
        </div>
  `;
  let button = document.getElementById("buyOrder");
  button.addEventListener("click", function () {
    let emailValue = document.getElementById("email").value;
    let userId = localStorage.getItem("currentUserID");
    userId = JSON.parse(userId);
    let accountStatusUsers = localStorage.getItem("users");
    accountStatusUsers = JSON.parse(accountStatusUsers);
    accountStatusUsers.forEach((user) => {
      if (user.id === userId) {
        user.accountStatus = findedDataObj.title;
        localStorage.setItem("users", JSON.stringify(accountStatusUsers));
      }
    });
    let completePayment = document.getElementById("completePayment");
    completePayment.innerHTML = `
    <div class="afterPayment">
        <i class="fa-regular fa-circle-check"></i>
        <h1>Payment Confirmed!</h1>
        <p>Thank you for buying <strong>${findedDataObj.title} </strong> plan for your account!,
        You will recive an email from us to <strong> ${emailValue}</strong></p>
    </div>
    `;
  });
}
fetchPricing();

// function checkForm() {
//   let username = document.getElementById("name").value;
//   let surename = document.getElementById("surename").value;
//   let email = document.getElementById("email").value;
//   let number = document.getElementById("number").value;
//   let date = document.getElementById("date").value;
//   let year = document.getElementById("year").value;
//   let cvv = document.getElementById("cvv").value;

//   if (
//     username.trim() == "" &&
//     surename.trim() == "" &&
//     email.trim() == "" &&
//     number.trim() == "" &&
//     date.trim() == "" &&
//     year.trim() == "" &&
//     cvv.trim() == ""
//   ) {
//     let completeFormSmall = document.getElementById("completeForm");
//     completeFormSmall.style.display = "block";
//   } else {
//   }
// }

// checkForm();

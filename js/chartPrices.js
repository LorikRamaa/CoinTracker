async function fetchData() {
  const productId = new URLSearchParams(window.location.search).get("id");
  const response = await fetch(
    `https://rest.coinapi.io/v1/assets/?apikey=17680648-27E6-4C9C-8C7F-B917D0D43F86&filter_asset_id=${productId}`
  );
  const cruptoData = await response.json();
  displayProduct(cruptoData);
}

function updatePrice() {
  let count = document.getElementById("buy").value;
  let price = document.getElementById("coin_price").innerText;
  let priceHolder = document.getElementById("coinToEur");
  let priceHolderBuy = document.getElementById("btcToEurBuy");
  price = price.substring(0, price.length - 1);
  priceHolder.innerText = count * parseFloat(price.replace(/,/g, ""));
  priceHolderBuy.innerText = count * parseFloat(price.replace(/,/g, ""));
  priceHolder.toLocaleString();
  priceHolderBuy.toLocaleString();
}

function displayProduct(data) {
  console.log(data[0]);
  let cryptoContainer = document.getElementById("crypto-container");
  cryptoContainer.innerHTML = `
    <div class="crypto-details">
      <div class="crypto-name-div">
        <h1 class="crypto-name">
          <img
            src="../../assets/images/${data[0].asset_id.toLowerCase()}.png"
            class="crypto-logo"
            id="crypto-logo"
            alt=""
          />
          <span id="crypto-name">${data[0].name} price<sub>(${
    data[0].asset_id
  })</sub></span>
        </h1>
      </div>
    </div>
  <h3 id="coin_price" class="cryptoPrice">${
    data[0].price_usd.toLocaleString("en-US") + "€"
  }  </h3>
  <div class="chartContent">
    <div class="chart-div">
      <div class="the-chart">
        <canvas id="myLineChart"></canvas>
      </div>
    </div>
    <div class="buy-crypto">
      <h1 class="buy-title">Buy <span id="buy-crypto">${
        data[0].asset_id
      }</span></h1>
      <div class="buy-content">
        <div class="buy-control">
          <label for="buy">Buy</label>
          <input
            type="number"
            id="buy"
            name="buy"
            value="1"
            placeholder="1"
            onInput="updatePrice()"
            min="0"
            max="20"
          />
        </div>
        <div class="crypto-buy-details">
          <h2>
            <span id="inputValue">${count}</span
            ><span id="input-coin"> ${data[0].asset_id}=</span>
          </h2>
          <h2>EUR&euro; <span id="coinToEur">  ${data[0].price_usd.toFixed(3)}
   </span></h2>
        </div>
        <div class="button">
          <button id="buyButton" onclick="activeBuy()">
            Buy <span id="buy-crypto">${data[0].asset_id}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
    `;

  buySignedOut(data);
  fetchChart(data);
}

function fetchChart(cruptoData) {
  console.log(cruptoData[0]);
  // let crypto = document.querySelector("#" + cruptoData[0].asset_id + "-price");
  // crypto.innerHTML = cruptoData[0].price_usd.toLocaleString("en-US") + "€";
  var ctx = document.getElementById("myLineChart");

  // Define the data for your line graph
  var data = {
    labels: [
      "November 2022",
      "December 2022",
      "January",
      "February",
      "Mars",
      "April",
      "May",
      "July",
      "June",
      "August",
      "September",
      "Octomber",
      "November",
    ],
    datasets: [
      {
        label: "Balance",
        data: [
          cruptoData[0].price_usd - 200,
          cruptoData[0].price_usd - 250,
          cruptoData[0].price_usd - 150,
          cruptoData[0].price_usd - 160,
          cruptoData[0].price_usd - 170,
          cruptoData[0].price_usd - 140,
          cruptoData[0].price_usd - 120,
          cruptoData[0].price_usd - 140,
          cruptoData[0].price_usd - 120,
          cruptoData[0].price_usd - 150,
          cruptoData[0].price_usd - 150,
          cruptoData[0].price_usd - 40,
          cruptoData[0].price_usd,
        ], // Example data values
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
}

function activeBuy() {
  let buyCryptoSubmit = document.querySelector("#buyCryptoSubmit");
  buyCryptoSubmit.classList.add("buyActive");
}
function unActiveBuy() {
  let buyCryptoSubmit = document.querySelector("#buyCryptoSubmit");
  buyCryptoSubmit.classList.remove("buyActive");
}
let cryptoBuy = document.getElementById("cryptoBuy");

function buySignedOut(data) {
  let getUser = localStorage.getItem("currentUserID");
  if (getUser === null) {
    console.log("register");
    cryptoBuy.innerHTML = `
    <h1>You need to sign up to buy this crypto</h1>
    <br /><br /><br />
    

    <div class="doneButton">
      <button id="done" onclick="unActiveBuy()">
        <a href="/assets/pages/signup.html">
          Sign Up
        </a>
      </button>
    </div>
    `;
  } else {
    cryptoBuy.innerHTML = `
      <h1>Countinue to payment proccess</h1>
      <br /><br /><br />

      <div class="doneButton">
        <button id="done" onclick="unActiveBuy()">
          <a href="/assets/pages/payment.html">
            Payment
          </a>
        </button>
      </div>
    `;
  }
}

fetchData();
// setInterval(fetchData, 7000);

const toggle = document.querySelector("#toggleDark");
const body = document.querySelector("body");
let logo = document.querySelector("#logo");

toggle.addEventListener("click", function () {
  this.classList.toggle("fa-moon");
  body.classList.toggle("darkActive");
  console.log(logo);

  if (this.classList.toggle("fa-sun")) {
    logo.src = "/assets/images/logo_black.png";
  } else {
    logo.src = "/assets/images/logo_white.png";
  }
});

window.addEventListener("scroll", function () {
  let navbar = this.document.querySelector(".navbar");
  navbar.classList.toggle("sticky", this.window.scrollY > 0);
});

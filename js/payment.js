let price = document.getElementById("price");
let cryptoPrice = document.getElementById("cryptoPrice");
let priceImage = document.getElementById("priceImage");
let priceIconValue = document.getElementById("priceIconValue");
let devidePrice = "34000";

function returnPrice() {
  let returnedPrice = price.value / parseInt(devidePrice);
  console.log(returnedPrice.toFixed(3));
  cryptoPrice.value = returnedPrice;
  return returnedPrice;
}

price.addEventListener("input", returnPrice);

let priceCrypto = document.getElementById("priceCrypto");
console.log(priceCrypto);
let chooseCrypto = document.getElementById("chooseCrypto");
let closeBtn = document.getElementById("closeBtn");

priceCrypto.addEventListener("click", function () {
  chooseCrypto.classList.toggle("chooseActive");
  priceCrypto.classList.toggle("chooseActive");
});
closeBtn.addEventListener("click", function () {
  chooseCrypto.classList.remove("chooseActive");
  priceCrypto.classList.remove("chooseActive");
});

let ethereumBtn = document.getElementById("eth-name");
console.log(ethereumBtn);

function getEth() {
  priceImage.src = "/assets/images/eth.png";
  priceIconValue.innerText = "ETH";
  devidePrice = "1300";
}
let btcBtn = document.getElementById("btc-name");
console.log(btcBtn);

function getBtc() {
  priceImage.src = "/assets/images/btc.png";
  priceIconValue.innerText = "BTC";
  devidePrice = "34000";
}
let usdtBtn = document.getElementById("usdt-name");
console.log(usdtBtn);

function getUsdt() {
  priceImage.src = "/assets/images/usdt.png";
  priceIconValue.innerText = "USDT";
  devidePrice = "1";
}
let bnbBtn = document.getElementById("bnb-name");
function getBnb() {
  priceImage.src = "/assets/images/bnb.png";
  priceIconValue.innerText = "BNB";
  devidePrice = "234";
}
let dogeBtn = document.getElementById("doge-name");
function getdoge() {
  priceImage.src = "/assets/images/doge.png";
  priceIconValue.innerText = "DOGE";
  devidePrice = "0,6";
}
ethereumBtn.addEventListener("click", getEth);
btcBtn.addEventListener("click", getBtc);
usdtBtn.addEventListener("click", getUsdt);
bnbBtn.addEventListener("click", getBnb);
dogeBtn.addEventListener("click", getdoge);

let buyOrder = document.getElementById("buyOrder");
let buyCrypto = document.getElementById("buyCrypto");
console.log(priceIconValue.textContent);
buyOrder.addEventListener("click", function () {
  buyCrypto.innerHTML = `
    <h1 style="text-decoration:none;">You bought ${returnPrice()} of ${
    priceIconValue.textContent
  }</h1>
  
  
  `;
});

async function getPrices() {
  await fetch(
    "https://rest.coinapi.io/v1/assets/?apikey=17680648-27E6-4C9C-8C7F-B917D0D43F86&filter_asset_id=BTC;ETH;BNB;DOGE;LTC;SHIB;ADA;XRPC;USDT;DOT"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((coin) => {
        let coinId = coin.asset_id.toLowerCase();
        let coinPrice = document.querySelector("#" + coinId + "-price");
        coinPrice.innerHTML = coin.price_usd.toLocaleString("en-US") + "€";

        console.log(coinId);
        let coinData = document.querySelector("#" + coinId + "-data");
        coinData.innerHTML = `<img src="/assets/images/${coinId}.png" alt="" />
        <a href="/assets/pages/cryptoPage.html?id=${coinId}">${coin.name} </a>
        `;
      });
    });
}
getPrices();
// setInterval(getPrices, 7000);

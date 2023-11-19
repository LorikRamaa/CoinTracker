async function fetchData() {
  const productId = new URLSearchParams(window.location.search).get("id");
  const response = await fetch(`/js/aboutCrypto.json?id=${productId}`);

  const data = await response.json();
  console.log(data);
  console.log(
    data.find((obj) => obj.short_name === productId.toUpperCase()),
    productId
  );
  let findedDataObj = data.find(
    (obj) => obj.short_name === productId.toUpperCase()
  );
  console.log(findedDataObj, "displaydata log");
  let aboutContainer = document.getElementById("aboutContainer");
  aboutContainer.innerHTML = `
  <h1>About ${findedDataObj.name} (${findedDataObj.short_name})</h1>
  <div class="about-crypto-text">
    <p>
    ${findedDataObj.description}
    </p>
  </div>
  `;

  // displayData(data);
  // spinner.style.display = "none";
}
fetchData();
+28
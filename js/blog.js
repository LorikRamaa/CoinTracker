function getBlog() {
  fetch(
    "https://newsapi.org/v2/everything?q=keyword&apiKey=4680456805894e2e973a0b662191eebd"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.articles[0].title);

      let blogPosts = document.getElementById("blogPost");
      blogPosts.innerHTML = `
        <div class="short-first-row">
        <div class="short-expl1" id="blogPost">
          <img src="${data.articles[0].urlToImage}" class="expl-img" />
          <h3>${data.articles[0].title}</h3>
          <p style="font-size: 15px; margin: 15px" id="first-p">
            ${data.articles[0].description}
          </p>

          <button class="expl-button">
            <a class="expl-link" href="${data.articles[0].url}">Read more</a>
          </button>
        </div>

        <div class="short-expl1" id="blogPost">
          <img src="${data.articles[6].urlToImage}" class="expl-img" />
          <h3>${data.articles[6].title}</h3>
          <p style="font-size: 15px; margin: 15px" id="first-p">
            ${data.articles[6].description}
          </p>

          <button class="expl-button">
            <a class="expl-link" href="${data.articles[6].url}">Read more</a>
          </button>
        </div>
        <div class="short-expl1" id="blogPost">
          <img src="${data.articles[7].urlToImage}" class="expl-img" />
          <h3>${data.articles[7].title}</h3>
          <p style="font-size: 15px; margin: 15px" id="first-p">
            ${data.articles[7].description}
          </p>

          <button class="expl-button">
            <a class="expl-link" href="${data.articles[7].url}">Read more</a>
          </button>
        </div>
      </div>

        `;

      let blogPostsTwo = document.getElementById("blogPostsTwo");
      blogPostsTwo.innerHTML = `
    <div class="short-first-row">
    <div class="short-expl1" id="blogPost">
      <img src="${data.articles[2].urlToImage}" class="expl-img" />
      <h3>${data.articles[2].title}</h3>
      <p style="font-size: 15px; margin: 15px" id="first-p">
        ${data.articles[2].description}
      </p>

      <button class="expl-button">
        <a class="expl-link" href="${data.articles[2].url}">Read more</a>
      </button>
    </div>

    <div class="short-expl1" id="blogPost">
    <img src="${data.articles[3].urlToImage}" class="expl-img" />
    <h3>${data.articles[3].title}</h3>
    <p style="font-size: 15px; margin: 15px" id="first-p">
      ${data.articles[3].description}
    </p>

    <button class="expl-button">
      <a class="expl-link" href="${data.articles[3].url}">Read more</a>
    </button>
  </div>
  <div class="short-expl1" id="blogPost">
  <img src="${data.articles[8].urlToImage}" class="expl-img" />
  <h3>${data.articles[8].title}</h3>
  <p style="font-size: 15px; margin: 15px" id="first-p">
    ${data.articles[8].description}
  </p>

  <button class="expl-button">
    <a class="expl-link" href="${data.articles[8].url}">Read more</a>
  </button>
</div>
  </div>

    `;

      let blogPostsThree = document.getElementById("blogPostsThree");
      blogPostsThree.innerHTML = `
    <div class="short-first-row">
    <div class="short-expl1" id="blogPost">
      <img src="${data.articles[4].urlToImage}" class="expl-img" />
      <h3>${data.articles[4].title}</h3>
      <p style="font-size: 15px; margin: 15px" id="first-p">
        ${data.articles[4].description}
      </p>

      <button class="expl-button">
        <a class="expl-link" href="${data.articles[4].url}">Read more</a>
      </button>
    </div>

    <div class="short-expl1" id="blogPost">
    <img src="${data.articles[5].urlToImage}" class="expl-img" />
    <h3>${data.articles[5].title}</h3>
    <p style="font-size: 15px; margin: 15px" id="first-p">
      ${data.articles[5].description}
    </p>

    <button class="expl-button">
      <a class="expl-link" href="${data.articles[5].url}">Read more</a>
    </button>
  </div>
  <div class="short-expl1" id="blogPost">
  <img src="${data.articles[24].urlToImage}" class="expl-img" />
  <h3>${data.articles[24].title}</h3>
  <p style="font-size: 15px; margin: 15px" id="first-p">
    ${data.articles[24].description}
  </p>

  <button class="expl-button">
    <a class="expl-link" href="${data.articles[9].url}">Read more</a>
  </button>
</div>
  </div>

    `;
      let exploreCryptos = document.getElementById("explore-cryptos-5");
      exploreCryptos.innerHTML = `
      <div class="exp-cr-1">
      <img src="${data.articles[20].urlToImage}" class="exp-img" alt="" />
    </div>

    <div class="exp-cr-2">
      <img src="${data.articles[11].urlToImage}" class="exp-img" alt="" />
    </div>

    <div class="exp-cr-3">
      <img src="${data.articles[22].urlToImage}" class="exp-img" alt="" />
    </div>

    <div class="exp-cr-4">
      <img src="${data.articles[21].urlToImage}" class="exp-img" alt="" />
    </div>

    <div class="exp-cr-5">
      <img src="${data.articles[15].urlToImage}" class="exp-img" alt="" />
    </div>
      `;
    })
    .catch((error) => console.log(error));
}
getBlog();

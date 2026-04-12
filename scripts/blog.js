import { blogListArray } from "./data.js";
let popular__list = document.querySelector("div.popular__list")
blogListArray.forEach(article => {
    popular__list.innerHTML += `
  <a href="/blog/article.html?${article.link}" class="popular__card">
                    <img src="${article.photo}"
                        alt="${article.title}">
                    <span class="popular__card-title">
                        ${article.title}
                    </span>
                    <span class=" popular__card-date">
                        ${article.date}
                    </span>
                </a>
`
})
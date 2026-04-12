import { blogListArray } from "./data.js";
console.log(blogListArray)

let first_article = blogListArray[0]
let second_article = blogListArray[1]
let third_article = blogListArray[2]
let fourth_article = blogListArray[3]


let new_post = document.querySelector("section.new-post")
new_post.innerHTML = `
    <div class="new-post__image">
                <img src="${first_article.photo}"
                    alt="${first_article.title}">
            </div>
            <div class="new-post__content">
                <h1><strong>
                        ${first_article.title}
                    </strong></h1>
                <p>${first_article.text.substring(0, 100) + "..."}</p>

                <div class="new-post__content-info">
                    <span>
                        Автор: ${first_article.Author}
                    </span>
                    <span>
                       ${first_article.date}
                    </span>
                    <a href="/blog/article.html?${first_article.link}">Переглянути</a>
                </div>
            </div>
`
let popular = document.querySelector("section.popular")
popular.innerHTML = `      <h2>
                Популярні статті
            </h2>
            <div class="popular__list">


                </a> <a href="/blog/article.html?${second_article.link}" class="popular__card">
                    <img src="${second_article.photo}" alt="${second_article.title}">
                    <span class="popular__card-title">
                       ${second_article.title}
                    </span>

                    </span>
                    <span class="popular__card-date">
                        ${second_article.date}
                    </span>

                </a>
                <a href="/blog/article.html?${third_article.link}" class="popular__card">
                    <img src="${third_article.photo}" alt="${third_article.title}">
                    <span class="popular__card-title">
                        ${third_article.title}
                    </span>

                    </span>
                    <span class="popular__card-date">
                      ${third_article.date}
                    </span>

                </a>
                <a href="/blog/article.html?${fourth_article.link}" class="popular__card">
                    <img src="${fourth_article.photo}" alt="${fourth_article.title}">
                    <span class="popular__card-title">
                        ${fourth_article.title}

                    </span>
                    <span class="popular__card-date">
                       ${fourth_article.date}
                    </span>

                </a>

            </div>
            <a href="/blog.html" class="popular-all">Усі статті &#8669;</a>
            `
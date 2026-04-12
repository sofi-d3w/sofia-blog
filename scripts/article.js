import { blogListArray } from "./data.js";
let article_section = document.querySelector("section.article")
let author_section = document.querySelector("section.author")
let slug = location.search
let article = blogListArray.find(article => slug.includes(article.link))
let nav_title = document.querySelector("span.nav-title")
nav_title.textContent = article.title

article_section.innerHTML = `<article>
                <p><img src="${article.photo}" alt="${article.title}" width="1200"
                        height="775" /></p>
                <h1>${article.title}</h1>
                <p>${article.text}</p>
                
            </article>`
author_section.innerHTML = `   <span>
                Автор: ${article.Author}
            </span>
            <span>
                ${article.date}
            </span>`
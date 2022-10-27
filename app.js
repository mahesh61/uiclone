const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");
console.log(arrows)
console.log(movieList)

arrows.forEach((arrow, i) => {
    const itemLength = movieList[i].querySelectorAll("img").length;
    let counter = 0;
    arrow.addEventListener("click", () => {
        counter++;
        if (itemLength - (4 + counter) > 0) {
            movieList[i].style.transform = `translate(${movieList[i].computedStyleMap().get("transform")[0].x.value
                - 300}px)`;
        } else {
            movieList[i].style.transform = "translate(0)";
            counter = 0;
        }

    })
})

const ball = document.querySelector(".toggle-bar");
const items = document.querySelectorAll(".container,.movie-list-tittl,.nav-bar,.navbar-container,.bar,.sidebar-icons,.toggle");
ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");

})
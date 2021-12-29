let mainMenuToggle = document.querySelector(".main-menu__toggle");
let mainMenu = document.querySelector(".main-menu");

mainMenuToggle.addEventListener('click', function () {
    mainMenuToggle.classList.toggle("active");
    mainMenu.classList.toggle("active");
});


/* scroll */

window.onload = () => {

    const up = document.querySelector(".up-button");

    let scrolled,
        timer;

    window.onscroll = () => {
        if (window.pageYOffset > 729) {
            up.classList.add("active");
        } else (up.classList.remove("active"));
    };

    onscroll();


    up.addEventListener("click", () => {
        scrolled = window.pageYOffset;
        scrollToTop();
    });

    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 300;
            timer = setTimeout(scrollToTop, 100);
        } else {
            clearTimeout(timer); {
                window.scrollTo(0, 0)
            }
        }
    }
};



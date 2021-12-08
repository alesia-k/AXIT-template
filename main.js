let mainMenuToggle = document.querySelector(".main-menu__toggle");
let mainMenu = document.querySelector(".main-menu");

mainMenuToggle.addEventListener('click', function() {
    mainMenuToggle.classList.toggle("active");
    mainMenu.classList.toggle("active");
});


// Nav Bar
let menuBtn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");
let menuBtnInnerArrow = menuBtn.firstElementChild;

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("showMenu");
    menuBtnInnerArrow.classList.toggle("opened");
    console.log(menuBtnInnerArrow)
})
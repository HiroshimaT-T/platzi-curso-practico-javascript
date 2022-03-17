const listaMenu = document.querySelector(".header-nav__link-list-close")
const buttomMenu = document.querySelector(".header-nav__buttom-menu")
const elementButtomMenu = document.querySelectorAll(".header-nav__buttom-menu__item")

let toggle = false
function despliegueMenuList() {
    listaMenu.classList.toggle("header-nav__link-list-open")
    elementButtomMenu.forEach((element) => {
        element.classList.toggle("header-nav__buttom-menu__item-filter")
    } )
    buttomMenu.classList.toggle("header-nav__buttom-menu-filter")
    // if(toggle){

    // }else{
    //     toggle = true
    //     elementButtomMenu.forEach((element) => {
    //         element.style.transitionDelay = "1s, 1s , 0s ,  0.5s ,  1.5s";
    //     } )
    //     setTimeout(function () {
    //         elementButtomMenu.forEach((element) => {
    //             element.style.transitionDelay = "0s";
    //         } )
    //     }, 2000)
    // }
}

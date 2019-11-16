let burger = document.querySelector(".Burger__Menu")
let under = document.querySelector(".underMenu")

burger.onclick = menu_toggle

function menu_toggle(){
    console.log("coucou")
    under.classList.toggle("hidden")
}
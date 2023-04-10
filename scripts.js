
// funcion para que la nav bar aparezca cuando sea mayor que cero y quede permanente//
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})



document.getElementById("btn-menu").addEventListener("click", mostrar_menu);
background_menu = document.getElementById("back-menu");
document.getElementById("back-menu").addEventListener("click", ocultar_menu);


nav = document.getElementById("nav");

function mostrar_menu(){
    nav.style.right = "0px";
    background_menu.style.display ="block";
}

function ocultar_menu(){
    nav.style.right = "-250px"
    background_menu.style.display ="none";

}
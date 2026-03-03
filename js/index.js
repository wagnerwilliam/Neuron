
let menu = document.getElementById("hamburger_menu")
let menuNav = document.getElementById("menuNav")
let priceBtn = document.getElementById("price")
/**
 * Función que activa o desactiva el menú hamburguesa.
 */
function hamburgerMenu() {
    menuNav.classList.toggle("active")
}

/**
 * Evento que permite cerrar o desactivar el menú móvil
 * cuando se hace clic en el botón "Prices".
 * 
 * Alterna la clase "active" para mostrar u ocultar el menú.
 */
priceBtn.addEventListener("click", () => {
    menuNav.classList.toggle("active")
})

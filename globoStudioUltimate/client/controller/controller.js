let vista = null;
const mainContenido = document.getElementById("mainContenido");
const mainAdmin = document.getElementById("mainAdmin");

window.onload = () => {
    vista = new Vista();
    mostrarMainContenido()
    mostrarMainAdmin()
};

/* PAGINA PRINCIPAL */
const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
    nav.classList.add("visible");
})

cerrar.addEventListener('click', () => {
    nav.classList.remove("visible");
})


function mostrarMenu() {
    vista.mostrarPlantilla("menu", "mainContenido")
}

function mostrarMainContenido() {
    vista.mostrarPlantilla("inicio", "mainContenido")
}

function mostrarAbout() {
    vista.mostrarPlantilla("about", "mainContenido")
}

function mostrarServices() {
    vista.mostrarPlantilla("our-services", "mainContenido")
}

function mostrarGallery() {
    vista.mostrarPlantilla("galery", "mainContenido")
}

function mostrarQuotePrice() {
    vista.mostrarPlantilla("QuotePrice", "mainContenido")
}

function mostrarLogin() {
    vista.mostrarPlantilla("login", "mainContenido")
}

function mostrarRecovery() {
    vista.mostrarPlantilla("recovery", "mainContenido")
}

function mostrarRegister() {
    vista.mostrarPlantilla("register", "mainContenido")
}


/* ADMIN */
function mostrarSales() {
    vista.mostrarPlantilla("MySales", "mainAdmin")
}

function mostrarNewSale() {
    vista.mostrarPlantilla("newSale", "mainAdmin")
}

function mostrarDashboard() {
    vista.mostrarPlantilla("dashboard", "mainAdmin")
}

function mostrarPoints() {
    vista.mostrarPlantilla("points", "mainAdmin")
}

function mostrarUsers() {
    vista.mostrarPlantilla("users", "mainAdmin")
}


/* CLIENT */

function mostrarProfile() {
    vista.mostrarPlantilla("profile", "contenidoTemptlate")
}

function mostrarSettings() {
    vista.mostrarPlantilla("settings", "contenidoTemptlate")
}

function mostrarMyQuotes() {
    vista.mostrarPlantilla("myquotes", "contenidoTemptlate")
}
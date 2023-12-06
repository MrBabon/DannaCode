// NAVBAR RESPONSIVE //
// Pour le bonton contact
export function updateDropdownToggleClass() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var contactNav = document.getElementById('contact-nav');
    var dropdownMenu = document.querySelector('.nav-item.dropdown .dropdown-menu');
    var contactDropdown = document.getElementById('contact-dropdown');
    // Mettre à jour le nom de la classe en fonction de la largeur d'écran
    if (screenWidth > 1195 || screenWidth <= 991) {
        contactNav.classList.remove('dropdown-toggle');
        contactNav.removeAttribute('data-bs-toggle');
        contactNav.removeAttribute('aria-expanded');
        contactDropdown.classList.remove('dropdown');
        if (dropdownMenu) {
            dropdownMenu.style.display = 'none';
        }

    } else {
        contactNav.classList.add('dropdown-toggle');
        contactNav.setAttribute('data-bs-toggle', "dropdown");
        contactNav.setAttribute('aria-expanded', "false");
        contactDropdown.classList.add('dropdown');
        if (dropdownMenu) {
            dropdownMenu.style.display = '';
        }
    }
}

// ---------------------------------------------------------- //
var navbar = document.querySelector('.navbar');
var isNavbarVisible = true; // Pour suivre l'état actuel de la navbar

export function handleScroll() {
    // Position actuelle du défilement
    var scrollY = window.scrollY;
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    // Ajouter ou supprimer la classe pour l'animation d'apparition de la navbar
    if (viewportWidth > 768) { // Supposons que 768px est la largeur à partir de laquelle vous souhaitez masquer la navbar
        if (scrollY > 100 && isNavbarVisible) {
            navbar.classList.add('navbar-out');
            isNavbarVisible = false;
        } else if (scrollY <= 100 && !isNavbarVisible) {
            navbar.classList.remove('navbar-out');
            isNavbarVisible = true;
        }
    } else {
        // Pour les téléphones, masquer la navbar en descendant de la page
        navbar.classList.remove('navbar-out');
        isNavbarVisible = true;
    }

}

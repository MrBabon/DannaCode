//  LOADER PAGE //
document.addEventListener("DOMContentLoaded", function() {
    // Display the loader
    document.getElementById("loader").style.display = "flex";

    // Add an event listener for the "load" event to hide the loader when the page has finished loading
    window.addEventListener("load", function() {
        // Hide the loader
        document.getElementById("loader").style.display = "none";
    });
});

// ***************************************************************************************************** //

// NAVBAR RESPONSIVE //
// Pour le bonton contact
function updateDropdownToggleClass() {
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
// Exécuter la fonction lors du chargement initial de la page
document.addEventListener('DOMContentLoaded', updateDropdownToggleClass);
// Exécuter la fonction à chaque redimensionnement de fenêtre
window.addEventListener('resize', updateDropdownToggleClass);

// ---------------------------------------------------------- //
var navbar = document.querySelector('.navbar');
var isNavbarVisible = true; // Pour suivre l'état actuel de la navbar

function handleScroll() {
    // Position actuelle du défilement
    var scrollY = window.scrollY;

    // Ajouter ou supprimer la classe pour l'animation d'apparition de la navbar
    if (scrollY > 100 && isNavbarVisible) {
        navbar.classList.add('navbar-out');
        isNavbarVisible = false;
    } else if (scrollY <= 100 && !isNavbarVisible) {
        navbar.classList.remove('navbar-out');

        isNavbarVisible = true;
    }
}

// Ajouter un gestionnaire d'événement de défilement
window.addEventListener('scroll', handleScroll);

// ***************************************************************************************************** //

// SCROLL TOP //

document.addEventListener('DOMContentLoaded', function () {
    var scrollButton = document.getElementById('scrollButton');
    var scrollIcon = document.getElementById('scrollIcon');

    function updateScroll() {
        if (window.scrollY <= 0) {
            scrollIcon.classList.remove('scroll-top');
            scrollIcon.classList.add('transition-top');
        } else {
            scrollIcon.classList.remove('transition-top');
            scrollIcon.classList.add('scroll-top');
        }
    }

    window.addEventListener('scroll', updateScroll);

    scrollButton.addEventListener('click', function (event) {
        event.preventDefault();
        // Ajoutez le code pour faire défiler vers le haut ici
        // Par exemple, utilisez window.scrollTo() ou une bibliothèque d'animation
    });

    // Appeler la fonction updateScroll une fois au chargement de la page
    updateScroll();

    // Assurez-vous de retirer les écouteurs d'événements lorsque la page se ferme
    window.addEventListener('beforeunload', function () {
        window.removeEventListener('scroll', updateScroll);
        scrollButton.removeEventListener('click', function () {});
    });
});

import { setupLoader } from './loader.js';
import { updateDropdownToggleClass, handleScroll } from './navbar.js';
import { setupScrollTop } from './scroll-top.js';
import { handleErrors, handleResourceErrors } from './error-handler.js';



// LOADER PAGE
document.addEventListener('DOMContentLoaded', setupLoader);

// NAVBAR
document.addEventListener('DOMContentLoaded', () => {
    updateDropdownToggleClass();
    window.addEventListener('resize', updateDropdownToggleClass);
    window.addEventListener('scroll', handleScroll);
});

// SCROLL TOP
document.addEventListener('DOMContentLoaded', setupScrollTop);

// ERROR HANDLER
// Vous souhaiterez peut-être personnaliser cela en fonction de vos besoins
// Par exemple, vous pouvez appeler handleErrors avec un code d'erreur spécifique.
// handleErrors(404);
// handleErrors(500);
// handleErrors(422);
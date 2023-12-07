// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll(".navbar a, footer a").forEach(function (link) {
//         link.addEventListener("click", function (event) {
//             event.preventDefault();
//             var hash = this.hash;
//             document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
//         });
//     });

//     document.getElementById('contact-form').addEventListener('submit', function (e) {
//         e.preventDefault();
//         document.querySelectorAll('.comments').forEach(function (comment) {
//             comment.innerHTML = '';
//         });

//         var formData = new FormData(this);

//         fetch('../../php/contact.php', {
//             method: 'POST',
//             body: formData
//         })
//         .then(response => response.json())
//         .then(result => {
//             if (result.isSuccess) {
//                 document.getElementById('contact-form').innerHTML += "<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté.</p>";
//                 document.getElementById('contact-form').reset();
//             } else {
//                 document.getElementById('firstname + .comments').innerHTML = result.firstnameError;
//                 document.getElementById('name + .comments').innerHTML = result.nameError;
//                 document.getElementById('email + .comments').innerHTML = result.emailError;
//                 document.getElementById('phone + .comments').innerHTML = result.phoneError;
//                 document.getElementById('message + .comments').innerHTML = result.messageError;
//             }
//         })
//         .catch(error => {
//             console.error("Une erreur s'est produite lors de la soumission du formulaire:", error);
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const formulaireContact = document.getElementById("contact-form");

    formulaireContact.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtenir les données du formulaire
        const formData = new FormData(formulaireContact);

        // Envoyer les données du formulaire au script PHP en utilisant AJAX
        fetch("../php/contact.php", {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Gérer la réponse du script PHP
            if (data.isSuccess) {
                document.getElementById('contact-form').innerHTML += "<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté.</p>";
                document.getElementById('contact-form').reset();
            } else {
                document.getElementById('firstname + .comments').innerHTML = result.firstnameError;
                document.getElementById('name + .comments').innerHTML = result.nameError;
                document.getElementById('email + .comments').innerHTML = result.emailError;
                document.getElementById('phone + .comments').innerHTML = result.phoneError;
                document.getElementById('message + .comments').innerHTML = result.messageError;
            }
        })
        .catch(error => {
            console.error("Error sending form data:", error);
        });
    });
});

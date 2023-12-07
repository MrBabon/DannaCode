document.addEventListener("DOMContentLoaded", function () {

  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    clearComments();
    var postdata = new FormData(this);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../php/contact.php', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        console.log(xhr.responseText); // Ajoutez cette ligne pour voir la réponse dans la console
        if (xhr.status == 200) {
          var result = JSON.parse(xhr.responseText);
          handleFormResponse(result);
        }
      }
    }; // <-- Correction : l'accolade fermante était mal placée
    xhr.send(postdata);
  });
});


function clearComments() {
  var comments = document.querySelectorAll('.comments');
  comments.forEach(function (comment) {
    comment.innerHTML = '';
  });
}

function handleFormResponse(result) {
  if (result.isSuccess) {
    // Modification du message de succès
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('modal').style.display = 'block';
  } else {
    // Affichage des messages d'erreur
    document.getElementById('firstname + .comments').innerHTML = result.firstnameError;
    document.getElementById('name + .comments').innerHTML = result.nameError;
    document.getElementById('email + .comments').innerHTML = result.emailError;
    document.getElementById('phone + .comments').innerHTML = result.phoneError;
    document.getElementById('message + .comments').innerHTML = result.messageError;
  }
}
function closeModal() {
  // Fermer la fenêtre modale
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('modal').style.display = 'none';
}
//exo 2-1

var activituInput = document.getElementById("autre_activite"); //récupérer l'input
var activityList = document.getElementById("activité_prin"); //récupérer la liste des activités

document.getElementById("sub_activity").onclick=function(){
  if (activituInput.value !== ""){ //éviter l'entrée de champs vides
    var new_activty = document.createElement("option"); //créer un nouvel élément option
    new_activty.text = activituInput.value; //ajouter la valeur de l'input dans le nouvel élément
    new_activty.value = activituInput.value;
    new_activty.selected = true; //sélectionner l'option crée
    activityList.add(new_activty); //ajouter l'option crée dans la liste
  }
};

//exo 2-2

//a noter que les fonctions fonctionnaient a la base grace a une detection de selection de champ. Ainsi le message "correct / incorrect" s'affichait seulement sur le champ selectionné

function verifInput (champ, state) {//fonction qui modifie e champs de texte en fonction du state (true = correct/false = incorrect) ==> nous permet de réduire les lignes de codes pour chaque champs
  //vérfication de présence de message d'erreur ou de message correct afin d'éviter de les dupliquer
  // > si non présent message dupliqué a chaque itération
  if(document.getElementById("correct")){//si un message correct a déjà été affiché
    document.getElementById("correct").remove(); //supprimer le message déja existant
  } else if (document.getElementById("incorrect")) {//si un message d'erreur a déjà été affiché
    document.getElementById("incorrect").remove();//supprimer le message d'erreur déja existant
  }
  if(state){ //si l'input est correct
    champ.style.borderColor = "green"; //mettre la bordure en vert
    const correct = document.createElement("p");//créer un élément p qui sera notre texte
    correct.textContent = "correct"; //ajouter le texte
    correct.style.color = "green"; // mettre la couleur en vert
    correct.style.margin= "0"; // mettre un margin de 0
    correct.id= "correct";//ajouter l'id correct'
    champ.insertAdjacentElement("afterend", correct);//insérer le texte après l'input
  } else{ //si l'input est incorrect
    champ.style.borderColor = "red"; //mettre la bordure en rouge
    const incorrect = document.createElement("p"); //créer un élément p qui sera notre texte
    incorrect.textContent = "incorrect"; // ajouter le texte
    incorrect.style.color = "red"; //   mettre la couleur en rouge
    incorrect.style.margin= "0";// mettre un margin de 0
    incorrect.id= "incorrect";//ajouter l'id incorrect
    champ.insertAdjacentElement("afterend", incorrect);//insérer le texte après l'input
  }
}

//vérification de l'age
function verifAge(){ //lorsque l'input perd le focus
  const input = document.getElementById("age"); //récupérer l'input
  if (input.value > 0 && input.value < 150){ //vérifier que l'age est compris entre 0 et 150
    verifInput(input, true);//On apelle la fonction verifinput avec le state true = correct
    return true;
  } else {
    verifInput(input, false)//on apele la fonction verifinput avec le state false = incorrect
    alert("L'age doit être compris entre 0 et 150");
    return false;
  }
}

//verification format email
function verifEmail () {
  const input = document.getElementById("email"); //récupérer l'input
  // Définir le format d'adresse email attendu
  var emailFormat = /^[a-zA-Z0-9._]+@alumni.univ-avignon.fr$/;
  // Vérifier si la valeur du champ de texte HTML correspond au format attendu
  if (input.value.match(emailFormat)) {
    verifInput(input,true);
    return true;
  } else {
    verifInput(input,false);
    alert("L'adresse email doit être de la forme : x.x@alumni.univ-avignon.fr");
    return false;
  }
}

//exo 2-3
//lors de la vérification de la validitée des champs, la fonction verif age renvoie deux alertes.

function submit(){
  if (verifAge() && verifEmail()){ //si les deux fonctions de vérification retournent true
    document.getElementById("renseignement_form").submit(); //envoyer le formulaire
    alert("formulaire envoyé"); //afficher un message de confirmation
  } else {
    alert("formulaire non envoyé, veuillez correctement remplir les champs en rouges"); //sinon afficher un message d'erreur
    verifAge();
    verifEmail();
  }
}

document.getElementById("submit_btn").addEventListener('click', function(event) {
    submit(); // Soumettre le formulaire
});

//exo 2-4

// Récupérer tous les champs de texte du formulaire
var textFields = document.querySelectorAll('input[type="text"]');
for (var i = 0; i < textFields.length; i++) {// Ajouter un gestionnaire d'événements keydown à chaque champ de texte
  textFields[i].addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {    // Vérifier si la touche appuyée est la touche Entrée
      submit(); // Soumettre le formulaire
      event.preventDefault(); // Empêcher le comportement par défaut de la touche Entrée
    }
  });
}

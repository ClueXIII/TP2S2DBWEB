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
  } else if(!state){ //si l'input est incorrect
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
document.getElementById("age").onblur=function(){ //lorsque l'input perd le focus
  //vérfication de l'age
  if (this.value > 0 && this.value < 150){ //vérifier que l'age est compris entre 0 et 150
    verifInput(this, true);//On apelle la fonction verifinput avec le state true = correct
  } else {
    verifInput(this, false)//on apele la fonction verifinput avec le state false = incorrect
  }
}

//verification format email
document.getElementById("email").onblur = function() {
  // Définir le format d'adresse email attendu
  var emailFormat = /^[a-zA-Z0-9._]+@alumni.univ-avignon.fr$/;

  // Vérifier si la valeur du champ de texte HTML correspond au format attendu
  if (this.value.match(emailFormat)) {
    verifInput(this,true);
  } else {
    verifInput(this,false);
  }
}




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


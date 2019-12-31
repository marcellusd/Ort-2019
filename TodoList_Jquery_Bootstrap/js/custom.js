jQuery("#addTaskBtn").click(function(){
	// Ajouter une tâche
	// Récupérer le text dans l'input
	// Ajouter à la liste existante une coche + le libellé récupéré
	var textToAdd;
	textToAdd = jQuery('#addTask').val();

    console.log("Mon texte : " + textToAdd);
    	
	if (textToAdd != "") {

		console.log(textToAdd);
		var htmlText = '<div class="form-check"><input class="form-check-input" type="checkbox" value=""><label class="form-check-label strikethrough">' + textToAdd + '</label></div>';		
		jQuery('#todolist').append(htmlText);
	}
	else {
		alert("Texte vide");
	}
	
}); 

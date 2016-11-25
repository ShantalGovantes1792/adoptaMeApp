var urlApi= "http://138.68.19.221:1500/api/v1/pets";

$(document).ready(function(){
	console.log("Documento listo");
	loadPet("5838628828bbcee3798c4cb0");

});

/*GET
obtener la lista de mascotas
*/

function loadPet(petId) {
	
	$.ajax({
		url : urlApi + "/" + petId,

		/*se ejecuta cuando el 
		servidor responde cuando hay un doscientos algoo... 2XX*/

		success : function (data, status, request){
			console.log("Status: ", status);
			console.log("Data: " , data);
			renderPet(data);
		},
		// se ejectua cuando 
		// hay error

		error : function(request, option, error){
			alert(error);
		},
		// se ejecuta cuando acaba la petición
		// SI HAY ERRROR O SI TODO SALE BIEN 
		complete : function (){

		}

	});

}

	// pintar la información de la mascota

function renderPet(pet) {

	// buscar los elementos
	var LabelName = $("#LabelName");
	var photoPet = $("#photoPet");
	var labelDescription = $("#labelDescription");
	var labelAge = $("#labelAge");

	// actualizar los valores
	LabelName.text(pet.name);
	photoPet.attr("src", pet.mainPicture);
	labelDescription.text(pet.description);

	var templateAge = 
		"<%= number %> <span> <%= type %> </span>";

	var compiled = _.template(templateAge);

	var paramsTemplate = {
		number : pet.age.number,

	};
		
	if (pet.age.type == "years") {
		paramsTemplate.type = "Años";
	}else{
		paramsTemplate.type = "Meses";
	}

	// opcion2
	paramsTemplate.type
		= pet.age.type == "years" ? "Años" : "Meses";
		
	var p =compiled(paramsTemplate);
	labelAge.html(p);


};


.sdfas{
	background-image : urle("../img")
}
function mostrar()
{
	 //Nivel1 de parcial, practica.

	var planeta;


	planeta=prompt (" Ingrese un planeta");


// PRIMER CASO CON SWITCH

	/*switch (planeta) {

		case 'tierra':

			alert ("acá vivimos");
			break;

		case 'mercurio':
			alert ( "acá hace más calor ");
			break;

		case 'venus':
			alert ("acá hace más frio");
			break;

		default:
			alert ( " No es un planeta valido");


	}*/

 
 // SEGUNDO CASO CON IF

 	var tierra;
	var mercurio;
	var	venus;

 	if (planeta== 'tierra') {

 		alert ("acá vivimos");

 	}

 	else if (planeta== 'mercurio') {

 		alert ( "acá hace más calor ");

 	}

 	else if (planeta== 'venus') {

 		alert ("acá hace más frio");

 	}

 	else {

 		alert ( " No es un planeta valido");
 	}


}


function mostrar()
{

	var numeroUno;
	var numeroDos;
	var division;
	var suma;

	numeroUno=prompt ("Ingrese un numero");
	numeroUno= parseInt (numeroUno);

	numeroDos=prompt ("Ingrese otro numero");
	numeroDos= parseInt (numeroDos);

	if (numeroUno==numeroDos) {

		alert( numeroUno + "" + numeroDos);
	}
	else if (numeroUno>numeroDos) {

		division=numeroUno/numeroDos;
		alert( "La division es " + division);
	}
	else {

		suma=numeroUno+numeroDos;
		alert( "La suma es " + suma);
	}
	if (suma<50) {

		alert ("la suma es" +  suma + " y es menor a 50");
	}


	


	


}
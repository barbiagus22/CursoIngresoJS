function mostrar()
{

	var numeroUno;
	var numeroDos;
	var	division;
	var suma;

	numeroUno=prompt ( "Ingrese un numero");
	numeroDos=prompt ( "Ingrese otro numero");
	


	if (numeroUno==numeroDos) {

		alert (numeroUno+numeroDos);
	}
	else if (numeroUno>numeroDos) {
		
		division=numeroUno/numeroDos;
		numeroUno=parseInt (numeroUno);
		numeroDos=parseInt (numeroDos);
		alert ("La division es: " + division);
	}
	else if (numeroUno<numeroDos) {

		numeroUno=parseInt (numeroUno);
		numeroDos=parseInt (numeroDos);
		suma=numeroUno+numeroDos;
		alert ( "La suma es :  " + suma );
	} 	
	if (suma<50) {

		alert (" la suma es menor a 50");
	}
	
}

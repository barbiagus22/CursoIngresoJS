/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
//var numeroSecreto; 
//var contadorIntentos;	

	var numeroSecreto; 
	var contadorIntentos;
	var ingresenumero;
	

	//el contador de intentos es igual a la cant de numeros random que pido. a la cant de veces
	// que preciono comenzar.

function comenzar()

	{	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	
	numeroSecreto=Math.floor((Math.random() * 100) + 1);
	//alert(numeroSecreto);
	contadorIntentos =0;

	}
function verificar()
	{
	
	ingresenumero=document.getElementById('numero').value;
	ingresenumero= parseInt(ingresenumero);
	contadorIntentos=contadorIntentos+1;

	if (ingresenumero==numeroSecreto) {

	alert( "Usted es un ganador!! y en  " + contadorIntentos +   "intentos"); 
	document.getElementById('intentos').value=contadorIntentos
	contadorIntentos=0;
	}
	else if (ingresenumero<numeroSecreto) {

	alert ("Falta para el numero secreto");
	}
	else if (ingresenumero>numeroSecreto) {

	alert ("Se paso del numero secreto");
	}

		
		
			
		
		

	
}	



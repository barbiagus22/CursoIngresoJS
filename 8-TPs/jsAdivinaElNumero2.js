/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var ingresoNumero;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100

	numeroSecreto=Math.floor(( Math. random ())*10)+1;
	alert (numeroSecreto);
	contadorIntentos=0

	

}

function verificar()
	{
		
	
	if (contadorIntentos==1 && ingresoNumero==numeroSecreto) {

		alert("Usted es un Psiquico");
		
	}
	else if (contadorIntentos==2 && ingresoNumero==numeroSecreto) {

		alert ("Excelente percepción");
		
	}
	else if (contadorIntentos==3 && ingresoNumero==numeroSecreto ) {

		alert ("Esto es suerte");
		
	}
	else if (contadorIntentos==4 && ingresoNumero==numeroSecreto) {

		alert ("Excelente técnica");
		
	}
	else if (contadorIntentos==5 && ingresoNumero==numeroSecreto ) {

		alert("Usted está en la media");
		
	}
	else if ( ( contadorIntentos>= 6 && contadorIntentos <= 10 ) && (ingresoNumero== numeroSecreto) ) {

		alert ("Falta técnica");
	}

	else if ( (contadorIntentos>=11) && (ingresoNumero==numeroSecreto) ) {

		alert ("Afortunado en el amor!!");
	}

	if (ingresoNumero==numeroSecreto) {

		contadorIntentos=0	
	}

	contadorIntentos=contadorIntentos+1;
	document.getElementById('intentos').value=contadorIntentos;
	ingresoNumero=document.getElementById('numero').value;

	}
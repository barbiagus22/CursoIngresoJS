/*

Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto,
de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10".

*/


function mostrar()
{

	var numeroUno;
	var numeroDos;
	var suma;
	var resta;

	numeroUno= prompt("Ingrese un numero");
	numeroUno= parseInt (numeroUno);

	numeroDos= prompt("Ingrese otro numero");
	numeroDos= parseInt (numeroDos);

	if (numeroUno==numeroDos) {

		alert( numeroUno + " " + numeroDos);
	}
	else if (numeroUno>numeroDos) {

		resta= numeroUno - numeroDos;
		alert ( " La resta es " + resta);

	}
	else {

		suma= numeroUno + numeroDos;
		alert ( " La suma es " + suma );
		
		if (suma>10) {

		alert ( " La suma es " + suma + " y es mayor a 10");
		}
	}
	




}	

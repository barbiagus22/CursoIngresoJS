/*
Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra 
y un número entre -100 y 100 (validar) hasta que el usuario quiera e 
informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7)

*/


function mostrar()
{
	var letra;
	var numero;
	var respuesta='si';
	var contador=0;
	var cantidadnumeroPares=0;
	var cantidadnumerosImpares=0;
	var acumuladorpares=0;
	var acumuladorimpares=0;
	var cantidaddeceros=0;
	var acumuladorceros=0;


	
	while (respuesta=='si')
	{
		
	contador=contador+1;
	letra= prompt("Ingrese letra");
	numero= prompt ("ingrese numero");
	numero= parseInt (numero);
	
		while (isNaN (numero) || numero<-100 || numero>100)
		{
			numero= prompt ("reingrese numero");
			numero= parseInt (numero);
		}

			if (numero%2==0) {

				cantidadnumeroPares=cantidadnumeroPares+1;
				acumuladorpares=acumuladorpares+numero;
			}
			else if (numero%2!=0) {

				cantidadnumerosImpares=cantidadnumerosImpares+1;
				acumuladorimpares=acumuladorimpares+numero;
			}
			if (numero==0){

				cantidaddeceros=cantidaddeceros+1;
				acumuladorceros=acumuladorceros+numero;
			}


	respuesta= prompt ("Desea continuar");
	
	}	
	
	document.write (" La cantidad de numeros pares es " + cantidadnumeroPares + "<br>");
	document.write (" La cantidad de numeros impares es " + cantidadnumerosImpares + "<br>");
	document.write (" La cantidad de ceros es " + cantidaddeceros + "<br>");

}

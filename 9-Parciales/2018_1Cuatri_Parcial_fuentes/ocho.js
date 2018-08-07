/*
Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de dos datos, 

una letra 
y un número entre -100 y 100 (validar) 

hasta que el usuario quiera e informar al terminar el ingreso por
 
 document.write: 
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

 function mostrar() {
 	
 	var letra;
 	var numero;
 	var respuesta= 'si';
 	var contador=0;
 	var contadornumeroPares=0;
 	var contadornumerosImpares=0;
 	var contadordeCeros=0;
 	var cantidaddenumeroPositivos=0;
 	var acumuladordenuerosNegativos=0;
 	var numeroMinimo;
 	var numeroMaximo; 
 	var letradelnumeroMinimo;
 	var letradelnumeroMaximo;
 	

 	while ( respuesta== 'si'  ) {

 		contador=contador+1;

 		letra= prompt ("Ingrese una letra");

 		while ( !isNaN (letra)) {

 			letra= prompt ("Error!! reingrese una letra");

 		}

 		numero= prompt ("Ingrese un numero");
 		numero= parseInt (numero);

 		while ( isNaN(numero)  || numero<-100 || numero>100 ) {

 			numero= prompt ("Error!! reingrese un numero");
 			numero= parseInt (numero);
 		}

 		if (numero%2==0) {

 			contadornumeroPares=contadornumeroPares+1;
 		}
 		else {

 			contadornumerosImpares=contadornumerosImpares+1;
 		}
 		
 		if (numero==0) {

 			contadordeCeros=contadordeCeros+1;
 		}
 		else if (numero>0) {

 			cantidaddenumeroPositivos=cantidaddenumeroPositivos+1;
 		}
 		else {

 			
 			acumuladordenuerosNegativos=acumuladordenuerosNegativos+numero;
 		}

 		if (contador==1  || numero< numeroMinimo ) {

 			numeroMinimo=numero;
 			letradelnumeroMinimo=letra;
 		}
 		if (contador==1  || numero> numeroMaximo ) {

 			numeroMaximo=numero;
 			letradelnumeroMaximo=letra;
 		}








 		respuesta= prompt( "Desea continuar");
 	}




 	document.write (" La cantidad de numero pares es " + contadornumeroPares + "<br>");
 	document.write (" La cantidad de numero impares es " + contadornumerosImpares + "<br>");
 	document.write (" La cantidad de ceros es " + contadordeCeros + "<br>");
 	document.write (" La cantidad de numeros positivos es " + cantidaddenumeroPositivos + "<br>");
 	document.write (" La suma de todos los números negativos " + acumuladordenuerosNegativos + "<br>");
 	document.write (" El numero minimo es " + numeroMinimo + " y su letra " + letradelnumeroMinimo + "<br>");
 	document.write (" El numero maximo es " + numeroMaximo + " y su letra " + letradelnumeroMaximo + "<br>");


 }

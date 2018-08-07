
/*
Bienvenidos. 
Realizar el algoritmo que permita el 
ingreso por prompt de las 

notas (validar entre 0 y 10) , el 
sexo (validar el sexo “f” o “m”) de 5 alumnos,

 informar 
 por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.


*/

function mostrar() 
{

	var nota;
	var sexo;
	var contador=0;
	var acumuladornotasTotales=0;
	var promediodenotasTotales;
	var notamasBaja;
	var sexodelanotamasBaja;
	var cantidaddeVarones=0;


	while	(contador<2) {

	contador= contador+1;

	nota= prompt ("Ingrese nota");
	nota=parseInt(nota);
	acumuladornotasTotales= acumuladornotasTotales+nota;

	while ( isNaN(nota) || nota<0 || nota>10) {

		nota= prompt ("Error! reingrese nota");
		nota=parseInt(nota);
	}

	sexo= prompt ("Ingrese sexo f o m");
	
	while (sexo!= 'f' && sexo!= 'm' ) {

		sexo= prompt ("Error! reingrese sexo f o m");
	}


	if (contador==1 || nota< notamasBaja) {

		notamasBaja=nota;
		sexodelanotamasBaja=sexo;
	}

	if (sexo== 'm' && nota>=6) {

		cantidaddeVarones= cantidaddeVarones+1;
	}

	}


	promediodenotasTotales=acumuladornotasTotales/contador;


	alert ( " El promedio de notas totales es " + promediodenotasTotales);
	alert ( " La nota mas baja es " + notamasBaja + " y es sexo " + sexodelanotamasBaja);
	alert ( " La cantidad de varones que su nota haya sido mayor o igual a 6 " + cantidaddeVarones);








}
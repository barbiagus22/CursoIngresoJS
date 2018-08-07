/*
Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita iterar el 
ingreso de varios libros con cuatro datos por cada libro, 
nombre, 
cantidad de páginas, 
cantidad de ventas (0 o más)
 y 
tema (posibles temas: “robótica", "programación", "patrones",
  "base de datos”) 
validar e ingresar datos hasta que el usuario quiera e 
informar al terminar el ingreso por document.write: 
a) La cantidad de libros con páginas pares. 
b) La cantidad de libros con páginas impares.
c) La cantidad de ceros ventas. 
d) El promedio de todas las ventas ingresadas. 
e) La suma de todas las páginas de los de "programación".
*/

function mostrar()
{
	var nombre;
	var cantidaddepaginas;
	var cantidaddeVentas;
	var tema;
	var respuesta= 'si';
	var contador=0;
	var cantidadlibropagPares=0;
	var cantidadlibropagImpares=0;
	var cantidaddeventasCero=0;
	var acumuladorVentas=0;
	var promedioVentas;
	var cantidaddepaginasProgramacion=0;
	var acumuladorProgramacion=0;

	while (respuesta== 'si')
	{
		contador=contador+1;

		nombre= prompt ("ingrese nombre del libro");

		cantidaddepaginas=prompt ("ingrese cantidad de paginas del libro");
		cantidaddepaginas=parseInt(cantidaddepaginas);

		cantidaddeVentas=prompt ("ingrese cantidad de ventas");
		cantidaddeVentas=parseInt(cantidaddeVentas);
		acumuladorVentas=acumuladorVentas+cantidaddeVentas;

		tema=prompt ("ingrese tema del libro");

		while (cantidaddepaginas<0) {

			cantidaddepaginas=prompt ("Error ! reingrese cantidad de paginas del libro");
			cantidaddepaginas=parsent(cantidaddepaginas);

		}

		while (tema!= 'robotica' &&   tema!= 'programacion' && tema!= 'patrones' && tema!= 'base de datos' ) {
			
			tema=prompt ("Error! reingrese tema del libro");
		}


		if (cantidaddepaginas%2==0) {

			cantidadlibropagPares=cantidadlibropagPares+1;
		}
		else {

			cantidadlibropagImpares=cantidadlibropagImpares+1;
		}

		if (cantidaddeVentas==0 ) {

			cantidaddeventasCero=cantidaddeventasCero+1;
		}
		

		if (tema== "programacion") {

			cantidaddepaginasProgramacion=cantidaddepaginasProgramacion+1;
			acumuladorProgramacion=acumuladorProgramacion+cantidaddepaginasProgramacion;

		}


		respuesta= prompt("Desea continuar");
	}


	promedioVentas=acumuladorVentas/contador;

	document.write ( " La cantidad de libros con paginas pares es  " + cantidadlibropagPares + "<br>");
	document.write ( " La cantidad de libros con paginas impares es  " + cantidadlibropagImpares + "<br>");
	document.write ( " La cantidad de cero ventas  " + cantidaddeventasCero + "<br>");
	document.write ( " El promedio de ventas es   " + promedioVentas + "<br>");
	document.write ( " La suma de todas las paginas de libro programacion es " + acumuladorProgramacion + "<br>");




}

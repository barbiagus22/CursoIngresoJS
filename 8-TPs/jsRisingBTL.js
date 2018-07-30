/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	
	//A
	
	var respuesta;
	var edad;
	var sexo;
	var	femenino;
	var masculino;
	var contador;
	var	estadocivil;
	var sueldobruto;
	var	numerodelegajo;
	//var cifras;
	var	nacionalidad; 
	var respuesta= 'SI';
	

		while (respuesta!= 'NO') {

		edad= prompt (" Ingrese edad entre 18 y 90 años");
		edad= parseInt (edad);
		

		while (edad<18 ||  edad>90 ) 
		{
			edad= prompt (" La edad no se encuentra entre 18 y 90 años.  Ingrese edad");
			edad= parseInt (edad);
			contador=contador+1;
			
			// si pongo letra me sigue el sistema si bien muestra NaN que debo ingresar?
		}

		document.getElementById('Edad').value=edad;
		
		sexo=prompt ("Ingrese sexo, F para femenino o M para masculino");
		
		while (sexo!= 'F' && sexo!='M' ) 
		{
			sexo= prompt (" No es correcto. Ingrese sexo, F para femenino o M para masculino");
			contador=contador+1;
			///femenino= 'f';masculino= 'm'; PREGUNTAR COMO HACER PARA QUE F ME LO MUESTRE COMO FEMENINO  LO MISMO MASCULINO											
		}

		document.getElementById('Sexo').value=sexo;

		estadocivil= prompt ('Ingrese estado Civil 1- soltero 2- casado 3- divorciado 4-viudo');
		
		while (estadocivil<1 ||  estadocivil>=5 ) 
		{
			estadocivil= prompt ("El numero ingresado no corresponde a las opciones. Ingrese estado Civil 1- soltero 2- casado 3- divorciado 4-viudo");
			estadocivil= parseInt (estadocivil);
			contador=contador+1;
			// SI PONGO LETRAS IGUAL CONTINUA.
		}

		/* PREGUNTAR SI PUDIERA HACERLO CON

		switch (estadocivil) {

			case "1":

				alert ( " Es soltero");
				break;

			case "2":

				alert ( " Es casado");
				break;

			case "3":

				alert ( " Es divorciado");
				break;

			case "4":

				alert ( " Es viudo");
				break;

			defautl
		}*/
		document.getElementById('EstadoCivil').value=estadocivil;

		sueldobruto= prompt( "Ingrese sueldo bruto mayor a $8000");

		while (sueldobruto<8000)
		{

			sueldobruto= prompt( "No es mayor a $8000. Ingrese sueldo bruto ");
			sueldobruto=parseInt (sueldobruto);
			contador=contador+1;
		}
		document.getElementById('Sueldo').value=sueldobruto;


		numerodelegajo=prompt ("Ingrese numero de legajo");
		// preguntar como se cuentan la cantidad de cifras. 

		while ( numerodelegajo == 0)
 		{	
 			//numerodelegajo= numerodelegajo/10;
 			//alert ("El número tiene " + cifras + " cifras");
   			numerodelegajo=prompt ("Ingrese numero de legajo");
   			numerodelegajo=parseInt (numerodelegajo);
   			contador= contador+1;
 		}
 		document.getElementById('Legajo').value=numerodelegajo;
		
 		nacionalidad= prompt("Ingrese nacionalidad  A- argentinos E- extranjeros N- nacionalizados");

 		while (nacionalidad != 'A' && nacionalidad!= 'E' && nacionalidad!= 'N' ) 
 		{
 			nacionalidad= prompt("Ingrese nacionalidad  A- argentinos E- extranjeros N- nacionalizados");
 			contador= contador+1;
 		}

 		document.getElementById('Nacionalidad').value=nacionalidad;


 		respuesta= prompt ( "Desea Continuar");
 		}

 		
}




	
	

	

	
	
	

/*if (sexo == 'f' || sexo== 'm') {

			document.getElementById('Sexo').value=sexo
		}	
*/
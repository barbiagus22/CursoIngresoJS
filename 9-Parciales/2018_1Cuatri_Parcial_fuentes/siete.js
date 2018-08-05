/*Realizar el algoritmo que permita el ingreso por prompt de las notas
 (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos,
  informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/



function mostrar()

/* va todo dentro del while , primero se piden los datos y los valido. 
dsp evaluo las contidiones, 
las alertas o document write informarlos al final fuera del while. 

las notas alta y bajas se hacen por 2 if con condicion ||..... y se iguala notamasbaja=nota o viceversa. 
los acumuladores de cantidad siempre +1
en el caso de notas siempre con la variable por ej queres que accumule notas es acumulador + notas. si queres que cuente cantidad de varones es por contador +1.

los romedios se hacen fuera del while. 

*/
{

	var nota; 
	var sexo; 
	var contador;
	var aculumadornotasTotales=0;
	var promediodenotasTotales;
	var notamasbaja;
	var notamasAlta;
	var sexodelanotaBaja;
	var cantidaddeVarones=0;
	var sexodelanotaAlta;


	

	// while (contador<2) 

	for (contador=0 ; contador<3 ; contador++ ) 
	{

	nota=prompt ("Ingrese nota");
	nota= parseInt (nota);
	aculumadornotasTotales=aculumadornotasTotales+nota;
	//contador=contador+1; si lo uso con while
	
		while (isNaN (nota)  || nota<0 || nota>10 )
		{
			nota=prompt ("Error reingrese nota");
			nota= parseInt (nota);
		}

	sexo= prompt ("Ingrese sexo f o m");
	
		while (sexo!= 'f' && sexo!='m') 
		{
			sexo= prompt ("Error ! reingrese sexo  f o m");
		}	
	
	if (contador==1 || nota<notamasbaja )
	{
		notamasbaja = nota;
		sexodelanotaBaja = sexo;
	}
    if (contador==1 || nota>notamasAlta ) 
	{
		notamasAlta = nota;
		sexodelanotaAlta = sexo;
	}

	if (nota>=6 && sexo=='m') 
		{
		cantidaddeVarones=cantidaddeVarones+1;
		}


	/*{
		notamasbaja=nota;
		notamasAlta=nota;
	}
	else 

		if (nota < notamasbaja) 
		{
		
		}
		if (nota>notamasAlta) 
		{
		nota=notamasAlta;
		}
	*/
	
}

	promediodenotasTotales=aculumadornotasTotales/contador;
	alert ("El promedio total de notas es " + promediodenotasTotales);
	alert (" La nota mas baja es  " + notamasbaja + " y de sexo  " + sexodelanotaBaja );
	alert (" La nota mas alta es  " + notamasAlta + " y de sexo  " + sexodelanotaAlta );
	alert (" La cantidad de varones con nota mayor o igual a 6 son " + cantidaddeVarones );
	
}

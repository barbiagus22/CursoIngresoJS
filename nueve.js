/*Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto,
 el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30)
 hasta que el usuario quiera e informar al terminar el ingreso por 
 document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.

Testeo con los siguientes valores 
(	m=pepito;	p = 50;		 	t =-300(mal) ,-30(bien) ) 
(	m=teem;		p = 10;		 	t =0 					) 
(	m=llut;		p = 150(mal),	t =-13 					) 
			    15(bien); 
(	m=fpy;		p = 45; 		t =-12 					)


*/


function mostrar()
{

 var marca;
 var peso; 
 var temperatura; 
 var respuesta='si';
 var contador=0;
 var cantidadtempPares=0;
 var acumuladortemperaturasPares=0;
 var pesoMinimo;
 var pesoMaximo; 
 var marcadelpesoMaximo; 
 var marcadelpesoMinimo;
 var cantidadtempmenorCero=0;
 var acumuladortempmenorCero=0;
 var acumuladorpeso=0;
 var promediodePeso;
 var temperaturaMaxima;
 var temperaturaMinima;


 while (respuesta== 'si')
 {
 	contador=contador+1;

  	marca=prompt ("Ingrese marca");
  	peso= prompt ( "Ingrese peso");
  	peso= parseFloat (peso);
  	temperatura= prompt ("Ingrese temperatura");
  	temperatura= parseFloat (temperatura);

  	acumuladorpeso=acumuladorpeso+peso;

  	while (isNaN (peso) || peso<1 || peso>100 )
  	{
  		peso= prompt ( "Error! reingrese peso de 1 a 100kg");
  		peso= parseFloat (peso);
  	}
  	while (isNaN (temperatura) || temperatura<-30 || temperatura>30 )
  	{
  		temperatura= prompt ("Error! reingrese temperatura de -30 a 30 grados");
  		temperatura= parseFloat (temperatura);
  	}

  /*A*/	if (temperatura%2==0) {

  			cantidadtempPares=cantidadtempPares+1;
  			acumuladortemperaturasPares=acumuladortemperaturasPares+temperatura;
  		}
  /*B y F*/	
  		if (contador==1  ||  peso<pesoMinimo ) {

  			pesoMinimo=peso;
  			marcadelpesoMinimo=marca;
  		}/// va con otr if o else if 
  		if (contador==1  ||  peso>pesoMaximo ) {

  			pesoMaximo=peso;
  			marcadelpesoMaximo=marca;
  		}
 /*C*/ if (temperatura<0) {

  			cantidadtempmenorCero=cantidadtempmenorCero+1;
  			acumuladortempmenorCero=acumuladortempmenorCero+temperatura;
  		}
  /// NO LO PIDE EL EJE// AGREGADO ---- va con otr if o else if 
  		if (contador==1 || temperatura< temperaturaMinima) {

  			temperaturaMinima=temperatura;
  		}
  		if (contador==1 || temperatura> temperaturaMaxima) {

  			temperaturaMaxima=temperatura;
  		}
  	respuesta= prompt (" Desea continuar");
 }

 /*D*/ promediodePeso=acumuladorpeso/contador;


 //document.write (" El peso es " + peso + "kg" + "<br>");
 //document.write (" La temperatura es  " + temperatura + " grados "  + "<br>" );

document.write (" La cantidad de temperaturas pares es  " + cantidadtempPares + "<br>" );
document.write (" La marca de peso minimo  " + marcadelpesoMinimo + "<br>" );
document.write (" La marca de peso maximo  " + marcadelpesoMaximo + "<br>" );
document.write (" La cantidad de productos con temperatura menor a 0 grados es  " + cantidadtempmenorCero + "<br>" );
document.write (" El promedio de peso de todos los productos es  " + promediodePeso + "<br>" );
document.write (" El peso maximo  " + pesoMaximo + "<br>" );
document.write (" El peso minimo  " + pesoMinimo + "<br>" );
document.write (" La temperatura maxima es   " + temperaturaMaxima + "<br>" );
document.write (" La temperatura minima es   " + temperaturaMinima + "<br>" );


}

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	// A.


 	/*var cantidadlamparas;
	var preciocondescuento;
	var precio;

	precio= 35
	cantidadlamparas=document.getElementById('Cantidad').value;

	if (cantidadlamparas>=6) {
	
	preciocondescuento= (precio*cantidadlamparas)*50/100;
	document.getElementById('precioDescuento').value=preciocondescuento;
	
}
*/

 	var cantidadlamparas;
 	var preciocondescuento;
 	var	marca;
 	var totalbruto;
 	var descuento;


 	
 	cantidadlamparas=document.getElementById('Cantidad').value;
 	marca=document.getElementById('Marca').value;

 	totalbruto=cantidadlamparas*35;
 	preciocondescuento= totalbruto-descuento;

 	document.getElementById('Precio con descuento').value=preciocondescuento;

 	//pruebo si flciona...
 	 	
 if (cantidadlamparas>=6) {

 		descuento=totalbruto*0.5;

 		}
//B.

 else if (cantidadlamparas==5 ) {

 		if (marca=='ArgentinaLuz') {

 		descuento=totalbruto*0.40;
 		
  		}
 		else { 

 			descuento=totalbruto*0.30;
 			}
 	}
 	

//C.                                                                                                                                                                  

 /*if (cantidadlamparas==4 && (marca=='ArgentinaLuz'|| marca=='FelipeLamparas')) {

		preciocondescuento= precio-((preciocondescuento*cantidadlamparas)*0.25);
		document.getElementById('precioDescuento').value=preciocondescuento;
	}
		else {

		preciocondescuento=precio-((preciocondescuento*cantidadlamparas)*0.20);
		document.getElementById('precioDescuento').value=preciocondescuento;

	}	
*/









}









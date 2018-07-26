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

 	var	cantidaddelamparas;
 	var	marca;
 	var	preciototal;
 	var	descuento;
 	var preciodescuento;
 	var	ingresosbrutos;


 	cantidaddelamparas=document.getElementById('Cantidad').value;
 	cantidaddelamparas=parseInt(cantidaddelamparas);
 	marca=document.getElementById('Marca').value;
 	//alert( "cantidaDelamparas: " + cantidaDelamparas + "marca: " + marca);
 	preciototal=cantidaddelamparas*35;
  






// CASI TRES SWITCH CON IF// -----------------------------------------------------------------------------------------------------------------------------------------------------------
  

/*



  switch (cantidaddelamparas) {

    case 1:
    case 2:
       descuento=0
    break;

    case 3:
        //cantidaddelamparas==3 &&  NO HACE FALTA PONER ==3 POR Q YA ESTAS INGRESANDO CASE 3 HACIENDO REF A CANT LAMPARAS
       if (marca == 'ArgentinaLuz') {

          descuento=preciototal*0.15;
        }

       else if (marca=='FelipeLamparas') {

          descuento=preciototal*0.10;
        }

       else {

          descuento=preciototal*0.05;
        }

     break;

     case 4:

        if (marca== 'ArgentinaLuz' || marca== 'FelipeLamparas') {

          descuento=preciototal*0.25;
        }

        else {

         descuento=preciototal*0.20;
        }

     break;   

     case 5:

        if (marca=='ArgentinaLuz') {

          descuento=preciototal*0.40;
        }

        else {

          descuento=preciototal*0.30;
        }

    break;

    default:

      descuento=preciototal*0.50;
      break;

  }
 


//PREGUNTAR COMO SE HARIA EL DE IIBB




 preciodescuento=preciototal - descuento;
 document.getElementById('precioDescuento').value=preciodescuento


}

*/














// CASO DOS - SWITCH //-------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
  switch (cantidaddelamparas) {
    case 1:
    case 2:
    descuento=0;
    break;
    
    case 3:
      switch (marca) {
        case 'ArgentinaLuz':
          descuento=preciototal*0.15;
        break;
        case 'FelipeLamparas':
          descuento=preciototal*0.10;
        break;
        default:
          descuento=preciototal*0.05;
         
      }
      break;
    case 4:
  
      switch (marca) {
        case 'ArgentinaLuz':
        case 'FelipeLamparas':
          descuento=preciototal*0.25;
        break;
        default:
          descuento=preciototal*0.20;
         ///PREGUNTAR SI EN DEFAULT VA BREAK POR Q SINO SE ME EJECUTA EL SIGUENTE. 
     }
     break;
    case 5:
      switch (marca) {
        case 'ArgentinaLuz':
        descuento=preciototal*0.40;
        break;
        default:
        descuento=preciototal*0.30;
        
      } 
      break;
    case 6:
       descuento=preciototal*0.50;
      break;
      default:
        descuento=preciototal*0.50;
  
}
  
 preciodescuento = preciototal - descuento;
 document.getElementById('precioDescuento').value=preciodescuento;


if (preciodescuento > 120 ){
    
    document.getElementById('precioDescuento').value=preciodescuento;
    ingresosbrutos = preciodescuento * 0.10 ;
    preciodescuento = preciodescuento + ingresosbrutos;
    alert ( "Usted pago  " + ingresosbrutos + " pesos de IIBB");
  }



 //PREGUNTAR SI SE PUEDE HACER SWITCH EN EL CASO DE IIBB O COMO SE HACE?



  /*
  switch (preciodescuento){ 
    case 120:
     
      ingresosbrutos = preciodescuento * 0.10 ;
      preciodescuento = preciodescuento + ingresosbrutos;
      alert ( "Usted pago  " + ingresosbrutos + " pesos de IIBB");
    break;
   }
  document.getElementById('precioDescuento').value=preciodescuento;
   
  
}

*/



















/* 

//CASO UNO IF ELSE // -----------------------------------------------------------------------------------------------------------------------------------------------------------
    


    if (cantidaddelamparas>=6) {
      descuento=preciototal*0.50;
      
    }
     else if (cantidaddelamparas==5 && marca== "ArgentinaLuz" ) {
      descuento=preciototal*0.40;
      
     }
     else if (cantidaddelamparas==5 && marca!= "ArgentinaLuz") {
      descuento=preciototal*0.30;
      
     }
     else if ( cantidaddelamparas==4 && (marca== "ArgentinaLuz"  || marca == "FelipeLamparas" ) ) {
    
      descuento=preciototal*0.25;
     }
     
    else if ( cantidaddelamparas==4 && (marca != "ArgentinaLuz"  || marca!="FelipeLamparas") )   {
        descuento=preciototal*0.20;
     }
    else if (cantidaddelamparas==3) {
        if ( marca== "ArgentinaLuz") {
          descuento=preciototal*0.15
          
        }
        else if (marca=='FelipeLamparas' ) {
          descuento=preciototal*0.10;
 
        }
        else {
          descuento=preciototal*0.05;
        }
    }
    else if (cantidaddelamparas<3) {
      descuento=0;
      
    }
    
    preciodescuento = preciototal - descuento;
  document.getElementById('precioDescuento').value=preciodescuento;
  if (preciodescuento > 120 ){
    
    document.getElementById('precioDescuento').value=preciodescuento;
    ingresosbrutos = preciodescuento * 0.10 ;
    preciodescuento = preciodescuento + ingresosbrutos;
    alert ( "Usted pago  " + ingresosbrutos + " pesos de IIBB");
  }
 }


*/

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



























































































  /*
 //A
      if (cantidaddelamparas>=6 ) {
        descuento= preciototal
        *0.50;
      }
      else if (cantidaddelamparas==5) && (marca=='ArgentinaLuz') {
        descuento=preciototal
        *0.40;  
      
      else {
        descuento=preciototal
        *0.30;
      }
//B
      else if (cantidaddelamparas==4) && (marca=='ArgentinaLuz' || marca== 'FelipeLamparas') {
          descuento=
  preciototal
          *0.25;
      }
      
      else{
        descuento=preciototal*0.20;
      }
      else if (cantidaddelamparas==3) &&(marca=='ArgentinaLuz') {
        descuento=preciototal*0.15;
      }
      else if (marca=='FelipeLamparas') {
        descuento=preciototal*0.10;
      }
  
        else{descuento=preciototal*5/100;
        }   
      }*/
    
  
  
//E
    /*if (preciodescuento > 120 )
    { 
    document.getElementById('precioDescuento').value=preciodescuento;
    ingresosbrutos = preciodescuento * 0.10 ;
    preciodescuento = preciodescuento + ingresosbrutos;
    alert ( "Usted pago  " + ingresosbrutos + " pesos de IIBB");
    }*/
    





  





  /*var cantidadlamparas;
  var preciocondescuento;
  var precio;
  precio= 35
  cantidadlamparas=document.getElementById('Cantidad').value;
  if (cantidadlamparas>=6) {
  
 preciocondescuento= (precio*cantidadlamparas)*50/100;
  document.getElementById('precioDescuento').value preciocondescuento;
  
}
*/

  /*var cantidadlamparas;
  var preciocondescuento;
  var precio;
  var marca;
  precio=35;
  cantidadlamparas=document.getElementById('Cantidad').value;
  marca=document.getElementById('Marca').value;
 if(cantidadlamparas>=6) {
    preciocondescuento=(precio * cantidadlamparas) * 0.50;
    document.getElementById('precioDescuento').value=preciocondescuento;
  }
//B.
 else if (cantidadlamparas==5 && marca=='ArgentinaLuz') {
    preciocondescuento=(precio * cantidadlamparas)* 0.40;
    document.getElementById('precioDescuento').value=preciocondescuento;
    }
    else { 
      preciocondescuento= (precio*cantidadlamparas)*0.30;
      document.getElementById('precioDescuento').value=preciocondescuento;
  }
  
//C.
 /*if (cantidadlamparas==4 && (marca=='ArgentinaLuz'||'FelipeLamparas')) {
    preciocondescuento=(preciocondescuento*cantidadlamparas)*0.25;
    document.getElementById('precioDescuento').value=preciocondescuento;
  }
    else {
    preciocondescuento=(preciocondescuento*cantidadlamparas)*0.20;
    document.getElementById('precioDescuento').value=preciocondescuento;
  } 
*/




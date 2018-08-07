
/*
  Bienvenidos. 
Realizar el algoritmo que permita ingresar la 

marca del producto, 

el peso el cual debe ser entre 1 y 100 (validar), 

la temperatura de almacenamiento(entre -30 y 30) 

hasta que el usuario quiera e informar al terminar el 
ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos. 
f) El peso máximo y el mínimo.

Testeo con los siguientes valores 
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 ) 
(m=llut;p = 150(mal), 15(bien); t =-13 ) 
(m=fpy;p = 45; t =-12 )

13.10hs

*/

function mostrar() {

  var marca;
  var peso;
  var temperatura;
  var respuesta='si';
  var contador=0;
  var cantidaddetemperaturasPares=0;
  var pesoMaximo;
  var marcadelpesoMaximo;
  var cantidaddetemperaturamenoraCero=0;
  var acumuladordepeso=0;
  var promediodepeso;
  var pesoMinimo;


    while (respuesta=='si') {


      contador= contador+1;

      marca= prompt( "Ingrese marca del producto");

      while ( !isNaN (marca) ) {

        marca= prompt( "Error!! ingrese marca del producto");
      }

      peso= prompt( "Ingrese peso del producto");
      peso= parseInt (peso);
      acumuladordepeso=acumuladordepeso+peso;

      while ( isNaN (peso) || peso<=1 || peso>= 100) {

        peso= prompt( "Error!! reingrese peso del producto");
        peso= parseInt (peso);
     }

     temperatura= prompt( "Ingrese temperatura del producto");
     temperatura= parseInt (temperatura);

     while ( isNaN (temperatura) || temperatura<-30 || temperatura>30 ) {

      temperatura= prompt( "Error!! reingrese temperatura del producto");
      temperatura= parseInt (temperatura);
     }

     if (temperatura%2==0) {

        cantidaddetemperaturasPares=cantidaddetemperaturasPares+1;
     }

     if (contador==1 || peso > pesoMaximo) {

        pesoMaximo=peso;
        marcadelpesoMaximo=marca;
     }
     if (contador==1 || peso < pesoMinimo) {

        pesoMinimo=peso;
     }

     if (temperatura<0) {

        cantidaddetemperaturamenoraCero=cantidaddetemperaturamenoraCero+1;
     }


     respuesta= prompt (" Desea continuar");

    }

    promediodepeso=acumuladordepeso/contador;


     document.write ( " La cantidad de temperaturas pares es " + cantidaddetemperaturasPares+ " <br>");
     document.write ( " El peso maximo es  " + pesoMaximo + " y la marca del peso maximo es " + marcadelpesoMaximo + " <br>");
     document.write ( " La cantidad de productos que se conservan a temperatura menor a  cero son   " + cantidaddetemperaturamenoraCero + " <br>");
     document.write ( " El promedio de peso es " + promediodepeso + " <br>");
      document.write ( " El peso minimo es " + pesoMinimo + " y el peso maximo es " + pesoMaximo + " <br>");


}
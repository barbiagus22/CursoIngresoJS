function mostrar()
{

	var contador=0;
	var acumulador=0;
	var	numero;
	var suma;

	




while( contador<5 ) {

	
	numero= prompt ( "Ingrese numero");
	numero= parseInt (numero);
	contador= contador+1 ;

	acumulador= acumulador + numero;
	
	

}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
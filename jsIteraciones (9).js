function mostrar()
{

	var contador=0;
	// declarar variables
	/*var maximo= -9999;
	var minimo= +9999;*/


	var numero;
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador= contador+1; // lo mismo que contador++
		numero=prompt ("ingrese un numero");
		numero=parseInt (numero);
		// WHILE (ISNAN(NUM)); isNaN

		if (contador==1) {

			minimo=numero;
			maximo=numero;
		}

		else 
		{

			if (numero>maximo) {

				maximo=numero;
			}

			if (numero<minimo) {

				minimo=numero;
			}
		}
		
// BANDERA 
// contador




	respuesta= prompt ("Continuar");
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN

/*

ejercio 12 tp
eje 10


variables

banderas
acumulador
contador
maximo
minimo


*/
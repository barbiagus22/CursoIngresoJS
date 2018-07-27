function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo= -9999;
	var minimo= +9999;
	var numero;
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt ("ingrese un numero");
		numero=parseInt (numero);

			if (numero>maximo) {

				maximo=numero;
			}

			if (numero<minimo) {

				minimo=numero;
			}
		





	respuesta= prompt ("Continuar");
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN
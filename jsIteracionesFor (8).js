function mostrar()
{

	var numeroIngresado;
	var divisores;
	var numeroAnterior; //i
	var numerosRecorridos;//j
		
	divisores=0;

	numeroIngresado=prompt ("Ingrese numero");
	numeroIngresado= parseInt(numeroIngresado);

	for(numerosRecorridos=numeroIngresado;numerosRecorridos>1;numerosRecorridos--)
	{

		divisores=0;	
		for(numeroAnterior=numerosRecorridos-1; numeroAnterior>1;numeroAnterior-- )
		{

			if (numerosRecorridos%numeroAnterior==0) 
			{
					divisores++;
					break;
			}
		}

		if (divisores==0) 
		{
			console.log("Es primo" + numerosRecorridos);
		}	
		
	}

/*
	for(numeroAnterior=numeroIngresado-1; numeroAnterior>1;numeroAnterior-- ) {
	
		if (numeroIngresado%numeroAnterior==0) {

			divisores++;
			break;
			}
					
		}
			
		if (divisores==0) {

			console.log("Es primo");
		}	
		else{

			console.log("No es de los numeros primo");	
		}

		*/	


}//FIN DE LA FUNCIÓN
function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var num;
	var suma;
	var negativo=0;
	var positivos=0;
	var cantidaddeceros=0;
	var contadorpositivos=0;
	var contadornegativos=0;
	var contadorpares=0;

	while(respuesta!="no")
	{
		num=prompt ("Ingrese un numero");
		num=parseInt(num);

		
		while (isNaN (num)) {

			num=prompt("Ingrese un numero");
			num=parseInt(num);
		}
		
		if (num<0) {

			negativo=negativo+num;
			contadornegativos=contadornegativos+1;
			
		}
		else if (num>0) {

			positivos=positivos+num;
			contadorpositivos=contadorpositivos+1;
		}
		else {

			cantidaddeceros=cantidaddeceros+1;
		}
		

	respuesta= prompt("Continuar");
	}

	if (num%2==0) {

		contadorpares=contadorpares+1;
	}

	promediopositivos= positivos/contadorpositivos;
	promedionegativo= negativo/contadornegativos;		
	

	if (contadorpositivos>contadornegativos) {

			mensaje(" Hay mas positivos que negativosS")
	}



	document.write(negativo+ "<BR>" + positivos + "<BR>" + contadorpositivos + "<BR>" + contadornegativos + "<BR>" + cantidaddeceros + "<BR>" + contadorpares +"<BR>"+ promediopositivos+"<BR>" + promedionegativo);
	// calcular promedios
	//9 diferencia entre contadores .  hacemos un if
	// pro 9 

	// pares if num%2==0
	//if (contador + > contador -)



}//FIN DE LA FUNCIÓN
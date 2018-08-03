function mostrar()
{

var contador;
var numero;
var resto;
var acumulador=0;


		numero=prompt ("INgrese numero");
		numero= parseInt(numero);


		for(contador=0;contador<=numero; contador++) {
	
				if (contador%2==0) {


					acumulador=acumulador+contador;
					
				}
				alert ("los numeros pares son: " + acumulador  );

		}




		


}//FIN DE LA FUNCIÓN
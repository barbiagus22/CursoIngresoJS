/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{	

	var numeroUno;
	var numeroDos;
	var resultado;
	
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno); // tomo el dato y devuelve y luguarda como la misma variable.
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);


	resultado=(numeroUno+numeroDos);

	alert(resultado);


	// el signo mas sirve para sumar y concatenas
	// cuando pasamos texto concatena

	/*



odemos cargar datos

	strig= adena(" dif palabras ") o (numeros)

	la dfi entre entre uno y otro son las comillas , esto hace concatenarlos, los
	mostra juntos no los suma ej: "2"+"2"

	para que los sume me los tiene que mostrar como numeros.
	pasertIn lo que hace es devolverme el dato como numero y ya con el signo los suma.
	parseint retorna lo que yo le pase como numero. Lo que tengo que hacer es pisar el dato.

	para poder ver los errores sobre la pag conn f12 - voy a sources abro las carpetas
	click derecho add selecc.....




	*/



	/*

	var numero1;
	var numero2;
	var resultado;

	numero1=document.getElementById('numeroUno').value;
	numero2=document.getElementById('numeroDos').value;

	numero1=parseInt (numero1);
	numero2=parseInt (numero2);
	
	resultado=numero1 + numero2;

	alert("la suma es: "+resultado);
*/




}


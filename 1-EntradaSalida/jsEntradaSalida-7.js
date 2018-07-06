/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	
	var	numero1;
	var	numero2;
	var resultado;

	numero1=document.getElementById("numeroUno").value;	
	numero2=document.getElementById("numeroDos").value;
	
	numero1=parseInt (numero1);
	numero2=parseInt (numero2);

	resultado=numero1+numero2;// no me suma los valures, ponia el resultado antes de tranformalos 
	// a enteros, por lo cual me mostraba. cambie el orden y ahora me los suma.
	

	alert ("la suma es: "+ resultado);


}

function restar()
{
	
	var numero1;
	var numero2;

	numero1=document.getElementById('numeroUno').value;












}

function multiplicar()
{ 
	
}

function dividir()
{
	
}


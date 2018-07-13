function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var notas;

notas=Math.floor( Math.random ()  * (11-1) ) +1;

if (notas>=9) {

	alert("Exelente");
}

else if (notas>=4) {

	alert ("aprobo");
}
else 

{
	alert("La proxima se puede"); 
}

// la alerta va entre comillas cuando muestro el mje si no hace referencia
//a la varible

}//FIN DE LA FUNCIÓN
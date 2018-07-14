function mostrar()
{
//tomo la edad  
var edad;

edad=document.getElementById('edad').value;
edad=parseInt (edad);

if( edad<13) {
	alert ("es un niño")
}
else { 

	if (edad>18) {
		alert ("Es mayor de edad");

	}
	else { if (edad>13 || edad<17)
		alert ("Es adolecente");

	}



}


	



}//FIN DE LA FUNCIÓN
/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/

var	eleccionMaquina;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	
	eleccionMaquina= Math.floor((Math.random() * 3) + 1);
	alert (eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{
	var piedra;
	piedra= 1
	

	if (eleccionMaquina== 1 ) {	

			alert(" Empato");
		}
		else if (eleccionMaquina == 2) {

			alert (" Perdio");
		}

		else if ( eleccionMaquina == 3) {

			alert ("Ganó");
		}

}//FIN DE LA FUNCIÓN
function papel()
{
	var papel;
	papel=2


	if (eleccionMaquina == 1) {

		alert ("Ganó");
		}

		else if (eleccionMaquina ==2) {

			alert ("Empato");
		}
		else if (eleccionMaquina==3) {

			alert ("Perdio");
		}

}//FIN DE LA FUNCIÓN
function tijera()
{
	var tijera;
	tijera=3


	if (eleccionMaquina == 1) {

		alert ("Perdio");
		}

		else if ( eleccionMaquina == 2 ) {

			alert (" Ganó");
		}

		else if ( eleccionMaquina == 3) {

			alert ( "Empato");
		}		
	
}//FIN DE LA FUNCIÓN
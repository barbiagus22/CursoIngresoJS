var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

/*
acumulador  sumar una variable + una variable como por ej precios.  
acum=acum+var2


bandera 

tomo un valor booleano que nos sirve para utilizarlo en un if  

bandera= true  cuando queremos gneras un cod por unica vez 

if (bandera){}


contador 

4 op

*/

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	
	eleccionMaquina= Math.floor((Math.random() * 3) + 1);
	//alert (eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{
	var piedra;
	piedra= 1
	

	if (eleccionMaquina== 1 ) {	

			alert(" Empato");
			ContadorDeEmpates=ContadorDeEmpates+1;
		}
		else if (eleccionMaquina == 2) {

			alert (" Perdio");
			ContadorDePerdidas=ContadorDePerdidas+1;
		}

		else if ( eleccionMaquina == 3) {

			alert ("Ganó");
			ContadorDeGanadas=ContadorDeGanadas+1;

		}

		mostrarResultado(); /// mencionas la variable y te la ejecuta el resultado
		comenzar();

}//FIN DE LA FUNCIÓN
function papel()
{
	var papel;
	papel=2


	if (eleccionMaquina == 1) {

		alert ("Ganó");
		ContadorDeGanadas=ContadorDeGanadas+1;

		}

		else if (eleccionMaquina ==2) {

			alert ("Empato");
			ContadorDeEmpates=ContadorDeEmpates+1;
		}
		else if (eleccionMaquina==3) {

			alert ("Perdio");
			ContadorDePerdidas=ContadorDePerdidas+1;
		}

		mostrarResultado(); /// mencionas la variable y te la ejecuta
		comenzar();
}//FIN DE LA FUNCIÓN
function tijera()
{
	var tijera;
	tijera=3


	if (eleccionMaquina == 1) {

		alert ("Perdio");
		ContadorDePerdidas=ContadorDePerdidas+1;
		}

		else if ( eleccionMaquina == 2 ) {

			alert (" Ganó");
			ContadorDeGanadas=ContadorDeGanadas+1;

		}

		else if ( eleccionMaquina == 3) {

			alert ( "Empato");
			ContadorDeEmpates=ContadorDeEmpates+1;
		}		

		mostrarResultado(); /// mencionas la variable y te la ejecuta
		comenzar(); // selecciona un nuevo numero random
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	
	
	document.getElementById('ganadas').value=ContadorDeGanadas;
	document.getElementById('perdidas').value=ContadorDePerdidas;
	document.getElementById('empatadas').value=ContadorDeEmpates;
}
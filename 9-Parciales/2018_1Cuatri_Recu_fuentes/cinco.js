
function mostrar()
{

	var mensaje;
	var dia;

	dia= prompt("Ingrese un dia de la semana");

	switch (dia)

	{	

		case 'Sabado':
		case 'Domingo':
			 mensaje= "buen finde";
		break;

		case 'Lunes':
		case 'Martes':
		case 'Miercoles':
		case 'Jueves':
		case 'Viernes':
			mensaje= "a trabaja";
		break;

		default:
			mensaje="No es un dia valido";

		
	}
	
	alert (mensaje);






}
function mostrar()
{
	var dia;

	dia= prompt(" Ingrese un dia");

	switch (dia) {

		case"sabado":
		case"domingo":
			alert (" Buen finde");
		break;

		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			alert (" A trabajar");
		break;

		default:
			alert (" No es un dia de la semana");
	}

		/// consultar como una una sola alert.
}

var respuesta1 = "box-shadow"
var respuesta2 = "flex"
var respuesta3 = "list-style-image"
var respuesta4 = "border-radius"
var incorrectas = 0
function preguntar() {
	var adivinanza1 = prompt("Adivinanza #1: ¿Que propiedad CSS añade efectos de sombra alrededor del marco de un elemento.?nRespuesta = 11 caracteres");
	if (adivinanza1 === respuesta1) {
		document.getElementById("jugar").innerHTML = adivinanza1;
		alert("¡CORRECTO! ¡Sos bueno en este juego!\nClick OK para la siguiente adivinanza.");
		var adivinanza2 = prompt("Adivinanza #2: ¿Que propiedad CSS indica la capacidad de un elemento flexible para alterar sus dimensiones y llenar el espacio disponible.?\nRespuesta = 4 caracteres");
		if (adivinanza2 === respuesta2) {
			document.getElementById("jugar").innerHTML = adivinanza2;
			alert("¡2 de 2! ¡Vamos por mas!");
			var adivinanza3 = prompt("Adivinanza #3: ¿Que atributo CSS para listas, nos permite usar la imagen especificada como viñeta para la misma?nRespuesta = 16 caracteres");
			if (adivinanza3 === respuesta3) {
				document.getElementById("jugar").innerHTML = adivinanza3;
				alert("¡3 de 3! ¡esaaaa! ¡te dije que eras bueno en esto!");
				var adivinanza4 = prompt("¿Que propiedad CSS permite crear esquinas redondeadas para un elemento?\nRespuesta = 13 caracteres");
				if (adivinanza4 === respuesta4) {
					document.getElementById("jugar").innerHTML = adivinanza4;
					alert("Eso es todo. ¡Lo hiciste perfecto! Gracias por jugar.");
					document.getElementById("jugar").innerHTML = "¡Jugar!";
				} else {
					bootbox.alert("uuuh! estuviste tan cerca... ¡Comenzar nuevamente!");
					document.getElementById("jugar").innerHTML = "¡Jugar!";
				}
			} else {
				bootbox.alert("¿Empezando de nuevo eh?");
				document.getElementById("jugar").innerHTML = "¡Jugar!";
			}
		} else {
			bootbox.alert("Ahora deberás iniciar desde el principo! JAJAJAJA!");
			document.getElementById("jugar").innerHTML = "¡Jugar!";
		}
	} else {
		incorrectas = incorrectas + 1;
		bootbox.alert({
			message: "Incorrecto! Intentalo de nuevo.<br>Respuestas incorrectas: <b>" + incorrectas + "</b>",
			centerVertical: true
		});
		document.getElementById("jugar").innerHTML = "Nuevamente!";
	}
}
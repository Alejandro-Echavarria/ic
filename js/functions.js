document.addEventListener("DOMContentLoaded", function (event) {
  const form = document.getElementById("form");

  form.onsubmit = function (e) {
    e.preventDefault();

		let identificarLista = document.getElementById('list-space');
		identificarLista.innerHTML = ""; // Limpiamos la lista siempre al empezar

    let identificarCadena = document.getElementById("input-string");
    let cadena = identificarCadena.value;

		/* Obtenemos las posisciones de los primeros paréntesis */
		let indice1 = cadena.indexOf("(");
		let indice2 = cadena.indexOf(")");
		
		// Validamos de que el campo tenga texto
		if (cadena === "") {
			return toast("Debe suminitrar un texto", "toast-error");
		}

		// Validamos de que existan al menos un paréntesis de apertura y una de cierre
		if (indice1 === -1 || indice2 === -1) {
				return toast("No existen los paréntesis necesarios", "toast-error");
		}

    for (let i = 1; i; i++) {

			indice1 = cadena.indexOf("(");
			indice2 = cadena.indexOf(")") + 1; // Sumamos un valor para poder extraer los elementos con su paréntesis de cierre

			if (indice2 != 0) {

				// Obtenemos los elementos de cada pareja de paréntesis
				let sustraerCadena = cadena.substring(indice1, indice2);

				// Sustraemos la parte que queda de la cadena suminístrada
				cadena = cadena.substring(indice2);

				// Imprimimos los valores en la lista
				identificarLista.innerHTML += `<li> ${sustraerCadena} </li>`;
			} else {
				
				// Finalizamos el loop
				toast("Texto extraído", "toast-success");
				break;
			}
		}
  };
});

function fntLimpiar() {

	let identificarLista = document.getElementById('list-space');
	identificarLista.innerHTML = ""; // Limpiamos la lista siempre al empezar

	let identificarCadena = document.getElementById("input-string");
	identificarCadena.value = "";

	toast("Campo y lista limpiadas con éxito", "toast-neutral");
}

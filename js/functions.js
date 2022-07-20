document.addEventListener("DOMContentLoaded", function (event) {

  const form = document.getElementById("form");
	
  form.onsubmit = function (e) {
		e.preventDefault();
		
		const arrData = [];

		// Limpiamos las listas siempre al empezar
		let identificarLista = document.getElementById('list-space');
		let listCitas = document.getElementById('list-citas');
		identificarLista.innerHTML = "";
		listCitas.innerHTML = "";

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
				arrData.push(sustraerCadena)

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

		// Llamamos a la function que se encargar de buscar las citas y le pasamos el arreglo de datos como parametro
		fntIdentificarCitas(arrData);
  };
});

function fntIdentificarCitas(datos) {

	let citas = identificarCitas(datos);
	let listCitas = document.getElementById('list-citas');
	
	/* 
		Imprimimos las citas, utilizamos join('') para eliminar las comas del 
		arreglo, ya que se estaban imprimiendo.
	*/
	listCitas.innerHTML = `${citas.map(cita => (`<li>${cita}</li>`)).join('')}`;
}

function fntLimpiar() {

	// Limpiamos las listas
	let identificarLista = document.getElementById('list-space');
	let listCitas = document.getElementById('list-citas');
	identificarLista.innerHTML = "";
	listCitas.innerHTML = "";

	let identificarCadena = document.getElementById("input-string");
	identificarCadena.value = "";

	toast("Campo y lista limpiadas con éxito", "toast-neutral");
}

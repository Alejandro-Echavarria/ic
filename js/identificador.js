const tabla = [
	{"codigo":"Gén","libro":"Génesis","categoria":"EL PENTATEUCO","id_libro":	1	,"id_categoria":	1	},
	{"codigo":"Éx","libro":"Éxodo","categoria":"EL PENTATEUCO","id_libro":	2	,"id_categoria":	1	},
	{"codigo":"Lev","libro":"Levítico","categoria":"EL PENTATEUCO","id_libro":	3	,"id_categoria":	1	},
	{"codigo":"Núm","libro":"Números","categoria":"EL PENTATEUCO","id_libro":	4	,"id_categoria":	1	},
	{"codigo":"Dt","libro":"Deuteronomio","categoria":"EL PENTATEUCO","id_libro":	5	,"id_categoria":	1	},
	{"codigo":"Jos","libro":"Josué","categoria":"HISTORICOS","id_libro":	6	,"id_categoria":	2	},
	{"codigo":"Jue","libro":"Jueces","categoria":"HISTORICOS","id_libro":	7	,"id_categoria":	2	},
	{"codigo":"Rut","libro":"Rut","categoria":"HISTORICOS","id_libro":	8	,"id_categoria":	2	},
	{"codigo":"1Sa","libro":"I Samuel","categoria":"HISTORICOS","id_libro":	9	,"id_categoria":	2	},
	{"codigo":"2Sa","libro":"II Samuel","categoria":"HISTORICOS","id_libro":	10	,"id_categoria":	2	},
	{"codigo":"1Re","libro":"I Reyes","categoria":"HISTORICOS","id_libro":	11	,"id_categoria":	2	},
	{"codigo":"2Re","libro":"II Reyes","categoria":"HISTORICOS","id_libro":	12	,"id_categoria":	2	},
	{"codigo":"1Par","libro":"I Crónicas/1 Paralipómenos","categoria":"HISTORICOS","id_libro":	13	,"id_categoria":	2	},
	{"codigo":"2Par","libro":"II Crónicas/2 Paralipómenos","categoria":"HISTORICOS","id_libro":	14	,"id_categoria":	2	},
	{"codigo":"Esd","libro":"Esdras","categoria":"HISTORICOS","id_libro":	15	,"id_categoria":	2	},
	{"codigo":"Neh","libro":"Nehemías","categoria":"HISTORICOS","id_libro":	16	,"id_categoria":	2	},
	{"codigo":"Tob","libro":"Tobit (Tobías)","categoria":"HISTORICOS","id_libro":	17	,"id_categoria":	2	},
	{"codigo":"Jdt","libro":"Judit","categoria":"HISTORICOS","id_libro":	18	,"id_categoria":	2	},
	{"codigo":"Est","libro":"Ester","categoria":"HISTORICOS","id_libro":	19	,"id_categoria":	2	},
	{"codigo":"1Mac","libro":"I Macabeos","categoria":"HISTORICOS","id_libro":	20	,"id_categoria":	2	},
	{"codigo":"2Mac","libro":"II Macabeos","categoria":"HISTORICOS","id_libro":	21	,"id_categoria":	2	},
	{"codigo":"Job","libro":"Job","categoria":"SAPIENCIALES","id_libro":	22	,"id_categoria":	4	},
	{"codigo":"Sal","libro":"Salmos (150)","categoria":"LIRICA","id_libro":	23	,"id_categoria":	3	},
	{"codigo":"Prov","libro":"Proverbios","categoria":"SAPIENCIALES","id_libro":	24	,"id_categoria":	4	},
	{"codigo":"Ecl","libro":"Eclesiastés (Cohélet)","categoria":"SAPIENCIALES","id_libro":	25	,"id_categoria":	4	},
	{"codigo":"Cant","libro":"Cantar de los Cantares","categoria":"LIRICA","id_libro":	26	,"id_categoria":	3	},
	{"codigo":"Sab","libro":"Sabiduría","categoria":"SAPIENCIALES","id_libro":	27	,"id_categoria":	4	},
	{"codigo":"Eclo","libro":"Eclesiástico (Sirácida)","categoria":"SAPIENCIALES","id_libro":	28	,"id_categoria":	4	},
	{"codigo":"Is","libro":"Isaías","categoria":"PROFETICOS","id_libro":	29	,"id_categoria":	5	},
	{"codigo":"Jer","libro":"Jeremías","categoria":"PROFETICOS","id_libro":	30	,"id_categoria":	5	},
	{"codigo":"Lam","libro":"Lamentaciones","categoria":"LIRICA","id_libro":	31	,"id_categoria":	3	},
	{"codigo":"Bar","libro":"Baruc","categoria":"PROFETICOS","id_libro":	32	,"id_categoria":	6	},
	{"codigo":"Ez","libro":"Ezequiel","categoria":"PROFETICOS","id_libro":	33	,"id_categoria":	6	},
	{"codigo":"Dan","libro":"Daniel","categoria":"PROFETICOS","id_libro":	34	,"id_categoria":	6	},
	{"codigo":"Os","libro":"Oseas","categoria":"PROFETICOS","id_libro":	35	,"id_categoria":	6	},
	{"codigo":"Jl","libro":"Joel","categoria":"PROFETICOS","id_libro":	36	,"id_categoria":	6	},
	{"codigo":"Am","libro":"Amós","categoria":"PROFETICOS","id_libro":	37	,"id_categoria":	6	},
	{"codigo":"Abd","libro":"Abdías","categoria":"PROFETICOS","id_libro":	38	,"id_categoria":	6	},
	{"codigo":"Jon","libro":"Jonás","categoria":"PROFETICOS","id_libro":	39	,"id_categoria":	6	},
	{"codigo":"Miq","libro":"Miqueas","categoria":"PROFETICOS","id_libro":	40	,"id_categoria":	6	},
	{"codigo":"Nah","libro":"Nahum","categoria":"PROFETICOS","id_libro":	41	,"id_categoria":	6	},
	{"codigo":"Hab","libro":"Habacuc","categoria":"PROFETICOS","id_libro":	42	,"id_categoria":	6	},
	{"codigo":"Sof","libro":"Sofonías","categoria":"PROFETICOS","id_libro":	43	,"id_categoria":	6	},
	{"codigo":"Ag","libro":"Ageo","categoria":"PROFETICOS","id_libro":	44	,"id_categoria":	6	},
	{"codigo":"Zac","libro":"Zacarías","categoria":"PROFETICOS","id_libro":	45	,"id_categoria":	6	},
	{"codigo":"Mal","libro":"Malaquías","categoria":"PROFETICOS","id_libro":	46	,"id_categoria":	6	},
	{"codigo":"Mt","libro":"Mateo","categoria":"EVANGELIOS","id_libro":	47	,"id_categoria":	7	},
	{"codigo":"Mc","libro":"Marcos","categoria":"EVANGELIOS","id_libro":	48	,"id_categoria":	7	},
	{"codigo":"Lc","libro":"Lucas","categoria":"EVANGELIOS","id_libro":	49	,"id_categoria":	7	},
	{"codigo":"Jn","libro":"Juan","categoria":"EVANGELIOS","id_libro":	50	,"id_categoria":	7	},
	{"codigo":"Hech","libro":"Hechos","categoria":"HECHOS","id_libro":	51	,"id_categoria":	8	},
	{"codigo":"Rom","libro":"Romanos","categoria":"CARTAS","id_libro":	52	,"id_categoria":	9	},
	{"codigo":"1Cor","libro":"I Corintios","categoria":"CARTAS","id_libro":	53	,"id_categoria":	9	},
	{"codigo":"2Cor","libro":"II Corintios","categoria":"CARTAS","id_libro":	54	,"id_categoria":	9	},
	{"codigo":"Gál","libro":"Gálatas","categoria":"CARTAS","id_libro":	55	,"id_categoria":	9	},
	{"codigo":"Ef","libro":"Efesios","categoria":"CARTAS","id_libro":	56	,"id_categoria":	9	},
	{"codigo":"Flp","libro":"Filipenses","categoria":"CARTAS","id_libro":	57	,"id_categoria":	9	},
	{"codigo":"Col","libro":"Colosenses","categoria":"CARTAS","id_libro":	58	,"id_categoria":	9	},
	{"codigo":"1Tes","libro":"I Tesalonicenses","categoria":"CARTAS","id_libro":	59	,"id_categoria":	9	},
	{"codigo":"2Tes","libro":"II Tesalonicenses","categoria":"CARTAS","id_libro":	60	,"id_categoria":	9	},
	{"codigo":"1Tim","libro":"I Timoteo","categoria":"CARTAS","id_libro":	61	,"id_categoria":	9	},
	{"codigo":"2Tim","libro":"II Timoteo","categoria":"CARTAS","id_libro":	62	,"id_categoria":	9	},
	{"codigo":"Tit","libro":"Tito","categoria":"CARTAS","id_libro":	63	,"id_categoria":	9	},
	{"codigo":"Flm","libro":"Filemón","categoria":"CARTAS","id_libro":	64	,"id_categoria":	9	},
	{"codigo":"Heb","libro":"Hebreos","categoria":"CARTAS","id_libro":	65	,"id_categoria":	9	},
	{"codigo":"Sant","libro":"Santiago","categoria":"CARTAS","id_libro":	66	,"id_categoria":	9	},
	{"codigo":"1Pe","libro":"I Pedro","categoria":"CARTAS","id_libro":	67	,"id_categoria":	9	},
	{"codigo":"2Pe","libro":"II Pedro","categoria":"CARTAS","id_libro":	68	,"id_categoria":	9	},
	{"codigo":"1Jn","libro":"I Juan","categoria":"CARTAS","id_libro":	69	,"id_categoria":	9	},
	{"codigo":"2Jn","libro":"II Juan","categoria":"CARTAS","id_libro":	70	,"id_categoria":	9	},
	{"codigo":"3Jn","libro":"III Juan","categoria":"CARTAS","id_libro":	71	,"id_categoria":	9	},
	{"codigo":"Jds","libro":"Judas","categoria":"CARTAS","id_libro":	72	,"id_categoria":	9	},
	{"codigo":"Ap","libro":"Apocalipsis o Revelación de Juan","categoria":"APOCALIPSIS","id_libro":	73	,"id_categoria":	10	}
];

function identificarCitas(citas) {
	let encontrado = 0;
	let citasClasificadas = [];
	let ordenAnterior = 0;
	let categoriaAnterior = "";
	let libroAnterior = "";

	for (let cita of citas) {

		registro = new Object();
		encontrado = 0;
		for (let i = 0; i < tabla.length; i++ ) {
			codigo = tabla[i]["codigo"];
			indice = cita.indexOf(codigo);
	
			// Validamos de que existan al menos un parentesis de apertura y una de cierre
			if (indice === -1) {
			} else {
				encontrado = 1;
				registro["orden"] = (tabla[i]["id_categoria"] *100)+tabla[i]["id_libro"];
				registro["categoria"] = tabla[i]["categoria"];
				registro["libro"] = tabla[i]["libro"];
				registro["cita"] = cita;

				// Asegura los valores del registro procesado para refrencias futuras.
				ordenAnterior = (tabla[i]["id_categoria"] *100)+tabla[i]["id_libro"];
				categoriaAnterior = tabla[i]["categoria"];
				libroAnterior = tabla[i]["libro"];
				break;
			}
		}

		if (encontrado != 1) {
			if (ordenAnterior === 0)  {
				registro["orden"] = 99999;
			} else  {
				registro["orden"] = ordenAnterior;
			}
			if (categoriaAnterior === "")  {
				registro["categoria"] = "Sin Clasificacion";
			} else  {
				registro["categoria"] = categoriaAnterior;
			}
			if (libroAnterior === "")  {
				registro["libro"] = "No Definido";
			} else  {
				registro["libro"] = libroAnterior;
			}
			registro["cita"] = cita;	
		}
		citasClasificadas.push(registro);
	}	

	// Orden Ascendentemente
	citasOrdenadas = citasClasificadas.sort(function (a, b){
		return (a.orden - b.orden)
	});
	
	/*** Ordenar Descendentemente
		citasOrdenadas = citasClasificadas.sort(function (a, b){
				return (b.orden - a.orden)
		});
	*/
	let reg = citasOrdenadas.map(function(r){
		return r.categoria+' '+r.libro+' '+r.cita;
	})

	return reg;
}
// ############# EJERCICIO 1

//Declaración de variables
const valorEnvio = 200;

function calcularTotal () {
	let valorProducto = parseInt(prompt("Ingrese el valor del producto:"));
	
	function devolverResultado () {
		alert("el importe total es: " + (valorProducto + valorEnvio));
	}
	devolverResultado ();
}
// &&&&&&&&&&&&&& FIN EJERCICIO 1


// ############# EJERCICIO 2
function sumarTresNumeros() {
	let numeroA = parseInt(prompt("Ingrese 1er Numero a sumar:"));
	let numeroB = parseInt(prompt("Ingrese 2do Numero a sumar:"));
	let numeroC = parseInt(prompt("Ingrese 3er Numero a sumar:"));
	
	if (isNaN(numeroA))  {
		numeroA = 0;
	}

	if (isNaN(numeroB)) {
		numeroB = 0;
	}

	if (isNaN(numeroC)) {
		numeroC= 0;
	}

	function devolverResultado() {
		alert("La suma de los 3 numeros es: " + (parseInt(numeroA+numeroB+numeroC)) + " [ " + numeroA + ", " + numeroB + ", " + numeroC + " ]");
	}

	devolverResultado ();
}
// &&&&&&&&&&&&&& FIN EJERCICIO 2

// ############# EJERCICIO 3
//Declaración de variables
const alturaPromedio = 1.70;

function estimarTalla() {
	let alturaIngresada = parseFloat(prompt("Ingrese su altura:"));
	
	function devolverResultado() {
		if (alturaIngresada < alturaPromedio) {
			alert("Sos una persona BAJA");
		}
		
		if (alturaIngresada > alturaPromedio) {
			alert("Sos una persona ALTA");
		}
		
		if (alturaIngresada === alturaPromedio) {
			alert("Sos una persona PROMEDIO");
		}
	}
	devolverResultado ();
}
// &&&&&&&&&&&&&& FIN EJERCICIO 3


// ############# EJERCICIO 4

function analizarPar() {
	let numeroA = parseInt(prompt("Ingrese 1er Numero:"));
	let numeroB = parseInt(prompt("Ingrese 2do Numero:"));
	
	function devolverResultado() {
		if (((numeroA+numeroB)%2) == 0) {
			alert("La suma de los dos parametros es PAR ( " + (parseInt(numeroA+numeroB)) + " )");
		} else {
			alert("La suma de los dos parametros es IMPAR ( " + (parseInt(numeroA+numeroB)) + " )");			
		}
	}
	devolverResultado ();
}
// &&&&&&&&&&&&&& FIN EJERCICIO 4
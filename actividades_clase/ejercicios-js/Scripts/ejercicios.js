// 1. Vamos a perdir dos números, sumarlos y darle el resultado al usuario 
/*
let numero1 = 0;
let numero2 = 0;
let resultado = 0;

numero1 = prompt("Ingrese el primer número");
numero2 = prompt("Ingrese el segundo número");
resultado = parseFloat(numero1) + parseFloat(numero2);

alert("El resultado de la suma de " + numero1 + " y " +  numero2 + " es: " + resultado);
*/

//2. Hacer un programa que reciba un nombre por parte del usuario, si se recibió nombre por parte del usuario, saludarlo con nombre, si no, sólo decir 'Hola'



// if -> si se cumple una condición, haga...
// else -> Si no se cumple una condición, haga otra cosa...

/* variable = "" -> False -> No
variable = "nombre" -> True -> Si 

Solo se ejecutará el if cuando la condición se cumpla */

/* let nombreUsuario = prompt("Escriba su nombre de usuario:");

if(nombreUsuario){
	alert("Hola " + nombreUsuario)
	console.log("se cumple la condición");
}else {
	alert("Hola");
	console.log ("No se cumple la condición");
}*/

//3. Hacer un programa que pida al usuario un número entero y muestre los valores desde cero hasta el número ingresado. 

/*
let numero = parseInt(prompt('Ingrese un número'));
for (let i= 0; i <= numero ; i++) {
	console.log('Vuelta #', i);
	document.write(i);
}
	*/

//4. Hacer un programa que solicite al usuario un texto, si el usuario no ingresa nada seguir solicitando hasta que lo haga.
/*
let nombreUsuario;

do {
  nombreUsuario = prompt("Ingrese su nombre de usuario:");
  if (nombreUsuario === null || nombreUsuario.trim() === "") {
	alert("¡Alerta! Por favor, ingrese su nombre de usuario (Obligatorio)");
  }
} while (nombreUsuario === null || nombreUsuario.trim() === "");

alert("¡Te doy la bienvenida, " + nombreUsuario + "!" + " Ten un excelente día");
console.log("¡Bienvenido/a,", nombreUsuario + "!");
*/

// 5. Hacer una página que muestre los días de la semana
/*
let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// console.log(diasSemana);
/*
console.log(diasSemana[0]);
console.log(diasSemana[1]);
console.log(diasSemana[2]);
console.log(diasSemana[3]);
console.log(diasSemana[4]);
console.log(diasSemana[5]);
console.log(diasSemana[6]);

diasSemana.forEach(
	(dia) => {
		console.log(dia);
	}
)
*/

//6. Hacer un programa que pida al usuario dos números, mostrar la suma y la resta del primer número y el segundo número.
/*
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

if (!isNaN(numero1) && !isNaN(numero2)) {
	let suma = numero1 + numero2;
	let resta = numero1 - numero2;
	alert("La suma es: " + suma);
	alert("La resta es: " + resta);

	console.log("La suma de los dos números es:", suma);
	console.log("La resta del primer número menos el segundo es:", resta);

} else {
	alert("Por favor, ingrese solo números.");
};
*/
//7. ESTE EJERCICIO SE ENCUENTRA EN EL DOCUMENTO: DOM.js. Gracias. 

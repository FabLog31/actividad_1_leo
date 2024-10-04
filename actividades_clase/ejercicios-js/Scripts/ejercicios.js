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

//4. 


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



function sumar() {
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);
	let resultado = num1 + num2;
	document.getElementById("resultado").value = resultado;
}

function restar() {
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);
	let resultado = num1 - num2;
	document.getElementById("resultado").value = resultado;
}

function multiplicar() {
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);
	let resultado = num1 * num2;
	document.getElementById("resultado").value = resultado;
}

function dividir() {
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);
	let resultado = num1 / num2;
	document.getElementById("resultado").value = resultado;
}
let nameInput = document.getElementById("nombre");
console.log(nameInput)

let saludoP = document.querySelector(".mostrarSaludo");
console.log(saludoP);



function saludarUsuario(){
    let name = nameInput.value;
    console.log(name)
let mensaje ="";
    if(name) {
        mensaje = "¡Hola " + name + "!";
        saludoP.textContent = mensaje;
    
    }else {
        mensaje = "¡Hola Desconocido!";
        saludoP.textContent = mensaje;
    }
}

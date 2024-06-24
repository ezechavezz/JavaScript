const user = { 
    id: 1,
    nombre: "Ezequiel",
};

user.edad = "18";
user.funcion = function (){
    console.log("Hola Mundo");
}
console.log(user);

user.funcion ();
delete user.nombre;

let persona = {
    nombre: "Juan",
    edad: 30
};

Object.freeze(persona);

persona.edad = 31;  // Intento de modificar una propiedad existente
console.log(persona.edad);  // 30

persona.ocupacion = "Desarrollador";  // Intento de agregar una nueva propiedad
console.log(persona.ocupacion);  // undefined

delete persona.nombre;  // Intento de eliminar una propiedad
console.log(persona.nombre);  // Juan


let coche = {
    marca: "Toyota",
    especificaciones: {
        color: "Rojo",
        motor: "2.0L"
    }
};

Object.freeze(coche);
coche.especificaciones.color = "Azul";  // Modifica la propiedad de un objeto interno
console.log(coche.especificaciones.color);  // Azul
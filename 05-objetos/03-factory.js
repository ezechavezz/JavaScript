function crearUsuario (name, email){  //el nombre tiene q estar en camelCase
    return {
        email,
        name, //poner solo name es igual a poner: name: name,
        estado: true,
        recuperCuenta: function () {
        console.log('Recuperando Cuenta...');
        }
    }
} 

let user1 = crearUsuario ("Roman","example@gmail.com");
let user2 = crearUsuario ("Martin","example1@gmail.com");

console.log(user1, user2);

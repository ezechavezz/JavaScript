function Usuario () {   //El nombre debera esta en UpperCamelCase
    this.id = 1;
    this.recuperarClave = function(){
        console.log("Recuperando Clave...");
    }
}

let usuario = new Usuario();

console.log(usuario);


function Usuario(nombre){
    this.nombre = nombre;
}
console.log(Usuario.nombre);
console.log(Usuario.length);

const U = Usuario
let user = new U('Guiliette');
console.log(user);

function of(Fn, arg){
    return Fn(arg);
}

console.log(of);

let user1 = of(Usuario,"Hola");
console.log(user1);
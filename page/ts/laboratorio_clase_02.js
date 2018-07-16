// Desarrollo Basico TS
var nombre = "Luis Angel";
var apellido = "Bardales Saucedo";
var edad = 22;
var texto = "Hola, el nombre es: " + nombre + " " + apellido + " y mi edad es " + edad + " , pero siempre digo la verdad que tengo " + (edad + 1);
console.log(texto);
// Funciones TS
function funcion(quien, bebida, lugar) {
    if (bebida === void 0) { bebida = "cerveza"; }
    var mensaje;
    if (lugar) {
        mensaje = quien + " esta tomando " + bebida + " en " + lugar;
    }
    else {
        mensaje = quien + " esta tomando " + bebida;
    }
    console.log(mensaje);
}
funcion("Homero Simpson", "cerveza", "la taberna de Moe");
// Funciones Flecha TS
var funcionflecha01N = function (x) {
    return x;
};
var funcionflecha01F = function (x) { return x; };
var funcionflecha02N = function (a, b) {
    return a + b;
};
var funcionflecha02F = function (a, b) { return a + b; };
var fncionflecha03N = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var funcionflecha03F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};

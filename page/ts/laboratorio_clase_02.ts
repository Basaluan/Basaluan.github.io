// Desarrollo Basico TS

let nombre:string="Luis Angel"
let apellido:string = "Bardales Saucedo"
let edad:number = 22

let texto = `Hola, el nombre es: ${nombre} ${apellido} y mi edad es ${edad} , pero siempre digo la verdad que tengo ${edad+1}`;
console.log(texto);

// Funciones TS

function funcion(quien:string, bebida:string = "cerveza", lugar?:string){
    let mensaje:string;
    if (lugar){
        mensaje = quien + " esta tomando " + bebida + " en " + lugar;
    } else{
        mensaje = quien + " esta tomando " + bebida;
    }

    console.log(mensaje);
}

funcion("Homero Simpson", "cerveza" ,"la taberna de Moe");


// Funciones Flecha TS

let funcionflecha01N = function(x:string){
    return x;
}

let funcionflecha01F = (x) => x;

let funcionflecha02N = function(a:number, b:number){
    return a + b;
}

let funcionflecha02F = (a:number, b:number) => a+b;

let fncionflecha03N = function(nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;
}

let funcionflecha03F = (nombre:string) => {    
    nombre = nombre.toUpperCase();
    return nombre;
}
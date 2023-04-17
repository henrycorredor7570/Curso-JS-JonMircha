export const PI = Math.PI;


export let usuario = "Henry";
export let password = "qwerty";


export default function saludar(){
    console.log("Hola Modulo +ES6");
    // por llevar la palabra default se exporta automaticamente sin necesidad de la palabra export
}
// solo se puede tener una exportacion por default si se crea una segunda funcion 
// con default marcara error

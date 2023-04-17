import saludar, {PI, usuario, password} from "./constantes.js";
import {sumar, restar, aritmetica} from "./aritmetica.js";// ya solo se puede exportar aritmetica no hay necesidad de las otras dos

console.log("Archivo de prueba modulos.js");

console.log(PI, usuario, password);

console.log(sumar(3, 5));
console.log(restar(11,7));

console.log(aritmetica.sumar(4,8));// aqui se encapsularon tanto sumar como restar en la variable aritmetica
console.log(aritmetica.restar(4,8));

saludar();//la funcion se importa automaticamente arriba por la palabra default
// solo se puede tener una exportacion por default
//ESTRUCTURAS DE CONTROL
/*Completar las condiciones de los if del siguiente 
script para que los mensajes delos alert() 
se muestren siempre de forma correcta
*/
/*
let numero1=5;
let numero2=8;
if (numero1<numero2) {
    alert
        ("numero1 no es mayor que numero2");
}
if (numero2>0)
{
    alert
        ("numero2 es positivo");
}
if (numero1<0 && numero1!='0')
{
    alert
        ("numero1 es negativo o distinto de cero");
}
if (numero1++<numero2 )
{
    alert
        ("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2")
        }

*/

//Realizar un programa que acepte valores hasta 
//que se introduzca el valor 0. El programa nos 
//mostrará
/*
function main() {
    // Inicialización de contadores y sumadores
    let numPares = 0;
    let numImpares = 0;
    let sumaPares = 0;
    let numPositivos = 0;
    let numNegativos = 0;
    let productoPositivos = 1;
    let totalValores = 0;

    while (true) {
        // Solicitar al usuario que ingrese un valor
        let input = prompt("Introduce un valor (0 para terminar):");

        // Convertir la entrada a número entero
        let valor = parseInt(input, 10);

        // Validar si la entrada es un número
        if (isNaN(valor)) {
            alert("Por favor, introduce un número entero válido.");
            continue;
        }

        // Salir del bucle si el valor ingresado es 0
        if (valor === 0) {
            break;
        }

        // Contar y sumar valores pares e impares
        if (valor % 2 === 0) {
            numPares++;
            sumaPares += valor;
        } else {
            numImpares++;
        }

        // Contar valores positivos y negativos
        if (valor > 0) {
            numPositivos++;
            productoPositivos *= valor;
        } else if (valor < 0) {
            numNegativos++;
        }

        // Contar el total de valores ingresados
        totalValores++;
    }

    // Mostrar los resultados
    alert(`\nCantidad de valores pares: ${numPares}\n` +
          `Cantidad de valores impares: ${numImpares}\n` +
          `Suma de los valores pares: ${sumaPares}\n` +
          `Cantidad de valores positivos: ${numPositivos}\n` +
          `Cantidad de valores negativos: ${numNegativos}\n` +
          `Producto de los valores positivos: ${productoPositivos}\n` +
          `Cantidad total de valores introducidos: ${totalValores}`);
}

// Llamar a la función principal para ejecutar el programa
main();
*/
/*
Realizar un programa que calcule el salario de un 
trabajador, para ello ped iremos el número de horas 
trabajadas y el precio de la hora. Si el trabajador 
trabajas más de 40 horas semanales, se considera 
que trabaja horas extras. Las horas extras se 
pagan a 1.5 veces la hora normal.
*/
/*
function calcularSalario(horasTrabajadas, precioHora) {
    const HORAS_REGULARES = 40;
    const TARIFA_EXTRA = 1.5;

    if (horasTrabajadas > HORAS_REGULARES) {
        const horasExtras = horasTrabajadas - HORAS_REGULARES;
        return (HORAS_REGULARES * precioHora) + (horasExtras * precioHora * TARIFA_EXTRA);
    } else {
        return horasTrabajadas * precioHora;
    }
}

// Solicitar datos al usuario
let horasTrabajadas = parseFloat(prompt("Introduce el número de horas trabajadas:"));
let precioHora = parseFloat(prompt("Introduce el precio por hora:"));

if (isNaN(horasTrabajadas) || isNaN(precioHora)) {
    alert("Por favor, introduce valores numéricos válidos.");
} else {
    let salario = calcularSalario(horasTrabajadas, precioHora);
    alert(El salario del trabajador es: $${salario.toFixed(2)});
}
*/
/*
function calcularSalario(horasTrabajadas, precioHora) {
    const HORAS_REGULARES = 40;
    const TARIFA_EXTRA = 1.5;

    if (horasTrabajadas > HORAS_REGULARES) {
        const horasExtras = horasTrabajadas - HORAS_REGULARES;
        return (HORAS_REGULARES * precioHora) + (horasExtras * precioHora * TARIFA_EXTRA);
    } else {
        return horasTrabajadas * precioHora;
    }
}

for (let i = 1; i <= 5; i++) {
    let nombre = prompt(Introduce el nombre del trabajador ${i}:);
    let direccion = prompt(Introduce la dirección del trabajador ${i}:);
    let horasTrabajadas = parseFloat(prompt(Introduce el número de horas trabajadas por ${nombre}:));
    let precioHora = parseFloat(prompt(Introduce el precio por hora para ${nombre}:));

    if (isNaN(horasTrabajadas) || isNaN(precioHora)) {
        alert("Por favor, introduce valores numéricos válidos.");
        i--; // Repetir el ciclo para el trabajador actual
        continue;
    }

    let salario = calcularSalario(horasTrabajadas, precioHora);
    console.log(Salario del trabajador ${nombre} (${direccion}): $${salario.toFixed(2)});
    document.write(<p>Salario del trabajador ${nombre} (${direccion}): $${salario.toFixed(2)}</p>);
}
*/











































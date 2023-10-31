// Paso 2: Definir variables y funciones
let totalSalarios = 0;
let totalEmpleados = 0;
let totalHorasExtras = 0;

function calcularSalario() {
    let salarioMensual = parseFloat(prompt("Ingrese el salario mensual:"));
    let bonificacion = parseFloat(prompt("Ingrese la bonificación:"));
    let horasExtras = parseFloat(prompt("Ingrese el número de horas extras realizadas:"));

    // Cálculo del IGSS
    let igss = salarioMensual * 0.048;

    // Cálculo del salario a recibir
    let salarioFinal = salarioMensual - igss + bonificacion;

    // Evaluación del boleto de ornato
    let arbitrio = 0;
    if (salarioFinal >= 500.01 && salarioFinal <= 1000) {
        arbitrio = 10;
    } else if (salarioFinal >= 1000.01 && salarioFinal <= 3000) {
        arbitrio = 15;
    } else if (salarioFinal >= 3000.01 && salarioFinal <= 6000) {
        arbitrio = 50;
    } else if (salarioFinal >= 6000.01 && salarioFinal <= 9000) {
        arbitrio = 75;
    } else if (salarioFinal >= 9000.01 && salarioFinal <= 12000) {
        arbitrio = 100;
    } else if (salarioFinal > 12000) {
        arbitrio = 150;
    }

    // Aplicar multa si hay horas extras
    if (horasExtras > 0) {
        arbitrio *= 2;
    }

    totalSalarios += salarioFinal;
    totalEmpleados++;
    totalHorasExtras += horasExtras;

    // Mostrar resultados
    let output = document.getElementById('output');
    output.innerHTML += `<p>Empleado ${totalEmpleados}: Salario a recibir: Q${salarioFinal.toFixed(2)}, Arbitrio: Q${arbitrio.toFixed(2)}</p>`;
}

// Paso 3: Pedir cantidad de empleados y calcular salarios
let numEmpleados = parseInt(prompt("Ingrese la cantidad de empleados:"));

for (let i = 0; i < numEmpleados; i++) {
    calcularSalario();
}

// Paso 4: Calcular promedio de salarios y mostrar resultado
let promedioSalarios = totalSalarios / totalEmpleados;
let promedioHorasExtras = totalHorasExtras / totalEmpleados;

let output = document.getElementById('output');
output.innerHTML += `<h2>Resumen</h2>`;
output.innerHTML += `<p>Total de empleados: ${totalEmpleados}</p>`;
output.innerHTML += `<p>Promedio de salarios: Q${promedioSalarios.toFixed(2)}</p>`;
output.innerHTML += `<p>Promedio de horas extras: ${promedioHorasExtras.toFixed(2)} horas</p>`;
 
const horasTrabalho = 150;
const valorHoras = 40.5;

function calSalario(hTrabalho, vhoras){
    
    const salario = hTrabalho * vhoras;

    return `Salario igual a R$ ${salario}`;
}

const result = calSalario(horasTrabalho, valorHoras);

console.log(result);
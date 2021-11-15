let readline = require('readline');
let valor;


let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite os valores a e b: ", function(answer){
   valor = answer.split(' ');
   console.log(valor);
   const arrayvalorInt = valor.map(Number)
   const result = Math.pow((arrayvalorInt[0] - arrayvalorInt[1]), 2);
   console.log(`Resultado: ${result}`)
   leitor.close();
})


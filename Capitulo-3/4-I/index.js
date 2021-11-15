let readline = require('readline');
let resp = " ";
let valor;

let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual módulo pra ler dados no nede.js?", function(answer){
    resp = answer;
   
    valor = parseInt(resp, 10);
    
    leitor.close();
    console.log(`Valor ao quadrado: ${valor*valor}`);
});


let readline = require('readline');
const contacaoDollar = 5.46;


let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question("Qual o valor em dollar US$: ", function(answer){
    const valoremUS = Number(answer);
    const valorEmBRL = valoremUS * contacaoDollar;
    console.log(`O valor em R$: ${valorEmBRL.toFixed(2)}`) ;
    read.close();
})

function repetir(valorAserep, quantidade)
{
    let result = [];
    for(let i = 1; i <= quantidade; i++){
        
        result.push(valorAserep);
    }

    return result;
}


console.log(repetir("código", 10))
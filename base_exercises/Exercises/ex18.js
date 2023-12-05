function despesasTotais(array){

    let totalValor = 0;

    for(let index in array)
    {
        totalValor += parseInt(array[index].preco);
    }

    console.log(totalValor);
}


despesasTotais([
    {nome: "Jornal online", categoria: "informação", preco: "10"},
    {nome: "Jornal online", categoria: "informação", preco: "10"}
])
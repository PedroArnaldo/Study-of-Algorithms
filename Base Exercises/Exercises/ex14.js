function objetoParaArray(objeto){
    // let array = [];
    // for(let valor in objeto)
    // {
    //     console.log(valor);
    //     array.push([valor, objeto.valor])
    // }

    // console.log(array);
    // console.log(objeto.nome)

    let array = Object.entries(objeto)
    
    console.log(array);

}


objetoParaArray({
    nome:"Pedro",
    profissao: "Desenvolvedor de software"
})
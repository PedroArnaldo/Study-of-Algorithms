function buscarPalavrasSemelhantes(palavra, arrayPalavras){
    
    let result = [];
    let letraInciais = [];

    for(let valor of arrayPalavras)
    {
        const arrayPalavra = valor.split('');

        for(let index in palavra)
        {
            letraInciais += arrayPalavra[index]   
        }
        
        if(palavra === letraInciais)
            result.push(valor)


        letraInciais = [];
        
    }


    return result;

}


console.log(buscarPalavrasSemelhantes('python', ['jacascript', 'java', 'c++', 'python3.1']))
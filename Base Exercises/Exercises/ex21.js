function menorNumero(array){
    let menor = array[0];

    for(let value of array){
        if(parseInt(value) < menor )
        {
            menor = parseInt(value);
        }
    }

    return menor;
}

console.log(menorNumero([5, -2 , -15, 50, 3]))
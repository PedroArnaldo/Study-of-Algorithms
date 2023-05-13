function somarNumeros(array)
{   
    let result = 0;

    for(valor of array)
    {
        result += valor;
    }
    
    return result;
}


console.log(somarNumeros([10,10 ,10]))
function inverso(valor){

    if((typeof valor) === 'boolean')
    {
        return !valor;
    }
    else if((typeof valor) === 'number' & valor !== 0)
    {
        return valor * -1;
    }
    else if((typeof valor) === 'number' & valor === 0)
    {
        return valor;
    }
    else
    {
        return `Booleano ou número esprados, mas o parâmetro é do tipo ${typeof valor}.`
    }

}


console.log(inverso(0));
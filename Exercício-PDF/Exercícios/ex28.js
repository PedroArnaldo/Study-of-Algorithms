



let filtrarPorQuantidadeDeDigitos = (arrayNum, num) => {
    
    arrayString = arrayNum.map((elem) => {
        return elem.toString();
    });
    

    let arrayResult = [];

    for(let value of arrayString)
    {
        if(value.length === num) 
            arrayResult.push(value);
    }

   
    return arrayResult.map(elem => Number(elem));
};


console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1));
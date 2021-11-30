function receberSomenteOsParesDeIndicesPare(array)
{
    let arrayResult = [];

    for(let index in array)
    {
        //console.log(index % 2, array[index] % 2);
    
            
        if(parseInt(index) % 2 === 0  && array[index] % 2 === 0)
        {
            console.log(array[index]);
        }
        
            
    }

    return arrayResult;
}


receberSomenteOsParesDeIndicesPare([10, 70, 22, 43, 2, 3])


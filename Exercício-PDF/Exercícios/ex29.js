function segundoMaior(array)
{
    let aux;
    let x;

    for(let i = 0; i <= array.length - 2; i++)
    {
    
        aux = i;


        for(let z = i + 1; z <= array.length - 1; z++)
        {
        
                if(array[z] < array[aux])
                {
                     aux = z;
                 }
        }

        x = array[aux];
        array[aux] = array[i];
        array[i] = x;

    }

    return array[array.length-2];
}



console.log(segundoMaior([12, 16, 1, 5]))
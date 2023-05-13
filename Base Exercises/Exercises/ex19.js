function calcularMedia(array){
    
    let media = 0;

    for(let valor of array)
    {
        media += parseInt(valor);
    }

    return media/array.length;
}

console.log(calcularMedia([0, 10]))
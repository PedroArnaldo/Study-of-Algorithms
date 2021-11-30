function checarAnoBissexto(ano){
    
    if((Number.isInteger(ano/4)) && !(Number.isInteger(ano/100)))
    {
        console.log(true);
    }
    else if((Number.isInteger(ano/400)) && (Number.isInteger(ano/100)))
    {
        console.log(true);
    }
    else{
        console.log(false)
    }

}

checarAnoBissexto(2100)
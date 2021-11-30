function estarEntre(num, minimo, maximo, inclusivo)
{
    if(inclusivo === true)
    {
        if (num === minimo || num === maximo) {
            return true
        }
    }
    else{
        return false
    }
}


console.log(estarEntre(16, 100, 50))
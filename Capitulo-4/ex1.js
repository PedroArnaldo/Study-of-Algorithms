const ladoA = 4;
const ladoB = 3;
const ladoC = 4;

const Istriangulo = (n1, n2, n3)=>{
    
    if((n1 < (n2 + n3)) && (n2 < (n1 + n3)) && (n3 < (n1 + n3)))
    {
        TipoTriangulo(n1, n2, n3);
    }
    
    return false;
}

const TipoTriangulo = (n1, n2, n3) => {

    if(n1 === n2 && n2 === n3){
        console.log("Triangulo Equilatero");
    }
    else if(n1 === n2 || n1 === n3 || n2 === n3)
    {
        console.log("Triangulo Isósceles");
    }
    else{
        console.log("Triangulo Escaleno");
    }
}

Istriangulo(ladoA, ladoB, ladoC);
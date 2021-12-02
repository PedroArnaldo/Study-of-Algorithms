function funcaoDaSorte(numUser){
    const numSorte = parseInt(Math.random() * 10);

    return numUser === numSorte ? `Parabéns! O núemro sorteador foi o ${numSorte}` : `Que pena! O número sorteado foi o ${numSorte}`;


}


console.log(funcaoDaSorte(2));
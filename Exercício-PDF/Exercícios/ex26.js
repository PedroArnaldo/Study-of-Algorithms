function removerVogais(palavra)
{
   let arrayLetras =  palavra.split('');
   let vogais = ['a', 'e', 'i', 'o', 'u'];
   for(let value of vogais){
    
       
        let IsVogal = arrayLetras.indexOf(value)

        if(IsVogal >= 0)
        {
            arrayLetras.splice(IsVogal, 1)
        }

    
   }
    return arrayLetras.join('')  
}


console.log(removerVogais('Fundamentos'));
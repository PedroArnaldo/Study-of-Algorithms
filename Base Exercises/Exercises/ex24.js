const char = "a";
const frase = 'meu nome é Pedro Arnaldo Madeira Lopes'

let a = frase.split('');

function contarCaractere(letra, arrayFrase){

    let count = 0;

    for(let value of arrayFrase)
    {   
        if(letra.toUpperCase() === value.toUpperCase())
        {
            count++;
        }
    }


    return count;
}


console.log(contarCaractere(char, a))
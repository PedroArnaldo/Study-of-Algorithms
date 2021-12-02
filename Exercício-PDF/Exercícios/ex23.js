
const contarPalavras = (frase) => {
    
    const arrayFrase = frase.split(' ');

    return arrayFrase.length;

}

console.log(contarPalavras('Meu nome é Pedro Arnaldo'));
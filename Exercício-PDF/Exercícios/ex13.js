function filtrarNumeros(array){
    
    let resul = []
    
    for(valor of array){

        if(typeof valor === "number"){
            resul.push(valor);
           
        }
    }
    return resul
}


let a = filtrarNumeros([1, "f", "f", "Web", 3])

console.log(a)


let a2 = [1, "f", 4, "Web", 3, "67"];

let a2Number = a2.filter((num) => {
    if(typeof(num) === "number")
        return num
})


console.log(a2Number)
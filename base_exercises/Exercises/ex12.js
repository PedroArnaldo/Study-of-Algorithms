const obj1 = {
    name: "Pedro",
    id: 0
}

function removerPropriedade(obj, prop){

    const objR = Object.assign({}, obj)

    delete objR[prop];

    return objR;
     
}


const obj2 = removerPropriedade(obj1, "id");

const isObject = Object.is(obj2, obj1)

console.log(obj1)
console.log(obj2)

console.log(isObject);
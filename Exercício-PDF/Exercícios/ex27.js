function inverter(obj){

    const obj2 = {}

    for(let [key, value] of Object.entries(obj))
    {
        obj2[parseInt(value)] = key
    }

    return obj2
};

console.log(inverter({a: 1, b: 2, c: 3}))
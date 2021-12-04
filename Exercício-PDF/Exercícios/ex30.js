let obj = {
    Joao: [8, 7.6, 8.9, 6],
    Maria: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}

let valor

for(let value in obj)
{
    let array = obj[value];
    // obj[value] = array.reduce((total, element) => {total + element})/array.length;
    console.log(array.reduce((total, element) => { return total + element})/array.length)

    obj[value] = array.reduce((total, element) => { return total + element})/array.length
  
}


valor = obj.Joao;
let name = " ";
for(let value in obj){
    
    if(valor < obj[value]){
        valor = obj[value];
        name = value.toString();
    }

}

console.log(`Nome: ${name}, nota: ${valor}`)
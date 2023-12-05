const valor1 = 4;
const valor2 = 3;

function maiorOuIgual(num1, num2)
{
    if((num1 >= num2) && ((typeof num1) === 'number') && ((typeof num2) === 'number'))
    {
        return true;
    }
    else{
        return false
    }

}


console.log(maiorOuIgual(0, 0))
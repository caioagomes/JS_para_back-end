//simportante
// => arrow function
// >= maior igual que

//antes
let x= 1;
let y= 1;
function apresentar (nome){
    return `meu nome é ${nome}`
}

//Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//Arrow funcion com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "somente numeros de 1 a 9"
    } else {
        return num1 + num2;

    }
    
}

let z = somaNumerosPequenos(x,y);

console.log (z)

//Hoisting :arrow function se comporta como expressãp
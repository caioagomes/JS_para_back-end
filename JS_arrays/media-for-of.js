const notas =[10, 6.5, 8, 7.5];

let somaDasNotas=0;

//esse for é diferente do outro pois a gente coloca apenas uma expressão

//   Para elemento de notas: execute a função:
for (let nota of notas){
    somaDasNotas+=nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é: ${media}`);
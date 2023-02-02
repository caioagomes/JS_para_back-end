const notas =[10, 6.5, 8, 7.5];
let somaDasNotas=0;

notas.forEach(function(nota, indice, array){
    somaDasNotas+=nota;
    console.log(indice);
    console.log(array);
})

const media = somaDasNotas / notas.length;

console.log(`A média das notas é: ${media}`);
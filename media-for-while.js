const notas =[10, 6.5, 8, 7.5];

//for
let somaDasNotas = 0;
for ( let i = 0; i < notas.length; i++){
   somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é: ${media}`);

//while
i=0
let somaDasNotas1=0;
while (i<notas.length){
    somaDasNotas1 += notas[i];
    i++;
}

const media1 = somaDasNotas1 / notas.length;

console.log(`A média das notas é: ${media1}`);

//media com matriz

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media2= 0;

for (let i=0;i<notasGerais.length; i++){
    for (let j=0; j<notasGerais[i].length; j++){
       media2 += notasGerais[i][j] / notasGerais[i].length;
    }
}

media2=media2/ notasGerais.length;


console.log(media2);


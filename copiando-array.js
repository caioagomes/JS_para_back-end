const notas = [7, 7, 8, 9];



//forma incorreta, muda o original
// ele "referencia" o array antigo com o novo, por isso, qualquer alteração que 
//fizer de qualquer lado da atribuição, as duas arrays são modificadas
const novasNotas = notas;

novasNotas.push(10);

console.log (`As novas notas são ${novasNotas}`);
console.log (`As novas originais são ${notas}`);


//forma correta, sem modificar o array original
const notas1 = [7, 7, 8, 9];
//                  operador de espalhamento, esse operador copia cada 
//                  um dos valores para o array atribuido, nesse caso, novasNotas1
//                  ou sejam caso eu queira colocar um numero antes, eu consigo,
//                  e um numero depois também, como é o caso
const novasNotas1= [...notas1, 10];

//novasNotas1.push(10);

console.log (`As novas notas são ${novasNotas1}`);
console.log (`As novas originais são ${notas1}`);

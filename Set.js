const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
// os elementos de um Set não podem se repetir
const meuSet = new Set(nomes);
//                       esse operador, vai copiar elemento por elemento, para 
//                       a nova "variavel", independente se for um Set ou um Array
//                       Por isso vai funcionar da mesma forma, e vai criar um novo
//                       array
//                       Spread operator
const nomesAtualizados = [...meuSet];

console.log (nomesAtualizados);


//OU de  uma forma mais sucinta

const nomes1 = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//const meuSet1 = new Set(nomes1); está sendo utilizado dentro da função
                           //espalho eles para um novo array
const nomesAtualizados1 = [...new Set(nomes1)];

console.log (nomesAtualizados);

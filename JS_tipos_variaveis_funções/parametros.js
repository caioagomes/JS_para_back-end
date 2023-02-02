//sem parametros
function soma1(){
    return 2 + 2;
}

console.log (soma1());

// com parametros
let numero1=526668;
let numero2=53;
function soma(numero1,numero2){
    return numero1 + numero2;
}

console.log (soma(numero1,numero2));

//ordem dos parametros
let nome='caio';
let idade=26;
function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(nome, idade))



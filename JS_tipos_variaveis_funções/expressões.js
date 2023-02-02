//normal

function minhaFuncao(param){
    //bloco do codigo
}

minhaFuncao('param');


//expressão de função

// const soma= function  (num1,num2){return num1 + num2}
//console.log (soma(1,9))


/*
é importante colocar a segunda como const, pois a variavel 
não vai poder mudar futuramente
*/


//difernça principal
//consigo chamar a função em qualquer ponto do programa
console.log (apresentar());

function apresentar(){
    return "olá";
}

//se comporta como uma variavel, por isso, só consigo chamar
//após a declaração
console.log (soma(1,3))
const soma= function  (num1,num2){return num1 + num2}
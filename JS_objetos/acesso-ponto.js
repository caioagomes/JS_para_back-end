const cliente = {
    nome: "Andre",
    idade: 32,
    CPF: '45645645678',
    email: "andre@dominio.com",
};
//          consigo utilizar cada parte do objeto separadamente: exemplo, nome e idade
console.log(`O nome do cliente é: ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.CPF.substring(0, 3)}`)
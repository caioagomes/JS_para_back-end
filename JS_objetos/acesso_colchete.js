// a diferença do ponto para colchete : com colchete, é possivel vizualiar as propriedades
// sem ter acesso a elas previamente


const cliente = {
    nome: "Andre",
    idade: 32,
    CPF: '45645645678',
    email: "andre@dominio.com",
};
//          consigo utilizar cada parte do objeto separadamente: exemplo, nome e idade
console.log(`O nome do cliente é: ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`);

//exemplo do primeiro comentario

const chaves =["nome", "idade", "cpf", "email", "altura"]

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});


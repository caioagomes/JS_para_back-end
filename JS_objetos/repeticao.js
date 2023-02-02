const cliente ={
    nome: "João",
    idade:24,
    email: "joao@dominio.xom",
    telefone:["(31)997652738", "(31)987766252"],
};


cliente.enderecos = [{
    rua: "R. Santo lenho",
    numero: "250",
    bairro: "Alvorada",
    apartamento: true,
    complemento: "ap 201",
}]
//dessa forma o relatorio, não imprime um objeto criado posteriormente, apenas
//aparece que é um objeto
for (let chave in cliente){
    console.log(`A chave ${chave}, tem o valor ${cliente[chave]}`);
}

// utilizando um tratamnto especial, traz apenas o que for simples
// não vai imprimir objetos ou funções
for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !=='object' && tipo !== 'function'){
    console.log(`A chave ${chave}, tem; o valor ${cliente[chave]}`);
}}


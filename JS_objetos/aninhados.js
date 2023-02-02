const cliente ={
    nome: "João",
    idade:24,
    email: "joao@dominio.xom",
    telefone:["(31)997652738", "(31)987766252"],
};


cliente.endereco ={
    rua: "R. Santo lenho",
    numero: "250",
    bairro: "Alvorada",
    apartamento: true,
    complemento: "ap 201",
}

console.log(cliente.endereco.bairro);


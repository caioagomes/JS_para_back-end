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

cliente.enderecos.push({
    rua: "R. Paris",
    numero: "584",
    bairro: "Europa",
    apartamento: false,
    complemento: "",
})
//filtro para atribuir a nova lista, apenas os enderecos que são apartamentos
const listaApenasApartamentos = cliente.enderecos.filter (
    (endereco) => endereco.apartamento ===true
)

//console.log(cliente.enderecos[0].numero);

console.log(listaApenasApartamentos)
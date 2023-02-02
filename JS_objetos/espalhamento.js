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


function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente (cliente.telefone[0], cliente.telefone[1]);

//utilizando sintaxe de espelhamento

ligaParaCliente (...cliente.telefone);


// espalhamento com objetos

const encomenda={
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda)
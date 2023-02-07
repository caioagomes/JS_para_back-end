const dados = require("./cliente.json");

console.log(dados);
console.log (typeof dados);
//"stringficar o objeto"
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

//TRADUZIR / ADEQUAR/ DESSTRINGFICAR 
const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);
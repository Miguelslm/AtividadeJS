let pessoa = {
    nome: "miguel",
    idade: 27,
    cidade: "São Paulo"
};

function infopessoa(pessoa) {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`;
}

let informacoes = infopessoa(pessoa);
console.log(informacoes);

pessoa.idade = 30;

let infoAttpessoa = infopessoa(pessoa);
console.log(infoAttpessoa);
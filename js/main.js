
function coletarNomesDeClientes() {
    const nomes = [];
    let continuar = true;

    while (continuar) {
        const nome = prompt("Insira o nome do cliente:");
        if (nome) {
            nomes.push(nome);
        }

        continuar = confirm("Deseja inserir mais nomes?");
    }

    if (nomes.length > 0) {
        alert("Nomes dos clientes:");
        nomes.forEach((nome, index) => {
            alert(`${index + 1}. ${nome}`);
        });
    } else {
        alert(`Nenhum nome de cliente foi inserido.`);
    }
}

coletarNomesDeClientes();

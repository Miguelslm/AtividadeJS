let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosPares = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        numerosPares.push(numeros[i]);
    }
}

console.log(`Números pares é: ${numerosPares}`);

let idade 

do {
    idade = parent(prompt('insira sua idade:'))
} while (isNaN(idade) || idade <= 0)

alert(`Idade invalida ${idade}`);



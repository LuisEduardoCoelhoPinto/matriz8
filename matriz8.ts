const matriz = [];
let maior = -1;
let posicao = [0, 0];

console.log("Matriz 3x3:");
for (let i = 0; i < 3; i++) {
    let linha = "";
    for (let j = 0; j < 3; j++) {
        const valor = Math.floor(Math.random() * 21); // 0 a 20
        linha += valor + "\t";

        if (valor > maior) {
            maior = valor;
            posicao = [i, j];
        }
    }
    console.log(linha);
}

console.log(`\nMaior elemento: ${maior}`);
console.log(`Posição: linha ${posicao[0]}, coluna ${posicao[1]}`);
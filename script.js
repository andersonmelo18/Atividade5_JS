// Exercício 1: Crescimento Populacional
function exercicio1() {
    let populacaoA = 80000;
    let taxaA = 0.03;
    let populacaoB = 200000;
    let taxaB = 0.015;
    let anos = 0;
    while (populacaoA <= populacaoB) {
        populacaoA *= (1 + taxaA);
        populacaoB *= (1 + taxaB);
        anos++;
    }
    console.log(`Serão necessários ${anos} anos para que a população de A (${Math.round(populacaoA)}) ultrapasse ou iguale a de B (${Math.round(populacaoB)}).`);
    alert(`Serão necessários ${anos} anos.`);
}

// Exercício 2: Pares e Ímpares
function exercicio2() {
    let pares = 0;
    let impares = 0;
    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt(`Digite o ${i}º número inteiro:`));
        if (isNaN(numero)) {
            numero = 0;
        }
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    console.log(`Quantidade de números pares: ${pares}`);
    console.log(`Quantidade de números ímpares: ${impares}`);
    alert(`Pares: ${pares}\nÍmpares: ${impares}`);
}

// Exercício 3: Menor, Maior e Soma
function exercicio3() {
    let N = parseInt(prompt('Digite o valor de N (quantidade de números):'));
    if (isNaN(N) || N <= 0) {
        N = 5;
        console.log('N inválido, usando 5 como padrão.');
    }
    let numeros = [];
    let soma = 0;
    for (let i = 0; i < N; i++) {
        let num = parseFloat(prompt(`Digite o ${i + 1}º número:`));
        if (isNaN(num)) {
            num = 0;
        }
        numeros.push(num);
        soma += num;
    }
    let menor = Math.min(...numeros);
    let maior = Math.max(...numeros);
    console.log(`Menor valor: ${menor}`);
    console.log(`Maior valor: ${maior}`);
    console.log(`Soma dos valores: ${soma}`);
    alert(`Menor: ${menor}\nMaior: ${maior}\nSoma: ${soma}`);
}

// Exercício 4 - Versão 1: Salário Fixo Inicial
function exercicio4v1() {
    let anoContratacao = 1995;
    let salarioInicial = 1000;
    let salarioAtual = salarioInicial;
    let percentualAnterior = 0.15;
    for (let ano = 1996; ano <= 2023; ano++) {
        let aumento = salarioAtual * percentualAnterior;
        salarioAtual += aumento;
        if (ano >= 1997) {
            percentualAnterior *= 2;
        }
    }
    console.log(`Salário atual (2023): R$ ${salarioAtual.toFixed(2)}`);
    alert(`Salário atual: R$ ${salarioAtual.toFixed(2)}`);
}

// Exercício 4 - Versão 2: Salário Inicial via Prompt
function exercicio4v2() {
    let anoContratacao = 1995;
    let salarioInicial = parseFloat(prompt('Digite o salário inicial (ex: 1000):'));
    if (isNaN(salarioInicial) || salarioInicial <= 0) {
        salarioInicial = 1000;
        console.log('Salário inválido, usando R$ 1.000 como padrão.');
    }
    let salarioAtual = salarioInicial;
    let percentualAnterior = 0.15;
    for (let ano = 1996; ano <= 2023; ano++) {
        let aumento = salarioAtual * percentualAnterior;
        salarioAtual += aumento;
        if (ano >= 1997) {
            percentualAnterior *= 2;
        }
    }
    console.log(`Salário atual (2023): R$ ${salarioAtual.toFixed(2)}`);
    alert(`Salário atual: R$ ${salarioAtual.toFixed(2)}`);
}

// Exercício 5: Área e Perímetro do Círculo
function exercicio5() {
    let raio = parseFloat(prompt('Digite o raio do círculo:'));
    if (isNaN(raio) || raio <= 0) {
        raio = 1;
        console.log('Raio inválido, usando 1 como padrão.');
    }
    const pi = Math.PI;
    let area = pi * raio * raio;
    let perimetro = 2 * pi * raio;
    console.log(`Área: ${area.toFixed(2)}`);
    console.log(`Perímetro: ${perimetro.toFixed(2)}`);
    alert(`Área: ${area.toFixed(2)}\nPerímetro: ${perimetro.toFixed(2)}`);
}

// Exercício 6: Montante de Investimento
function exercicio6() {
    let capital = parseFloat(prompt('Digite o capital inicial (C):'));
    let taxa = parseFloat(prompt('Digite a taxa de juros mensal (i, em decimal, ex: 0.05 para 5%):')) / 100;
    let tempo = parseInt(prompt('Digite o tempo em meses (t):'));
    if (isNaN(capital) || capital <= 0 || isNaN(taxa) || taxa < 0 || isNaN(tempo) || tempo <= 0) {
        console.log('Valores inválidos, usando padrões: C=1000, i=0.05, t=12');
        capital = 1000;
        taxa = 0.05;
        tempo = 12;
    }
    let montante = capital * Math.pow((1 + taxa), tempo);
    console.log(`Montante final: R$ ${montante.toFixed(2)}`);
    alert(`Montante: R$ ${montante.toFixed(2)}`);
}
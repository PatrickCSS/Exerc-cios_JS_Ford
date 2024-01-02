//1* Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes lidos em um vetor.
//2*  Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa (para efetuar uma busca).
//3* depois escrever a mensagem ACHEI, se o nome estiver entre os 10 nomes lidos anteriormente (guardados no vetor).
//4* Exibir não acheo caso contrário
let nomes = []

for (let i = 0; i < 10; i++) {
    let nome = prompt("Atribua um nome" + i + ":");
    nomes.push(nome);
}

let searchName = prompt (Digite o nome para busca);

if (searchName (nomes.includes(searchName)) {
    console.log("Encontrado");
}
    else { 
    console.log("Não encontrado");
}

//A *let* palavra-chave foi introduzida no ES6 (2015) - https://www.w3schools.com/js/js_let.asp
//A *for* ou loop é uma instrução define um bloco de código que é executado enquanto uma condição for true.(verdadeiro) - https://www.w3schools.com/jsref/jsref_for.asp
//O *prompt* ()método exibe uma caixa de diálogo que solicita entrada do usuário. - https://www.w3schools.com/jsref/met_win_prompt.asp
//O *log*()método grava (registra) uma mensagem no console. - https://www.w3schools.com/jsref/met_console_log.asp
//Use *if* para especificar um bloco de código a ser executado, se uma condição especificada for verdadeira. - https://www.w3schools.com/js/js_if_else.asp.
//Use *else* para especificar um bloco de código a ser executado, se a mesma condição for falsa. - https://www.w3schools.com/js/js_if_else.asp.
//Use *else if* para especificar uma nova condição a ser testada, se a primeira condição for falsa ou seja um if dentro de um if. https://www.w3schools.com/js/js_if_else.asp.
//Use *switch* para especificar muitos blocos alternativos de código a serem executados. - https://www.w3schools.com/js/js_if_else.asp.
//Em java, a declaração do *switch* é utilizada para realizar seleções múltiplas com base no valor de uma expressão. Um if em cadeia ou sequencial https://www.w3schools.com/js/js_switch.asp
 
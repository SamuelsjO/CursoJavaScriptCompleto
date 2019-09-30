var nome = "Samuel";
var ano_nasc = 1989;
var ano_atual = 2019;
var idade = ano_atual - ano_nasc;
var nota1 = 10;
var nota2 = 3;
var ra = 1510003181;
var telefone = "997263735";
var description = "Estou estudando javascritp";
var media = (nota1 + nota2) / 2;
var pontecia = Math.pow(32,6);

console.log('________________________________________________________________________');
console.log('Ola, eu me chamo ' + nome + ' tenho ' + idade + ' anos ' + description);

console.log('O aluno ' + nome + ' matricula ' + ra + ' obteve a media final ' + media);

var telefone = "997263735";

console.log('Telefone é igual = ' + (telefone.length == 9));


console.log('________________________________________________________________________');

console.log('Resultado da operaçao: ' + pontecia);

console.log('var typeof = palavra reservado, var nome completo = variavel nao pode ter espaço');

var quantidade = "25";
    var numero = 6;
    var pressao;
    var temperatura = 40;
    temperatura = null;

    console.log('________________________________________________________________________');

    console.log(quantidade += quantidade + ' 2525');
    console.log( (7+5) / numero + 2 + ' 4'); 
    console.log(pressao + ' undefined');
    console.log(temperatura + ' null');
    console.log(typeof pressao + ' undefined');
    console.log(typeof temperatura + ' object');

    console.log('________________________________________________________________________');

    console.log(idade != 65);
    console.log(idade >= 65); 
    console.log("65" == idade);
    console.log(65 !== idade);
    console.log(typeof (idade > 60));
    console.log(typeof (idade > 70));

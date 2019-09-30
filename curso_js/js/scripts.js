
//var latitude = 40.87663;
//var longitude = -8.08373;

//console.log(latitude);
//console.log(longitude);

/*var nome = "João";  // podem ser usadas aspas duplas
var sobrenome = 'Gomes';  // ou aspas simples
var cpf = '111.111.111-11';  
var telefone = "998887655";
var ddd = '21';
var email = 'joao@gmail.com';
var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";

console.log(nome + ' ' + sobrenome);
console.log('(' + ddd + ')' + telefone);

console.log(nome.length);
console.log(nome[0]);

var nome_completo = nome + ' ' + sobrenome;
console.log(nome_completo);

var ano_nascimento = 1986;
console.log(ano_nascimento);

var preco = 16.987;
console.log(preco);

var temperatura = -5;
console.log(temperatura);

var numero_grande = 2.2e45;
console.log(numero_grande);

var num1 = 20;
var num2 = 3;

var soma = num1 + num2;
console.log('Soma: ' + soma);

var subtracao = num1 - num2;
console.log('Subtraçao: ' + subtracao);

var divisao = num1 / num2;
console.log('Divisao: ' + divisao);

var multiplicacao = num1 * num2;
console.log('Multiplicaçao: ' + multiplicacao);

var media = (num1 + num2) / 2;
console.log('Media: ' + media);

var potencia = Math.pow(2,4);
console.log('Pontecia: ' + potencia);

var arredonda = Math.round(2.7);
console.log('Arredonda: ' + arredonda);

var arredonda_cima = Math.floor(4.6);
console.log('Arredonda pra baixo: ' + arredonda);

var arredonda_baixo = Math.ceil(4.3);
console.log('Arredonda pra cima: ' + arredonda_baixo)

var raiz = Math.sqrt(36);
console.log('Raiz quadrada: ' + raiz);

var ddd = 21;
var telefone = 998887655;

var ddd_string = ddd.toString();
var tel_string = telefone.toString();

var telefone_completo = '(' + ddd_string + ')' + tel_string;

console.log('Telefone completo converter: ' + telefone_completo);

var idade = '17';
var idade_num = parseInt(idade);
idade_num++;

console.log(idade_num);

increment = 20;
increment++;
console.log('Numero incremetado: ' + increment); // O console mostrará 11

increment = 20;
increment--;
console.log('Numero decremetado: ' + increment); // O console mostrará 19

var nome = "João";
nome += " ";
nome += "Gomes";

console.log('Nome incremetado: ' + nome); // O console mostrará "João Gomes"

var idade = 65;
var test = idade !== 65;

console.log(test);

var teste1 = 20 > 2; // true
console.log(test);

var teste2 = 2 >= 2; // true
console.log(teste2);

var teste3 = 5 < 5; // false
console.log(teste3);

var teste4 = 5 <= 10; // true
console.log(teste4);

var teste5 = 20 == 20; // true
console.log(teste5);

var teste6 = 'ivan' == 'joão' // false
console.log(teste6);

var teste7 = 20 === "20"; // false - valor é igual mas o tipo não. O primeiro é número, o segundo é string.
console.log(teste7);

var teste8 = 20 != 10; // true
console.log(teste8);

var teste9 = 10 != 10; // false
console.log(teste9);

var teste10 = "10" !== 10; // true - o tipo não é igual
console.log(teste10);

var teste11 = "9" !== 10; // false - o tipo nem o valor são iguais.
console.log(teste11);

var vtype = "65";

console.log(typeof vtype == "number");

//Aula Tipos de dados Null e undefined

var undf;
console.log(typeof undf);

var nome = "Pedro";
console.log(nome[5]);

var temperatura = 35;
console.log(temperatura);

temperatura = null;
console.log(temperatura);

console.log(typeof temperatura);*/

/** Aula 10 -  Trabalhando com o DOM 

var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;

console.log(conteudo_caixa);

document.getElementById("caixa_amarela").innerHTML = conteudo_caixa;


document.getElementById("caixa_amarela").innerHTML = '<h1>' + 'Caixa amarela' + '</h1>'

document.getElementById("caixa_azul").innerHTML = '<h1>' + conteudo_caixa + '</h1>' 

//AUla 11 - Funcoes

function soma_numeros(){
    var x = 5;
    var y = 2;
    var soma = x + y;

    console.log("A soma é: " + soma);
}

soma_numeros();


function soma_args(num1,num2){
    var soma = num1 + num2;

    return soma;
}

console.log("Resultada da soma: " + soma_args(238,25))
var soma_f = soma_args(238,25);




/*var n1 = 50;
var n2 = 30;

soma_args(n1,n2)
soma_args(238,25)
soma_args(18,23335)*/

/**Calculo IMC 

function valor_imc(peso,altura){
    var imc = peso / (altura * altura);
    return imc;
}
 

var meu_peso = parseFloat(document.getElementById("peso").innerHTML);
var minha_altura = parseFloat(document.getElementById("altura").innerHTML);

var meu_imc = valor_imc(meu_peso,minha_altura);

if(imc >= 21){
    var saudeAler = alert("Peso demais");
    
}if (imc < 21) {
    var saudeAler = alert("Peso demais asdfasdfasdfasdf");
  
}

document.getElementById("imc").innerHTML = meu_imc.toFixed(2);

*/

/*Aula 12 - Arrays

var alunos = ["Joao" , "Maria", "José"];
var num_primos = [2,3,5,7,11,12];

console.log(alunos.length);
console.log(num_primos[2]);


var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
];

console.log(grupos.length);
console.log(grupos[1][1]);

var cursos = [ "HTML", "Python", "PHP" ];

    cursos.push("Javascript");

    console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]

    cursos.unshift("Bootstrap");

    console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]

    cursos.pop();

    console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]

    cursos.shift();

    console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP" ]


    var ingredientes = [ "pão branco", "queijo", "presunto" ];

    ingredientes[0] = "pão integral";

    console.log(ingredientes);  // O console mostrará [ "pão integral", "queijo", "presunto" ]



var alunos = [ "João" , "Maria", "José", "Fernanda", "Pedro", "Elisa" ];
    console.log( alunos.slice(-2));

    // O console mostrará [ "João" , "Maria", "José" ]

    var funcionario = {
        'nome': 'Pedro Souza Gomes',
        'ano_nasc': 1972,
        'cpf': '111.111.111.11',
        'cargo': 'Analista de Sistemas'
    };

    console.log(funcionario.ano_nasc);
    console.log(funcionario['nome'])

    funcionario.cargo = "Gerente de TI";
    funcionario.cnh = "121212121212121";

    console.log(funcionario);

    /**----------------------------------------- 

    var cursos = [
        {
            'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
            'avaliacoes': 680,
            'alunos': 2300,
            'categorias': ['programacao', 'tecnologia']
        },

        {
            'titulo': 'Aprenda PHP e faça sites dinâmicos',
            'avaliacoes': 180,
            'alunos': 350,
            'categorias': ['desenvolvimento web', 'programacao']
        },

        {
            'titulo': 'Excel do Zero ao Avançado',
            'avaliacoes': 420,
            'alunos': 1800,
            'categorias': ['produtividade', 'gestão']
        }
        
    ];

    console.log(cursos[1].categorias[0]);
    cursos[2].categorias[1] = "TI";

    console.log(cursos);

    Metodos do objetos 


var aluno = {
    'nome': 'Maria',
    'sobrenome': 'Pereira',
    'ano_nasc': 1992,
    'nome_completo': function (){
        var n_completo = this.nome + " " + this.sobrenome;
        return n_completo;
    }, 
    'idade_aluno': function(){
        var idade_in = 2019 - this.ano_nasc;
        return idade_in;
    }
};

var returnFuction = aluno.nome_completo();
console.log(returnFuction);

var idadeReturn = aluno.idade_aluno();
console.log(returnFuction + ' tem idade de: ' + idadeReturn);

*/

/**Aula 16 - Eventos 

document.getElementById("click-me").onclick = function (){
    alert("Voçe clicou no botao");
};

document.getElementById("hover-me").onmouseover = function (){
    alert("Voçe Passou com o mouse no botao");
};

document.getElementById("leave-me").onmouseout = function (){
    alert("Voçe saiu como cursor no botao");
};

document.onkeydown = function (){
    alert("Voçe apertou alguma tecla:");
};

document.onkeydown = function (){
    alert('Voçe apertou alguma tecla: ' + event.keyCode);
    if(event.keyCode == 65){
        alert("letra A")
    }else{
        alert("Letra errada, essa não é a A")
    }
}


function button_clicked(){
    alert("voçce clicou no botao");
}


Aula 17 - CSS

var botao = document.getElementById("botao_cor");

botao.onclick = function(){
    botao.style['background-color'] = "purple";
    botao.style.transform = "translateX(100px)";
}*/

/**Aula 18 - Outros métodos getElement 




var exemplo = document.getElementsByClassName("exemplo");

exemplo[0].innerHTML = "teste1";



var exemplo = document.getElementsByTagName("p");

console.log(exemplo);
*/

/**LOOPS FOR 
for(var a = 0; a < 5; a++){
    console.log(a);
}

var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

for(var a = 0; a < alunos.length; a++){
    console.log(alunos[a]);
}

var carro = {
    'Ano': 2018,
    'Modelo': 'Fox',
    'Cilindradas': '1.8',
    'Combustível': 'Gasolina'

}

for(var prop in carro){
    console.log(prop + ': ' + carro[prop]);

}

var elementos = document.getElementsByTagName("p");

for(var c = 0; c < elementos.length; c++){
    elementos[c].style.color = "orange";
    elementos[c].style['font-weight'] = "bold";
}

*/

/**Aula 19 - Loops While e do/While

var count = 0;

while(count < 5){
    console.log(count);
    count++;
}


var elementos = document.getElementsByTagName("p");
var countElemento = 0;

while(countElemento < elementos.length){

    elementos[countElemento].style.color = "orange";
    elementos[countElemento].style['font-weight'] = "bold";

    countElemento++;

}



var countDo = 10;

do {

    console.log(countDo);
    countDo++;

}while(countDo < 5);*/

/**Aula 20 - Condicionais 

var idade = 18;

if(idade < 18){
    console.log("Menor de idade");
}else if(idade == 18){
    console.log("Tem 18 anos");
}else {
    console.log("Maior de idade");
}


var nota = 8;
var faltas = 1;

if(nota >= 7 && faltas <=4){
    console.log("Aprovado");
} else {
    console.log("Reprovado")
}

if(nota < 7 || faltas >4){
    console.log("Reprovado");
} else {
    console.log("Aprovado")
}

var nome = "Samuel";

if(nome){
    console.log("Nome: " + nome);
}else{
    console.log("Nome nao informado")
}*/

/**Aula 21 - Aninhamentos de loops e condicionais

var socio = true;
var idade = 25;

if(socio || idade >= 65){
    console.log("Ingresso gratis");
}else{

    if(idade < 18 ){
        console.log("Preço a pagar: RS 6,00");
    }else {
        console.log("Preço a pagar: RS 12,00");
    }
  
}

var funcionarios = [
        
    {
        'nome': 'Carlos Henrique da Silva',
        'idade': 45,
        'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
        
    },

    {
        'nome': 'Maria Helena Pereira',
        'idade': 32,
        'filhos': ['João Pedro Pereira de Souza']
        
    },

    {
        'nome': 'José Feliciano Maia',
        'idade': 39,
        'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
        
    }

];


var list_elements = document.getElementById("filhos");

list_elements.innerHTML = " ";

for(var a = 0; a < funcionarios.length; a++){

    if(funcionarios[a].filhos){

        var lista_filhos = funcionarios[a].filhos;

        for(var b = 0; b < lista_filhos.length; b++){
            list_elements.innerHTML += '<li>' + lista_filhos[b] + ' - Filho de ' + funcionarios[a].nome;
        }
    } 
}



window.onmousemove = function (e){

  if(e.pageY < 5){
    alert('Não perca o CURSO JAVASCRIPT');
  }
};

window.localStorage.setItem("nome", "Joao");

var botao = document.getElementById("enviar-nome");

    botao.onclick = function (){

    //guarda o nome digitado em local storage
    var nome = document.getElementById("nome-usuario").value;
    localStorage.setItem("nome", nome);

    //esconder o formulario
    document.getElementById("name-field").style.display = "none";

    //atualiza e mostrar mensagem de boas vindas
    document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
    document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
    document.getElementById("welcome-area").style.display = "intial";
};

if(localStorage.nome){
    //esconde formulario
    document.getElementById("name-field").style.display = "none";

      
    //atualiza e mostrar mensagem de boas vindas
    document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
    document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
    document.getElementById("welcome-area").style.display = "intial";
}

document.getElementById("not-me").onclick = function (){

    localStorage.removeItem("nome");
    
    //atualiza e mostrar mensagem de boas vindas
    document.getElementById("welcome-area").style.display = "none";

    document.getElementById("name-field").style.display = "initial";
}

console.log(document.getElementById("enviar-nome"))
*/

//Aula 26 - data e hora
/*
var data_hoje = new Date();


console.log(data_hoje.getDate());

var data_nasc = "1989-02-10";

var ano_nasc = new Date("1989-02-10").getFullYear();

var ano_atual = new Date().getFullYear();

var idade = ano_atual - ano_nasc;

console.log(idade);


var data = new Date();

data = data.getTime();

var anos = data / 1569374407273;

console.log(Math.floor(anos));


var data_envio = new Date("2019-09-24");
data_envio = data_envio.getTime();

var data_entrega = new Date("2019-10-07");
data_entrega.getTime();

var dias = (data_entrega - data_envio) / 86400000;

console.log(dias);

document.getElementById("dias_entrega").innerHTML = dias + " dias de tempo de entrega";

if(dias > 12){
   var result = "Entrega fora do prazo, prazo superior a 12 dias"; 
}else{
    var result = "Entregua dentro do prazo";
}

document.getElementById("obs_entrega").innerHTML = result;

//Aula 27 - Metodos de Tempo

console.log('Mensagem 1');

window.setTimeout(function(){ console.log('Mensagem 2');
}, 3000)


document.getElementById("mostrar-loader").onclick = function (){

    document.getElementById("spinner-loader").style.display = "initial";

    window.setTimeout(function(){
        document.getElementById("mostrar-loader").style.display = "none";
    }, 5000);
};


var count = 0;

var inter = window.setInterval(function(){
    console.log(count);
    count++;
    if(count >= 10){
       window.clearInterval(inter);
    }
    
}, 1000)

//Desafio do relogio

window.setInterval(function(){
    var hora_atual = new Date();

    var horas = hora_atual.getHours();
    
    var minutos = hora_atual.getMinutes();
    
    var segundo = hora_atual.getSeconds();

    function format_time (time){
        if(time  >= 0 && time <= 9){
            var formatted_time = time.toString();
            formatted_time = "0" + formatted_time;
        }else{
            var formatted_time = time.toString();
        }
        return formatted_time;
    }
    
    document.getElementById("relogio").innerHTML = 
    format_time(horas) + ":" 
    + format_time(minutos) + ":" 
    + format_time(segundo);
}, 1000)


//Aula 28 - Swicht

function valor_pedagio(categoria){

    switch(categoria){

        case '1':
            return 11.22;
            break;

        case '2':
            return 22.45;
            break;

        case '3':
            return 16.88
            break;

        case 4:
            return 33.65;
            break;

        default:
            return 'categoria não encontrada';
    }
}

var categoria_veiculo = "1";

console.log(valor_pedagio(categoria_veiculo));

var categoria_veiculo = "2";

console.log(valor_pedagio(categoria_veiculo));

var categoria_veiculo = "3";

console.log(valor_pedagio(categoria_veiculo));

var categoria_veiculo = "4";

console.log(valor_pedagio(categoria_veiculo));
*/

// Aula 29 - break e continue

// var x = 0;

// while (x < 10){
//     console.log(x);
//     x++;

//     if(x==5){
//         break;
//     }
// }

// var lista = [1,3,2,4,33,6,7,8,9,5,6,5,65,67,34,567];

// for(a = 0; a < lista.length; a++){

//     if(lista[a] == 33){
//         console.log('valor encontrado');
//         break;

//     }
//     console.log('Tentativa: ' + a);
// }

// var  numero = 0;

// while (numero < 20){

//     numero++;

//     if(numero % 2 == 0){
      
//         continue;
//     }
//     console.log(numero);
   
// }

// Aula 30 - Formulario 1

//select box

// document.getElementById("mostrar_opcao").onclick = function (){

//     // var campo_select = document.getElementById("options");
//     // var indice_select = campo_select.options.selectedIndex;

//     // var valor_select = campo_select.options[indice_select].innerHTML;

//     // document.getElementById("opcao_selecionada").innerHTML = valor_select;

//     var valor_select = document.getElementById("options").value;
//     document.getElementById("opcao_selecionada").innerHTML = valor_select;
// };

// Radio Buttons

// document.getElementById("mostrar_radio").onclick = function () {

//    var radio = document.getElementsByName("genero");

//    var radio_selected;

//    for(var a = 0; a < radio.length; a++){
//        if(radio[a].checked){
//         radio_selected = radio[a].value;
//         break;
//        }
//    }

//    document.getElementById("radio_selecionado").innerHTML = radio_selected;
// };

// Check boxes

// document.getElementById("mostrar_check").onclick = function () {

//     document.getElementById("check_selecionado").innerHTML = "";

//     var check = document.getElementsByName("interesse");

//     for(var b = 0; b < check.length; b++){

//         if(check[b].checked){
//             document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
//         }
//     }


// };

// Date

// document.getElementById("mostrar_data").onclick = function () {

//     var data_select = document.getElementById("data_evento").value;
//     var data_completa = new Date(data_select);

//     document.getElementById("data_selecionada").innerHTML = data_completa;

// };

// Evento Onchange 

// document.getElementById("escolaridade").onchange = function () {

//     var campo_select = document.getElementById("escolaridade");
//     var indice_selecionado = campo_select.options.selectedIndex;
//     var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
//     document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;

// };


var check = document.getElementsByName("lanche");

for (var a = 0;  a < check.length; a++) {

    check[a].onchange = function () {

        document.getElementById("check_selecionado").innerHTML = "";
        
        for (var b = 0;  b < check.length; b++) {
            
            if (check[b].checked) {
                document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
            }
        }
    }  
}
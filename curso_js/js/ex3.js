/**Numero 1 */


function converterCelsius_Fahrenheit(temp_c) { 
    var temp_f = ( 9* temp_c / 5 ) + 32;
    return temp_f;
}

document.getElementById("converter").onclick = function (){
    var celsius = parseFloat(document.getElementById("temp_celsius").value);
    var fahreinht = converterCelsius_Fahrenheit(celsius);
    
    document.getElementById("temp_fahr").innerHTML = "<strong>" + fahreinht + "<strong>";
}




/**Numero 2*/

var inicio = 1930;

document.getElementById("anos_copa").innerHTML = "";

for(var a = inicio; a <= 2020; a += 4){
    document.getElementById("anos_copa").innerHTML += '<li>' + a + '<li>';
}

/**Numero 3*/

document.getElementById("calcular").onclick = function (){

    var n1 = parseFloat(document.getElementById("nota1").value);
    var n2 = parseFloat(document.getElementById("nota2").value);
    var n_faltas = parseFloat(document.getElementById("n_faltas").value);

    var media = (n1 + n2) / 2;
    var presenca = (20 - n_faltas) / 20;

    var situacao;

    if(media >= 6.5 && presenca >= 0.7){
        situacao = "Aprovado";
    } else if(media < 6.5 && presenca < 0.7){
        situacao = "Reprovado por falta e media";
    } else if(media < 6.5){
        situacao = "Reprovado por media";
    } else if(presenca < 0.7){
        situacao = "Reprovado por falta";
    }

    document.getElementById("result").innerHTML = "Resultado final: " + situacao;
    document.getElementById("resultMedia").innerHTML = "Sua Media é: " + media;
}

/**Numero 4 */

var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    }

];


var total_vendas = 0;

document.getElementById("vendas_cursos").innerHTML = "";

for(var b = 0; b < vendas_cursos.length; b++){

    if(vendas_cursos[b].reembolso == null && vendas_cursos[b].valor < 30){

        total_vendas += vendas_cursos[b].valor;

        var linhaHTML = "";
        linhaHTML += '<tr>';
        linhaHTML +=    '<td>' + vendas_cursos[b].aluno + '</td>';
        linhaHTML +=    '<td>' + vendas_cursos[b].data + '</td>';
        linhaHTML +=    '<td>' + vendas_cursos[b].valor + '</td>';
        linhaHTML += '</tr>';

        document.getElementById("vendas_cursos").innerHTML += linhaHTML;

    }
}
document.getElementById("total_vendas").innerHTML = total_vendas;
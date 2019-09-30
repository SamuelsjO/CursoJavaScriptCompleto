/**Calculo IMC 

function valor_imc(peso,altura){
    var imc = peso / (altura * altura);
    return imc;
}
 

var meu_peso = parseFloat(document.getElementById("peso").innerHTML);
var minha_altura = parseFloat(document.getElementById("altura").innerHTML);

var meu_imc = valor_imc(meu_peso,minha_altura);

document.getElementById("imc").innerHTML = meu_imc.toFixed(2);

*/

/**Folha de Exercícios no 2 */

function valor_soma(numero1,numero2){
    var soma = numero1 + numero2;
    return soma;
}

var numero_1 = parseFloat(document.getElementById("num_1").innerHTML);
var numero_2 = parseFloat(document.getElementById("num_2").innerHTML);

var minha_soma = valor_soma(numero_1,numero_2);

document.getElementById("resultado").innerHTML = "<strong>" + minha_soma + "<strong>";


/**Função graus celsius */

function converterCelsius_Fahrenheit(temp_c){ 
    var temp_f = ( 9* temp_c / 5 ) + 32;
    return temp_f;
}
var celsius = parseFloat(document.getElementById("caixa_azul").innerHTML);
var fahreinht = converterCelsius_Fahrenheit(celsius);

document.getElementById("caixa_amarela").innerHTML = "<strong>" + fahreinht + "<strong>";


/**Numero 3 folha de exercicios */

var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]; 
var  novos_grupos = grupos.slice([-2,]);

novos_grupos.push(["Mariana", "Felipe", "Carla"]);

console.log(novos_grupos);


/**Numero 4 folha de exercicios */

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    'total_aval': function(){
        var t_aval = this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela;
        return t_aval;
    },
    'media_aval': function(){
        var m_aval = (( 5 * this.n_aval_5_estrelas) + ( 4 * this.n_aval_4_estrelas) + ( 3 * this.n_aval_3_estrelas) + ( 2 * this.n_aval_2_estrelas) +  ( 1 * this.n_aval_1_estrela))
        /(this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela);
        return m_aval;
    }
}
  
var cat_principal = curso.categoria[0];

document.getElementById("categoria_principal").innerHTML = "<strong>" + cat_principal + "<strong>";

var total_aval = curso.total_aval();

var media_aval = curso.media_aval();

document.getElementById("media_aval").innerHTML =  media_aval.toFixed(4);

document.getElementById("total_aval").innerHTML = total_aval;


/**numero 05 segunda parte */

var pessoa = {
    'nome': 'Marina',
    'sobrenome': 'Lopes',
    'email':'mlopes@gmail.com'
};

function criar_table(person){

    var tabela_html = '<div class="tableBox">';
    tabela_html +=      '<table>';
    tabela_html +=          '<tr>'
    tabela_html +=              '<th>Nome Completo</th>';
    tabela_html +=                  '<th>Email</th>';
    tabela_html +=          '</tr>';
    tabela_html +=          '<tr>';
    tabela_html +=              '<td>' + person.nome + ' ' + person.sobrenome + '</td>'
    tabela_html +=              '<td>'+ person.email + '</td>';
    tabela_html +=          '</tr>';
    tabela_html +=      '</table>';
    tabela_html +=      '</div>';
    return tabela_html;
}
 

var tabela = criar_table(pessoa);

document.getElementById("tabela").innerHTML = tabela;
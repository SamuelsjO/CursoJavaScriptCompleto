// 1

document.getElementById("estados").onchange = function (){
    localStorage.setItem("estados", document.getElementById("estados").value)
}

if(localStorage.estado){
    document.getElementById("estados").value = localStorage.estado;
}

// 2

function add_left_zero(number){
    if(number < 10){
        return "0" + number.toString();
    } else {
        return number.toString();
    }

}

function format_date(timestamp){
    var dia = add_left_zero(new Date(timestamp).getDate());
    var mes = add_left_zero(new Date(timestamp).getMonth() + 1);
    var ano = add_left_zero(new Date(timestamp).getFullYear());

    return dia + "-" + mes + "-" + ano;
}

document.getElementById("confirmar_pedido").onclick = function (){

    var opt = document.getElementById("envios").value;

    if (opt == "escolha"){
        alert("Escolha um modelo de envio");
    }else {
        if(opt == "normal"){
            var dias_entrega = 18;
        } else if(opt == "express"){
            var dias_entrega = 12;
        }

        var data_envio = new Date().getTime();
        var data_entrega = data_envio +(dias_entrega * 86400000);

        document.getElementById("data_pedido").innerHTML = format_date(data_envio);
        document.getElementById("data_entrega").innerHTML = format_date(data_entrega);
    }
}

//4

var carros = [

    {
        'placa': 'AAA-0198',
        'categoria': '1',
    },

    {
        'placa': 'HBP-2837',
        'categoria': '2',
    },

    {
        'placa': 'PLQ-0928',
        'categoria': '4',
    },

    {
        'placa': 'KQE-2093',
        'categoria': '5',
    },

    {
        'placa': 'AMR-9087',
        'categoria': '5',
    },

    {
        'placa': 'BQE-8111',
        'categoria': '3',
    },

    {
        'placa': 'GXL-9001',
        'categoria': '2',
    },

    {
        'placa': 'KPM-7740',
        'categoria': '1',
    }

];

// 3

var iniciado = false, horas_inicio, hora_atual, tempo_passado, init_cronometro, horas, minutos, segundos, milisegundos;

function add_left_zero_cronometro(number){
    if(number < 10){
        return "0" + number.toString();
    } else {
        return number.toString();
    }

}

document.getElementById("comecar_parar").onclick = function (){

    if(!iniciado){
        iniciado = true;
        document.getElementById("comecar_parar").innerHTML = "Parar";

        if(!horas_inicio){
            horas_inicio = new Date().getTime();
        } else {
            horas_inicio = new Date().getTime() - tempo_passado;
        }

       

        init_cronometro = window.setInterval(function(){

            hora_atual = new Date().getTime();
            tempo_passado = hora_atual - horas_inicio;

            horas = Math.floor(tempo_passado / 3600000);
            resto = tempo_passado - (horas * 3600000);

            minutos = Math.floor(resto / 60000);
            resto -= (minutos * 60000);

            segundos = Math.floor(resto / 1000);
            resto -= (segundos * 1000);

            milisegundos = resto;

            document.getElementById("cronometro").innerHTML = add_left_zero_cronometro(horas) + ':' + add_left_zero_cronometro(minutos) + ':' + add_left_zero_cronometro(segundos) + ' ' + add_left_zero_cronometro(milisegundos);

        },10);

    } else {
        window.clearInterval(init_cronometro);
        iniciado = false;

        document.getElementById("comecar_parar").innerHTML = "Começar";
    }
}

document.getElementById("zerar").onclick = function (){

    tempo_passado = 0;
    horas_inicio = new Date().getTime();
    document.getElementById("cronometro").innerHTML = "00:00:00 0000";
}

// 4

// function valor_a_pagar(veiculo){

//         switch(veiculo.categoria){
    
//             case '1':
//                 return 11.22;
//                 break;
    
//             case '2':
//                 return 22.45;
//                 break;
    
//             case '3':
//                 return 16.88
//                 break;
    
//             case '4':
//                 return 33.65;
//                 break;
    
//             default:
//                 console.log('veiculo de placa ' + veiculo.placa + ' não fez pagamento por erro de categoria (' + veiculo.categoria + ')')
//                 return 0;
//         }
//     }

// var total_arrecadado = 0;

// for(var a = 0; a < carros.length; a++){
//     total_arrecadado += valor_a_pagar(carros[a]);
// }

// document.getElementById("faturamento_total").innerHTML = total_arrecadado.toFixed(2);
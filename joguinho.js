/**
 * 
 */




var jTimeHome = [
    {
        nome: 'Diego Alves',
        habilidades : {
            penalti: 15,
            posicionamento : 12,
            defende : 14,
            espalma : 14,
            espalmaFora : 14,
            jogoAereo : 17,
            reposicao : 14
        },
        posicao : 1,
        camisa:1,
        acoes: {
            1 : defende,
            2 : defende,
            3 : espalma,
            4 : espalma, 
            5 : espalmaFora,
            6 : espalmaFora
        },
        time : 'timeHome'
    },
    {
        nome: 'Juan',
        habilidades : {
            forca : 13,
            toque : 13,
            lancamento : 10,
            chute : 6,
            drible : 4,
            carrinho : 14,
            corrida : 5,
            jogoAereo : 12,

        },
        posicao : 1,
        camisa : 2,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : disputa
        },
        time : 'timeHome'
    },
    {
        nome: 'Leo Duarte',
        habilidades : {
            forca : 15,
            toque : 11,
            lancamento : 6,
            chute : 4,
            drible : 2,
            carrinho : 11,
            corrida : 7,
            jogoAereo : 14,
        },
        posicao : 2,
        camisa : 3,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : disputa
        },
        time : 'timeHome'
    },
    {
        nome: 'Cuellar',
        habilidades : {
            forca : 15,
            toque : 11,
            lancamento : 13,
            chute : 8,
            drible : 7,
            carrinho : 12,
            corrida : 7,
            jogoAereo : 9,
        },
        posicao : 3,
        camisa : 4,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : toque
        },
        time : 'timeHome'
    },
    {
        nome: 'Lucas Paquetá',
        habilidades : {
            forca : 13,
            toque : 14,
            lancamento : 12,
            chute : 15,
            drible : 14,
            carrinho : 14,
            corrida : 12,
            jogoAereo : 13,
        },
        posicao : 4,
        camisa : 5,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : lancamento
        },
        time : 'timeHome'
    },
    {
        nome: 'Diego',
        habilidades : {
            forca : 13,
            toque : 14,
            lancamento : 12,
            chute : 13,
            drible : 12,
            carrinho : 14,
            corrida : 12,
            jogoAereo : 7,
        },
        posicao : 5,
        camisa : 6,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : lancamento
        },
        time : 'timeHome'
    },
    {
        nome: 'Everton Ribeiro',
        habilidades : {
            forca : 11,
            toque : 12,
            lancamento : 10,
            chute : 10,
            drible : 4,
            carrinho : 14,
            corrida : 13,
            jogoAereo : 7,
        },
        posicao : 6,
        camisa : 7,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : toque
        },
        time : 'timeHome'
    },
    {
        nome: 'Vitinho',
        habilidades : {
            forca : 11,
            toque : 14,
            lancamento : 12,
            chute : 6,
            drible : 4,
            carrinho : 14,
            corrida : 12,
            jogoAereo : 12,
        },
        posicao : 7,
        camisa : 8,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : chute
        },
        time : 'timeHome'
    },
    {
        nome: 'Uribe',
        habilidades : {
            forca : 13,
            toque : 6,
            lancamento : 3,
            chute : 12,
            drible : 4,
            carrinho : 14,
            corrida : 13,
            jogoAereo : 14,
        },
        posicao : 8,
        camisa : 9,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : chute
        },
        time : 'timeHome'
    }
]

var jTimeAway = [
    {
        nome: 'Júlio Cesar',
        habilidades : {
            penalti: 15,
            posicionamento : 12,
            defende : 10,
            espalma : 12,
            espalmaFora : 12,
            jogoAereo : 13,
            reposicao : 14
        },
        posicao : 1,
        camisa:1,
        acoes: {
            1 : defende,
            2 : defende,
            3 : espalma,
            4 : espalma, 
            5 : espalmaFora,
            6 : espalmaFora
        },
        time : 'timeAway'
    },
    {
        nome: 'Digão',
        habilidades : {
            forca : 5,
            toque : 5,
            lancamento : 7,
            chute : 5,
            drible : 5,
            carrinho : 12,
            corrida : 10,
            jogoAereo : 12,
        },
        posicao : 1,
        camisa : 2,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : disputa
        },
        time : 'timeAway'
    },
    {
        nome: 'Gum',
        habilidades : {
            forca : 11,
            toque : 5,
            lancamento : 7,
            chute : 5,
            drible : 5,
            carrinho : 12,
            corrida : 10,
            jogoAereo : 14,
        },
        posicao : 2,
        camisa : 3,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : disputa
        },
        time : 'timeAway'
    },
    {
        nome: 'Richard',
        habilidades : {
            forca : 10,
            toque : 5,
            lancamento : 7,
            chute : 5,
            drible : 5,
            carrinho : 12,
            corrida : 10,
            jogoAereo : 11,
        },
        posicao : 3,
        camisa : 4,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : toque
        },
        time : 'timeAway'
    },
    {
        nome: 'Ayrton Lucas',
        habilidades : {
            forca : 10,
            toque : 5,
            lancamento : 10,
            chute : 6,
            drible : 5,
            carrinho : 6,
            corrida : 10,
            jogoAereo : 10,
        },
        posicao : 4,
        camisa : 5,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : lancamento
        },
        time : 'timeAway'
    },
    {
        nome: 'Jadson',
        habilidades : {
            forca : 10,
            toque : 5,
            lancamento : 10,
            chute : 6,
            drible : 5,
            carrinho : 6,
            corrida : 10,
            jogoAereo : 11,
        },
        posicao : 4,
        camisa : 6,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : lancamento
        },
        time : 'timeAway'
    },
    {
        nome: 'Daniel',
        habilidades : {
            forca : 10,
            toque : 8,
            lancamento : 10,
            chute : 10,
            drible : 7,
            carrinho : 6,
            corrida : 10,
            jogoAereo : 12,
        },
        posicao : 6,
        camisa : 7,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : toque
        },
        time : 'timeAway'
    },
    {
        nome: 'Marcos Junior',
        habilidades : {
            forca : 8,
            toque : 8,
            lancamento : 5,
            chute : 7,
            drible : 6,
            carrinho : 4,
            corrida : 12,
            jogoAereo : 13,
        },
        posicao : 7,
        camisa : 8,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : chute
        },
        time : 'timeAway'
    },
    {
        nome: 'Pedro',
        habilidades : {
            forca : 13,
            toque : 5,
            lancamento : 7,
            chute : 14,
            drible : 10,
            carrinho : 4,
            corrida : 11,
            jogoAereo : 15,
        },
        posicao : 8,
        camisa : 9,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : chute
        },
        time : 'timeAway'
    }
]

jogo = {
    timeHome :{
        placar : 0,
        nome : 'CR Flamengo',
        jogadores :  $.extend(true, [], jTimeHome),
        inicial : $.extend(true, [], jTimeHome),
        cores: {
            principal  : 'red',
            secundaria : 'black'
        }
    },
    timeAway : {
        placar : 0,
        nome : 'Fluminense FC', 
        jogadores : $.extend(true, [], jTimeAway), 
        inicial : $.extend(true, [], jTimeAway),
        cores: {
            principal  : '#990000',
            secundaria : '#009933'
        }
    },
    posseBola : {
        timeAtk : 'timeHome',
        timeDef : 'timeAway',
        jogador : 5             //camisa    do jogador com a bola
    },
    tempo : {
        etapa : 1,
        minuto : 0
    }   

}

function rolaDado(){
    var dado = Math.floor(Math.random() * 6) + 1;
    return dado; 
}


function proximaJogada(){
    // debugger;
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
    var jogadorBola = timeBola[jogo.posseBola.jogador];

    if(jogadorBola.camisa == timeBola[0].camisa){
        // debugger;
        goleiroRepoeBola(jogadorBola);    
    } else{
        jogadorBola.acoes[rolaDado()]();    
    }
    
}

function controlaJogo(){
    // debugger;
    // var etapa = jogo.tempo.etapa;
    // var minuto = jogo.tempo.minuto;
    
    while(jogo.tempo.etapa <= 2){

    
        // for (let minuto = 0; minuto < (45 + randomNumber(4) ); minuto++) {
        while(jogo.tempo.minuto < ( 45+randomNumber(4) ) ){
            // setTimeout(() => {
            //     proximaJogada()
            // }, 1000);
            proximaJogada();
            jogo.tempo.minuto++;
            resetarTime();  
        }
        printaAcao('final do '+jogo.tempo.etapa+' tempo');
        jogo.tempo.etapa++;
        jogo.tempo.minuto = 0;
    }
    printaAcao('Fim de jogo!');
    printaAcao( jogo.timeHome.nome+' '+jogo.timeHome.placar+'x'+jogo.timeAway.placar+' '+jogo.timeAway.nome);
    
    
    
}


// jogo.timeHome.jogadores[3] = 'hue';
// console.table(jogo.timeHome.inicial)
// console.table(jogo.timeHome.jogadores[0].acoes[1]());

// rolaDado();


function printaAcao(jogada){
    var p = document.createElement('p');
    var texto = document.createTextNode(jogo.tempo.minuto+ '" '+ jogada);
    p.appendChild(texto);
    document.getElementById("result").appendChild(p).setAttribute("style", "background:"+jogo[jogo.posseBola.timeAtk].cores.principal+"; color:"+jogo[jogo.posseBola.timeAtk].cores.secundaria+"; border: 1px solid"+jogo[jogo.posseBola.timeAtk].cores.secundaria+" blue;");
}


 
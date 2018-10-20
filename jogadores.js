

function toque(){

} 

function corrida(){

}

function chute(){

}

function lancamento(){

}

function drible(){

}

function carrinho(){

}

function disputa(){

}

function cruzamento(){

}

function mudarPosse(){

}

function resetarTime(){

}

function corner(){

}

function falta(){

}

function tiroMeta(){

}
function gol(){
    console.log('OLHUGOOL');
    
    if(jogo.posseBola.time == 'timeHome'){
        jogo.timeHome.placar++;
    } else {
        jogo.timeAway.placar++;
    }
}

function defende(){

}

function espalma(){

}

function espalmaFora(){

}
/*
* Procura se tem algum jogador em uma casa do campo 
* Casa com base no ataque
*/

function buscaJogadorCampo(numeroCasa){
    buscaJogadorCampoAtk(numeroCasa);
    buscaJogadorCampoDef(9 - numeroCasa);
}

function buscaJogadorCampoAtk(numeroCasa){
    
    //apenas para encurtar a variavel
    var timeBola = jogo[jogo.posseBola.time].jogadores;
   
    var jogadoresNaCasa = [];

    timeBola.forEach(function(element){
        if(element.posicao == numeroCasa){
            console.log(element);
            jogadoresNaCasa.push(element);
        }
    });

    console.table(jogadoresNaCasa);
}

function buscaJogadorCampoDef(numeroCasa){
    var timeBola;
    //apenas para encurtar a variavel
    if(jogo.posseBola.time == 'timeHome'){
        timeBola = jogo['timeAway'].jogadores;
    } else{
        timeBola = jogo['timeHome'].jogadores;
    }
    
   
    var jogadoresNaCasa = [];

    timeBola.forEach(function(element){
        if(element.posicao == numeroCasa){
            console.log(element);
            jogadoresNaCasa.push(element);
        }
    });

    console.table(jogadoresNaCasa);
}

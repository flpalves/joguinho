

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
    var timeBola = jogo[jogo.posseBola.time].jogadores;

    return timeBola.find(obj => obj.posicao == numeroCasa)
}
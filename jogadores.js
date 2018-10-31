

function toque(){
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
    var jogadorBola = timeBola[jogo.posseBola.jogador];
    var casaAlvo = jogadorBola.posicao;
    var envolvidos = buscaJogadorCampo(casaAlvo);

    var jogadorAlvo = envolvidos.atk[[randomNumber(envolvidos.atk.length)]];
    
    if(jogadorBola.habilidade < randomNumber(25)){
        // jogo.posseBola.jogador = jogadorAlvo;
        console.log("acerta um passe perfeito para "+jogadorAlvo.nome);
    }
    debugger;

    
    

} 

function corrida(){

}

function chute(){
    
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
    var jogadorBola = timeBola[jogo.posseBola.jogador];
    var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];

    console.log(jogadorBola.nome + ' chutou!');
    console.log(goleiro.nome+" voa na bola");
    // debugger;
    var necessarioDado = null; //numero necessario para a ação ser concluida

    switch (jogadorBola.posicao) {
        case 5:
            necessarioDado = 2;
            break;

        case 6 :
            necessarioDado = 3;
            break;
        case 7 :
            necessarioDado = 4;
            break;
        case 8 :
            necessarioDado = 5;
            break;
        
            
        default:
            necessarioDado = 0;
            break;
    }

    if(necessarioDado == 0){
        invertePosse();
    }


    //rola o dado para ver se a ação deu bom ou nao
    if(rolaDado() <= necessarioDado){
        console.log('a bola vai em direção ao gol');
        goleiro.acoes[rolaDado()]()
    } else{
        console.log('PRA FORA');
    }
    
    
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
    
    if(jogo.posseBola.timeAtk == 'timeHome'){
        jogo.timeHome.placar++;
    } else {
        jogo.timeAway.placar++;
    }
}

function defende(){
    console.log('defendeu!');
}

function espalma(){
    console.log('espalma e a bola tá viva!');
}

function espalmaFora(){
    console.log('e é escanteio!');
}
/*
* Procura se tem algum jogador em uma casa do campo 
* Casa com base no ataque
*/

function buscaJogadorCampo(numeroCasa){
    var arrAtk = buscaJogadorCampoAtk(numeroCasa);
    var arrDef = buscaJogadorCampoDef(9 - numeroCasa);

    return {
        'atk' : arrAtk,
        'def' : arrDef
    }
}

function buscaJogadorCampoAtk(numeroCasa){
    
    //apenas para encurtar a variavel
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
   
    var jogadoresNaCasa = [];

    timeBola.forEach(function(element){
        if(element.posicao == numeroCasa){
            console.log(element);
            jogadoresNaCasa.push(element);
        }
    });

    console.table(jogadoresNaCasa);

    return jogadoresNaCasa;
}

function buscaJogadorCampoDef(numeroCasa){
    var timeBola;
    //apenas para encurtar a variavel
    if(jogo.posseBola.timeAtk == 'timeHome'){
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

    return jogadoresNaCasa;
}

function invertePosse(){
    console.log('inverte a posse');
}

function randomNumber(number){
    return Math.floor(Math.random() * number);
}
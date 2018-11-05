

function toque(){
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
    var jogadorBola = timeBola[jogo.posseBola.jogador];
    var casaAlvo = jogadorBola.posicao;
    var envolvidos = buscaJogadorCampo(casaAlvo);

    var camisaJogadorAlvo = envolvidos.atk[[randomNumber(envolvidos.atk.length)]].camisa;
    var jogadorAlvo = getIndexByCamisa(timeBola, camisaJogadorAlvo);

    //passe perfeito
    if(jogadorBola.habilidade < randomNumber(25)){
        // jogo.posseBola.jogador = jogadorAlvo;
        console.log("acerta um passe perfeito para "+timeBola[jogadorAlvo].nome);
        
    }
    //passe contestavel
    else{
        var saiLoop = false;
        envolvidos.def.forEach(jogador => {
            if(!saiLoop){
                saiLoop = tentaCorte(jogador);
            }
        });
    }    
    return true;
}
/**
 * Faz o jogador do loop tentar cortar a bola
 * @return FALSE se nao tentou roubar a bola, TRUE se tentou roubar a bola
 * @param Jogador jogador 
 */
function tentaCorte(jogador){
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
    var jogadorBola = timeBola[jogo.posseBola.jogador];
    // mock function()
    invertePosse(jogador);
    var dado = rolaDado();
    var acao = jogador.acoes[dado];
    console.log(acao);
    if(acao == carrinho){
        carrinho(jogador);
        return true;
    } else if(acao == disputa){
        disputa(jogadorBola, jogador);
        return true;
    }
    else {
        console.log('avança');
        return false;
    }
    
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

function carrinho(jogador){
    if(randomNumber(30)) {

    }
    console.log('carrinho')
    return true;
}

function disputa(pAtk, pDef){
    var dadoAtk = pAtk.habilidades.forca + randomNumber(25);
    var dadoDef = pDef.habilidades.forca + randomNumber(25);
    if(dadoAtk > dadoDef){
        console.log(pAtk.nome + 'ganha a bola e fica com a bola!');
    } else{
        console.log(pDef.nome+'vence no ombro e rouba a bola!')
        invertePosse();
    }
    
    return true;
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
            // console.log(element);
            jogadoresNaCasa.push(element);
        }
    });

    // console.table(jogadoresNaCasa);

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
            // console.log(element);
            jogadoresNaCasa.push(element);
        }
    });

    // console.table(jogadoresNaCasa);

    return jogadoresNaCasa;
}

function invertePosse(jogador){ 
    console.log('inverte a posse');
    jogo.posseBola.jogador = 9 - jogador.posicao;
    var novoAtkTemp = jogo.timeDef;
    jogo.timeDef = jogo.timeAtk;
    jogo.timeAtk = novoAtkTemp;
    
    return false;
}

function randomNumber(number){
    return Math.floor(Math.random() * number);
}

function getIndexByCamisa(time, camisa){
    
    index = time.findIndex(x => x.camisa == camisa);
    return index;
}


function toque(){
    // debugger;
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
    var jogadorBola = timeBola[jogo.posseBola.jogador];
    var casaAlvo = jogadorBola.posicao + 1 ;
    var envolvidos = buscaJogadorCampo(casaAlvo);

    //caso não tenha ninguem na casa a frente, toca pro lado;
    if(envolvidos.atk.length == 0){
        casaAlvo = jogadorBola.posicao;
        envolvidos = buscaJogadorCampo(casaAlvo);
    }

    //caso não tenha ninguem na casa ao lado, toca pra trás;
    if(envolvidos.atk.length == 0){
        casaAlvo = jogadorBola.posicao - 1;
        envolvidos = buscaJogadorCampo(casaAlvo);
    } 

    //caso não tenha ninguem na casa a frente;
    if(envolvidos.atk.length == 0){
        
        invertePosse(buscaJogadorCampoDef(jogadorBola.posicao[0]));
        return false;
    }

    var camisaJogadorAlvo = envolvidos.atk[[randomNumber(envolvidos.atk.length)]].camisa;
    var jogadorAlvo = getIndexByCamisa(timeBola, camisaJogadorAlvo);

    //passe perfeito
    console.log(jogadorBola.nome+' está com a bola')
    if(jogadorBola.habilidades.toque < randomNumber(25)){
        /* a ação */ 
        jogo.posseBola.jogador = jogadorAlvo;
        console.log("acerta um passe perfeito para "+timeBola[jogadorAlvo].nome); 
    }
    //passe contestavel
    else{
        var tentouCortar = false;
        envolvidos.def.forEach(jogador => {
            if(!tentouCortar){
                acaoDefesa = tentaCorte(jogador);
                tentouCortar = acaoDefesa.bool;
            }
        });
        if(!tentouCortar){
            /* a ação */ 
            jogo.posseBola.jogador = jogadorAlvo;
            console.log('faz o passe para '+ timeBola[jogadorAlvo].nome);
        } else{
            acaoDefesa.funcao();
        }
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
    var dado = rolaDado();
    var acao = jogador.acoes[dado];
    var returning = {};
    // console.log(acao);
    if(acao == carrinho){
        returning = {
            'bool' : true,
            'funcao' : carrinho
        }
    } else if(acao == disputa){
        returning = {
            'bool' : true,
            'funcao' : disputa
        }
    }
    else {
        returning = {
            bool : false
        }
    }
    return returning;
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
        invertePosse(goleiro);
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
    // debugger;
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
    var jogadorBola = timeBola[jogo.posseBola.jogador];
    var casaAlvo = jogadorBola.posicao + 2 ;
    var envolvidos = buscaJogadorCampo(casaAlvo);

    //caso não tenha ninguem na casa a frente, toca pro lado;
    if(envolvidos.atk.length == 0){
        casaAlvo = jogadorBola.posicao + 1;
        envolvidos = buscaJogadorCampo(casaAlvo);
    }

    //caso não tenha ninguem na casa a frente, toca pro lado;
    if(envolvidos.atk.length == 0){
        casaAlvo = jogadorBola.posicao;
        envolvidos = buscaJogadorCampo(casaAlvo);
    }

    //caso não tenha ninguem na casa a frente;
    if(envolvidos.atk.length == 0){
        invertePosse(buscaJogadorCampoDef(jogadorBola.posicao[0]));
        return false;
    }

    var camisaJogadorAlvo = envolvidos.atk[[randomNumber(envolvidos.atk.length)]].camisa;
    var jogadorAlvo = getIndexByCamisa(timeBola, camisaJogadorAlvo);

    //passe perfeito
    console.log(jogadorBola.nome+' está com a bola')
    if(jogadorBola.habilidades.lancamento < randomNumber(25)){
        /* a ação */ 
        jogo.posseBola.jogador = jogadorAlvo;
        console.log("acerta um passe perfeito para "+timeBola[jogadorAlvo].nome); 
    }
    //passe contestavel
    else{
        var tentouCortar = false;
        envolvidos.def.forEach(jogador => {
            if(!tentouCortar){
                acaoDefesa = tentaCorte(jogador);
                tentouCortar = acaoDefesa.bool;
            }
        });
        if(!tentouCortar){
            /* a ação */ 
            jogo.posseBola.jogador = jogadorAlvo;
            console.log('faz o passe para '+ timeBola[jogadorAlvo].nome);
        } else{
            acaoDefesa.funcao();
        }
    }    
    return true;
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
        invertePosse(pDef);
    }
    
    return true;
}

function cruzamento(){

}

function resetarTime(){

}

function posGol(){
    jogo.posseBola.jogador = 5;
    var novoAtkTemp = jogo.timeDef;
    jogo.timeDef = jogo.timeAtk;
    jogo.timeAtk = novoAtkTemp;
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
    posGol();
}

function defende(){
    console.log('defendeu!');
}

function espalma(){
    console.log('espalma e a bola tá viva!');
    var envolvidos = buscaJogadorCampo(8);
    debugger;
    if(envolvidos.atk.length == 0){ 
        invertePosse(jogo[jogo.posseBola.timeDef].jogadores[0]);
    }
    if(envolvidos.atk.length == 1){
        if(envolvidos.def.length == 1){
            jogo.posseBola.jogador = envolvidos.atk[0].camisa;
        } else{
            var envolvidoAtk = envolvidos.atk[randomNumber(envolvidos.atk.length)];
            var envolvidoDef = envolvidos.def[randomNumber(envolvidos.def.length)];
            disputa(envolvidoAtk, envolvidoDef);
        }
    }

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
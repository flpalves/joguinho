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
    // debugger;
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
    var jogadorBola = timeBola[jogo.posseBola.jogador];
    var casaAlvo = jogadorBola.posicao ;
    var envolvidos = buscaJogadorCampo(casaAlvo);

    //caso não tenha ninguem na casa a frente;
    if(envolvidos.def.length == 0){
        /*a acao */
        jogador.posseBola.posicao++;
    }


    //corrida perfeita
    if(jogadorBola.habilidades.corrida < randomNumber(25)){
        /* a ação */ 
        jogador.posseBola.posicao++;
    }
    //corrida contestável
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
            jogador.posseBola.posicao++;
        } else{
            acaoDefesa.funcao();
        }
    }    
    return true;
}

function chute(){
    
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
    var jogadorBola = timeBola[jogo.posseBola.jogador];
    var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];

    console.log(jogadorBola.nome + ' chutou!');
    // debugger;
    var necessarioDado = null; //numero necessario para a ação ser concluida

    switch (jogadorBola.posicao) {
        case 6 :
            necessarioDado = 2;
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
        goleiro.acoes[rolaDado()](jogadorBola);
    } else{
        console.log('PRA FORA');
        invertePosse(goleiro);
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
            console.log('faz o lançamento para '+ timeBola[jogadorAlvo].nome);
            if(timeBola[jogadorAlvo].posicao == 8){
                cabecada(timeBola[jogadorAlvo]);
            }
        } else{
            acaoDefesa.funcao();
        }
    }    
    return true;
}

function drible(){

}

function carrinho(jogador){
    if(randomNumber(30) < jogador.habilidades.carrinho) {
        console.log('carrinho bem executado e '+jogador.nome+' rouba a bola');
        invertePosse(jogador);
    } else{
        falta(jogador);
    }
    console.log('carrinho')
    return true;
}

function disputa(pAtk, pDef){
    // debugger;
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

function resetarTime(){
    jogo.timeHome.jogadores = jTimeHome.slice();
    jogo.timeAway.jogadores = jTimeAway.slice();
}

function posGol(){
    jogo.posseBola.jogador = 5;
    var novoAtkTemp = jogo.timeDef;
    jogo.timeDef = jogo.timeAtk;
    jogo.timeAtk = novoAtkTemp;
    resetarTime();
}

function corner(){
    resetarTime();
    var pAtk = envolvidos.atk[randomNumber(envolvidos.atk.length)];
    var pDef = envolvidos.def[randomNumber(envolvidos.def.length)];
    var dadoAtk = pAtk.habilidades.forca + randomNumber(25);
    var dadoDef = pDef.habilidades.forca + randomNumber(25);
    if(dadoAtk > dadoDef){
        console.log(pAtk.nome + 'tenta o cabeçeio');
        cabecada(pAtk);
    } else{
        console.log(pDef.nome+'tira de cabeça');
        rifaBola(7);
        invertePosse(pDef);
    }
    return true;
}

function rifaBola(posicaoAtk){
    var envolvidos = buscaJogadorCampo(posicaoAtk);
    envolvidos = envolvidos.atk.concat(envolvidos.atk);
    var comBola = randomNumber(envolvidos.length);
    // envolvidos[comBola];
    console.log(envolvidos[comBola].nome +' recupera a bola');
    if(envolvidos[comBola].time == jogo.posseBola.timeDef){
        invertePosse(envolvidos[comBola]);
    }

}

function falta(){
    resetarTime();

    proximaJogada();
    if(jogadorBola.posicao == 8){
        penalti(jogadorBola); 
    } else{
        jogadorBola.acoes[rolaDado()]();
    }

}

function penalti(jogadorBola){
    var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];

    var forcaGoleiro = goleiro.habilidades.penalti + randomNumber(15);
    var forcaChute = jogadorBola.habilidades.chute + randomNumber(25);

    if(forcaGoleiro >= forcaChute){
        /*a acao */
        console.log('Defende '+goleiro.nome); 
        invertePosse(jogo[jogo.posseBola.timeDef].jogadores[0]);
        
    } else{
        gol();
    }
}

function tiroMeta(goleiro){    
    resetarTime();
    console.log(goleiro.nome+"recoloca a bola em jogo");
    var random = randomNumber(3);
    rifaBola(random);
    
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

function defende(jogadorBola){
    var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];

    var forcaGoleiro = goleiro.habilidades.defende + randomNumber(18);
    var forcaChute = jogadorBola.habilidades.chute + randomNumber(20);

    if(forcaGoleiro >= forcaChute){
        /*a acao */
        console.log(goleiro.nome+' defende firme');
        invertePosse(jogo[jogo.posseBola.timeDef].jogadores[0]);
        
    } else{
        gol();
    }

}

function rebote(){
    console.log('bola tá viva dentro da área !');
    var envolvidos = buscaJogadorCampo(8);
    // debugger;
    if(envolvidos.atk.length == 0){ 
        console.log('e ele pega em 2 tempos e fica tranquilo com ela')
        invertePosse(jogo[jogo.posseBola.timeDef].jogadores[0]);
        
    }
    if(envolvidos.atk.length > 0){
        if(envolvidos.def.length == 1){
            jogo.posseBola.jogador = envolvidos.atk[0].camisa;
            console.log('cai nos pés do centrovante que já tenta o chute! ');
            chute();
        } else{
            var envolvidoAtk = envolvidos.atk[randomNumber(envolvidos.atk.length)];
            var envolvidoDef = envolvidos.def[randomNumber(envolvidos.def.length)];
            disputa(envolvidoAtk, envolvidoDef);
        }
    } else{
        gol();
    }

}

function espalma(jogadorBola){
    var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];

    
    var forcaGoleiro = goleiro.habilidades.espalma + randomNumber(20);
    var forcaChute = jogadorBola.habilidades.chute + randomNumber(20);

    if(forcaGoleiro >= forcaChute){
        /*a acao */
        console.log('espaaalma '+goleiro.nome);
        rebote();
    } else{
        gol();
    }

}

function espalmaFora(jogadorBola){
    var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];

    
    var forcaGoleiro = goleiro.habilidades.espalmaFora + randomNumber(20);
    var forcaChute = jogadorBola.habilidades.chute + randomNumber(20);

    if(forcaGoleiro >= forcaChute){
        console.log(goleiro.nome+' poe pra escanteio!');
        /*a acao */
        corner();
    } else{
        gol();
    }

}
function cabecada(jogadorBola){
    var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];

    
    var forcaGoleiro = goleiro.habilidades.jogoAereo + randomNumber(20);
    var forcaCabecada = jogadorBola.habilidades.jogoAereo + randomNumber(20);

    if(forcaGoleiro >= forcaCabecada){
        console.log(goleiro.nome+' defende!'); 
        /*a acao */ 
        invertePosse(jogo[jogo.posseBola.timeDef].jogadores[0]);
    } else{
        gol();
    }

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
    // debugger;
    console.log('inverte a posse');
    
    var novoAtkTemp = jogo.posseBola.timeDef;
    jogo.posseBola.timeDef = jogo.posseBola.timeAtk;
    jogo.posseBola.timeAtk = novoAtkTemp;

    jogo.posseBola.posicao = jogador.posicao;
    jogo.posseBola.jogador = getIndexByCamisa(jogo[jogo.posseBola.timeAtk].jogadores, jogador.camisa);
    
    return false;
}

function randomNumber(number){
    return Math.floor(Math.random() * number);
}

function getIndexByCamisa(time, camisa){
    
    index = time.findIndex(x => x.camisa == camisa);
    return index;
} 
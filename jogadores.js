function toque(){
    //debugger;
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

    var JogadorAlvo = envolvidos.atk[[randomNumber(envolvidos.atk.length)]];
    var indexJogadorAlvo = getIndexByCamisa(timeBola, JogadorAlvo.camisa);

    //passe perfeito
    printaAcao(jogadorBola.nome+' está com a bola')
    
    if(jogadorBola.habilidades.toque < randomNumber(25)){
        /* a ação */ 
        jogo.posseBola.jogador = indexJogadorAlvo;
        jogo.posseBola.posicao = JogadorAlvo.posicao;
        
        printaAcao("acerta um passe perfeito para "+timeBola[indexJogadorAlvo].nome); 
    }
    //passe contestavel
    else{
        var tentouCortar = false;
        envolvidos.def.forEach(jogador => {
            if(!tentouCortar){
                acaoDefesa = tentaCorte(jogador);
                tentouCortar = acaoDefesa.bool;
                jogadorDef = jogador;
            }
        });
        if(!tentouCortar){
            /* a ação */ 
            jogo.posseBola.jogador = indexJogadorAlvo;
            jogo.posseBola.posicao = JogadorAlvo.posicao;
            printaAcao('faz o passe para '+ timeBola[indexJogadorAlvo].nome);
        } else{
            // acaoDefesa.funcao();
            if(acaoDefesa.funcao == 'carrinho'){
                acaoDefesa.carrinho(jogadorDef);
            } else if(acaoDefesa.funcao == 'disputa'){
                acaoDefesa.disputa(jogadorAlvo, jogadorDef);
            }
            
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
    //debugger;
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
    var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
    var jogadorBola = timeBola[jogo.posseBola.jogador];
    var casaAlvo = jogadorBola.posicao ;
    var envolvidos = buscaJogadorCampo(casaAlvo);

    printaAcao(jogadorBola.nome+' dá um tapa na frente e tenta avançar');
    if(jogadorBola.posicao == 8){
        printaAcao('Mas sai com bola e tudo, e é tiro de meta');
        invertePosse(goleiro);
        tiroMeta(goleiro);
        return false;
    }
    

    //caso não tenha ninguem na casa a frente;
    if(envolvidos.def.length == 0){
        /*a acao */
        jogadorBola.posicao++;
    }


    //corrida perfeita
    if(jogadorBola.habilidades.corrida < randomNumber(25)){
        /* a ação */ 
        printaAcao(jogadorBola.nome+' segue sem marcação e avança');
        jogadorBola.posicao++;
    }
    //corrida contestável
    else{
        var tentouCortar = false;
        var jogadorDef = false; 
        envolvidos.def.forEach(jogador => {
            if(!tentouCortar){
                acaoDefesa = tentaCorte(jogador);
                tentouCortar = acaoDefesa.bool;
                jogadorDef = jogador;
            }
        });
        if(!tentouCortar){
            /* a ação */ 
            printaAcao(jogadorBola.nome+' consegue escapar da marcação e segue com ela');
            console.log(jogadorDef); 
            jogadorBola.posicao++; 
        } else{
            // acaoDefesa.funcao();
            if(acaoDefesa.funcao == 'carrinho'){
                acaoDefesa.carrinho(jogadorDef);
            } else if(acaoDefesa.funcao == 'disputa'){
                acaoDefesa.disputa(jogadorBola, jogadorDef);
            }
        }
    }    
    return true;
}

function chute(){
    //debugger;
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
    var jogadorBola = timeBola[jogo.posseBola.jogador];
    var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];

    
    // //debugger;
    var necessarioDado = null; //numero necessario para a ação ser concluida

    switch (jogadorBola.posicao) {
        case 5 :
            necessarioDado = 1;
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
        printaAcao(jogadorBola.nome + ' isola a bola para frente!');
        rifaBola(jogadorBola.posicao + 2);
        return false;
    }

    printaAcao(jogadorBola.nome + ' chutou!');
    //rola o dado para ver se a ação deu bom ou nao
    if(randomNumber(6) <= necessarioDado){
        printaAcao('a bola vai em direção ao gol');
        goleiro.acoes[rolaDado()](jogadorBola);
    } else{
        printaAcao('PRA FORA');
        invertePosse(goleiro);
        tiroMeta(goleiro);
    }
    
    
}


function lancamento(){
    //debugger;
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
    var jogadorBola = timeBola[jogo.posseBola.jogador];
    var casaAlvo = jogadorBola.posicao + 2 ;
    var envolvidos = buscaJogadorCampo(casaAlvo);

    //caso não tenha ninguem 2 casas a frente, toca 1 casa a frente;
    if(envolvidos.atk.length == 0){
        casaAlvo = jogadorBola.posicao + 1;
        envolvidos = buscaJogadorCampo(casaAlvo);
    }

    //caso não tenha ninguem na casa a frente, toca pro lado;
    if(envolvidos.atk.length == 0){
        casaAlvo = jogadorBola.posicao;
        envolvidos = buscaJogadorCampo(casaAlvo);
    }

    //caso nao tenha ninguem na casa ao lado;
    if(envolvidos.atk.length == 0){
        invertePosse(buscaJogadorCampoDef(jogadorBola.posicao[0]));
        return false;
    }

    var camisaJogadorAlvo = envolvidos.atk[[randomNumber(envolvidos.atk.length)]].camisa;
    var jogadorAlvo = getIndexByCamisa(timeBola, camisaJogadorAlvo);

    //passe perfeito
    printaAcao(jogadorBola.nome+' está com a bola')
    if(jogadorBola.habilidades.lancamento < randomNumber(25)){
        /* a ação */ 
        jogo.posseBola.jogador = jogadorAlvo;
        jogo.posseBola.posicao = timeBola[jogadorAlvo].posicao;
        printaAcao("acerta um passe perfeito para "+timeBola[jogadorAlvo].nome); 
    }
    //passe contestavel
    else{
        var tentouCortar = false;
        envolvidos.def.forEach(jogador => {
            if(!tentouCortar){
                acaoDefesa = tentaCorte(jogador);
                tentouCortar = acaoDefesa.bool;
                jogadorDef = jogador;
            }
        });
        if(!tentouCortar){
            /* a ação */ 
            jogo.posseBola.jogador = jogadorAlvo;
            jogo.posseBola.posicao = timeBola[jogadorAlvo].posicao;
            printaAcao('faz o lançamento para '+ timeBola[jogadorAlvo].nome);
            if(timeBola[jogadorAlvo].posicao == 8){
                cabecada(timeBola[jogadorAlvo]); 
            }
        } else{
             // acaoDefesa.funcao();
             if(acaoDefesa.funcao == 'carrinho'){
                acaoDefesa.carrinho(jogadorDef);
            } else if(acaoDefesa.funcao == 'disputa'){
                acaoDefesa.disputa(jogadorAlvo, jogadorDef);
            }
        }
    }    
    return true;
}

function drible(){
    //debugger;
    return false;
}

function carrinho(jogadorDef){
    // debugger;
    if(!jogadorDef){
        
        var posicaoBusca = jogo[jogo.posseBola.timeAtk].jogadores[jogo.posseBola.jogador].posicao;
        jogadorDef = buscaJogadorCampoDef(9 - posicaoBusca);
        //se o não houver nenhum jogador de defesa no campo, sai da função
        if(jogadorDef.length == 0){
            return true;
        } else{
            jogadorDef =  jogadorDef[randomNumber(jogadorDef.length)];
        }        
        
    }
    if(randomNumber(30) < jogadorDef.habilidades.carrinho) {
        printaAcao('carrinho bem executado e '+jogadorDef.nome+' rouba a bola');
        invertePosse(jogadorDef);
    } else{
        falta(jogadorDef);
    }
    console.log('carrinho')
    return true;
}
/**
 * 
 * @param {jogador} pAtk 
 * @param {jogador} pDef 
 */
function disputa(pAtk, pDef){
    // debugger;
    //se for chamado sem jogador de atk, é o que está com a bola
    if(!pAtk){
        pAtk = jogo[jogo.posseBola.timeAtk].jogadores[jogo.posseBola.jogador];
    }
    // se for chamado sem jogador de defesa, sorteia algum do campo em disputa
    if(!pDef){
        var posicaoBusca = jogo[jogo.posseBola.timeAtk].jogadores[jogo.posseBola.jogador].posicao;
        pDef = buscaJogadorCampoDef(posicaoBusca);
        //se o não houver nenhum jogador de defesa no campo, sai da função
        if(pDef.length == 0){
            return true; 
        } else{
            pDef =  pDef[randomNumber(pDef.length)];
        }        
    }
    var dadoAtk = pAtk.habilidades.forca + randomNumber(25);
    var dadoDef = pDef.habilidades.forca + randomNumber(25);
    if(dadoAtk > dadoDef){
        printaAcao(pAtk.nome + 'ganha a bola e fica com a bola!');
    } else{
        printaAcao(pDef.nome+'vence no ombro e rouba a bola!')
        invertePosse(pDef);
    }
    
    return true;
}

function resetarTime(){
    //debugger;
    jogo.timeHome.jogadores = $.extend(true, [], jTimeHome);
    jogo.timeAway.jogadores = $.extend(true, [], jTimeAway);
    return false;
}

function posGol(){
    // debugger;
    jogo.posseBola.jogador = 5;
    jogo.posseBola.posicao = 4;
    var novoAtkTemp = jogo.posseBola.timeDef;
    jogo.posseBola.timeDef = jogo.posseBola.timeAtk;
    jogo.posseBola.timeAtk = novoAtkTemp;
    resetarTime();
    printaAcao('volta o jogo')
}

function corner(){
    //debugger;
    resetarTime();
    var envolvidos = buscaJogadorCampo(8);
    var pAtk = envolvidos.atk[randomNumber(envolvidos.atk.length)];
    var pDef = envolvidos.def[randomNumber(envolvidos.def.length)];
    var dadoAtk = pAtk.habilidades.forca + randomNumber(25);
    var dadoDef = pDef.habilidades.forca + randomNumber(25);
    if(dadoAtk > dadoDef){
        printaAcao(pAtk.nome + 'tenta o cabeçeio');
        cabecada(pAtk);
    } else{
        printaAcao(pDef.nome+'tira de cabeça');
        rifaBola(7);
        return false;
        // invertePosse(pDef);
    }
    return true;
}

function rifaBola(posicaoAtk){
    resetarTime();
    var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];
    // debugger;
    var envolvidos = buscaJogadorCampo(posicaoAtk);
    envolvidos = envolvidos.atk.concat(envolvidos.def);
    if(envolvidos.length == 0){
        if(posicaoAtk > 8){
            
            invertePosse(goleiro);
            tiroMeta(goleiro);
            return false; 
        };
        rifaBola(posicaoAtk + 1);
        return false;
    }
    
    var comBola = randomNumber(envolvidos.length);
    // envolvidos[comBola];
    printaAcao(envolvidos[comBola].nome +' fica com a bola');
    
    jogo.posseBola.jogador = getIndexByCamisa( jogo[jogo.posseBola.timeAtk].jogadores, envolvidos[comBola].camisa );
    jogo.posseBola.posicao = envolvidos[comBola].posicao;

    if(envolvidos[comBola].time == jogo.posseBola.timeDef){
        jogo.posseBola.jogador = getIndexByCamisa( jogo[jogo.posseBola.timeAtk].jogadores, envolvidos[comBola].camisa );
        jogo.posseBola.posicao = envolvidos[comBola].posicao;

        invertePosse(envolvidos[comBola]);
        return false;
    }


}

function falta(){
    //debugger;
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
    var jogadorBola = timeBola[jogo.posseBola.jogador];
    resetarTime();

    proximaJogada();
    if(jogadorBola.posicao == 8){
        penalti(jogadorBola); 
    } else{
        jogadorBola.acoes[rolaDado()]();
    }

}   

function penalti(jogadorBola){
    //debugger;
    var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];

    var forcaGoleiro = goleiro.habilidades.penalti + randomNumber(15);
    var forcaChute = jogadorBola.habilidades.chute + randomNumber(25);

    if(forcaGoleiro >= forcaChute){
        /*a acao */
        printaAcao('Defende '+goleiro.nome); 
        invertePosse(jogo[jogo.posseBola.timeDef].jogadores[0]);
        
    } else{
        gol();
    }
}

function tiroMeta(goleiro){
    //debugger;
    resetarTime();
    printaAcao(goleiro.nome+"recoloca a bola em jogo");
    var random = randomNumber(3);
    rifaBola(random+1);
    return false;
    
}
function gol(){
    // debugger;
    printaAcao('OLHUGOOL');
    
    if(jogo.posseBola.timeAtk == 'timeHome'){
        jogo.timeHome.placar++;
    } else {
        jogo.timeAway.placar++;
    }
    posGol();
}

function defende(jogadorBola){
    //debugger;
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
    var jogadorBola = timeBola[jogo.posseBola.jogador];
    
    var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];

    var forcaGoleiro = goleiro.habilidades.defende + randomNumber(18);
    var forcaChute = jogadorBola.habilidades.chute + randomNumber(20);

    if(forcaGoleiro >= forcaChute){
        /*a acao */
        printaAcao(goleiro.nome+' defende firme');
        invertePosse(jogo[jogo.posseBola.timeDef].jogadores[0]);
        return true;
    } else{
        gol();
    }

}

function rebote(){
    //debugger;
    printaAcao('bola tá viva dentro da área !');
    var envolvidos = buscaJogadorCampo(8);
    // //debugger;
    if(envolvidos.atk.length == 0){ 
        printaAcao('e ele pega em 2 tempos e fica tranquilo com ela')
        invertePosse(jogo[jogo.posseBola.timeDef].jogadores[0]);
        
    }
    if(envolvidos.atk.length > 0){
        
        if(envolvidos.def.length == 1){
            // debugger;
            // jogo.posseBola.jogador = envolvidos.atk[0].camisa;
            jogo.posseBola.jogador = getIndexByCamisa(jogo[jogo.posseBola.timeAtk].jogadores, envolvidos.atk[0].camisa);
            jogo.posseBola.posicao = envolvidos.atk[0].posicao;
            printaAcao('cai nos pés do centrovante que já tenta o chute! ');
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
    //debugger;
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
    var jogadorBola = timeBola[jogo.posseBola.jogador];
    var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];

    
    var forcaGoleiro = goleiro.habilidades.espalma + randomNumber(20);

    var forcaChute = jogadorBola.habilidades.chute + randomNumber(20);

    if(forcaGoleiro >= forcaChute){
        /*a acao */
        printaAcao('espaaalma '+goleiro.nome);
        rebote();
    } else{
        gol();
    }

}

function espalmaFora(){
    //debugger;
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
    var jogadorBola = timeBola[jogo.posseBola.jogador];
    var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];

    
    var forcaGoleiro = goleiro.habilidades.espalmaFora + randomNumber(20);
    var forcaChute = jogadorBola.habilidades.chute + randomNumber(20); 

    if(forcaGoleiro >= forcaChute){
        printaAcao(goleiro.nome+' poe pra escanteio!');
        /*a acao */
        corner();
    } else{
        gol();
    }

}
function cabecada(jogadorBola){
    //debugger;
    var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];

    
    var forcaGoleiro = goleiro.habilidades.jogoAereo + randomNumber(20);
    var forcaCabecada = jogadorBola.habilidades.jogoAereo + randomNumber(20);


    if(forcaGoleiro >= forcaCabecada){
        printaAcao(goleiro.nome+' defende!'); 
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
    //debugger;
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
    //debugger;
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
    printaAcao('inverte a posse');
    
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

function goleiroRepoeBola(goleiro){
    // debugger;
    resetarTime();
    var casaAlvo = randomNumber(2) + 2;
    var jogador = [];
    if(goleiro.habilidades.reposicao > randomNumber(30)){
        jogador = buscaJogadorCampoAtk(casaAlvo)[0];
        if(!jogador){
            jogador = buscaJogadorCampoAtk(casaAlvo - 1)[0];
            if(!jogador){
                jogador = buscaJogadorCampoAtk(casaAlvo - 2)[0];
            }
        }
        jogo.posseBola.jogador = getIndexByCamisa(jogo[jogo.posseBola.timeAtk].jogadores,jogador.camisa);
        jogo.posseBola.posicao = jogador.posicao;
        printaAcao(goleiro.nome+' entrega a bola para '+jogador.nome);
    } else{
        jogador = buscaJogadorCampoDef(9 - casaAlvo)[0];
        if(!jogador){
            jogador = buscaJogadorCampoDef(9 - casaAlvo - 1)[0];
            if(!jogador){
                jogador = buscaJogadorCampoDef(9 - casaAlvo - 2)[0];
            }
        }
        invertePosse(jogador);
        printaAcao(goleiro.nome+' erra o lançamento, e a bola está com '+jogador.nome);
    }

}
/**
 * 
 */




var jTimeHome = [
    {
        nome: 'Diego Alves',
        habilidade : 15,
        posicao : 1,
        acoes: {
            1 : gol,
            2 : defende,
            3 : gol,
            4 : espalma,
            5 : espalmaFora,
            6 : gol
        }
    },
    {
        nome: 'Juan',
        habilidade : 13,
        posicao : 1,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : disputa
        }
    },
    {
        nome: 'Leo Duarte',
        habilidade : 15,
        posicao : 2,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : disputa
        }
    },
    {
        nome: 'Cuellar',
        habilidade : 15,
        posicao : 3,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : toque
        }
    },
    {
        nome: 'Lucas Paquetá',
        habilidade : 15,
        posicao : 4,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : lancamento
        }
    },
    {
        nome: 'Diego',
        habilidade : 15,
        posicao : 5,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : lancamento
        }
    },
    {
        nome: 'Everton Ribeiro',
        habilidade : 15,
        posicao : 1,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : toque
        }
    },
    {
        nome: 'Vitinho',
        habilidade : 13,
        posicao : 7,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : chute
        }
    },
    {
        nome: 'Uribe',
        habilidade : 12,
        posicao : 8,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : chute
        }
    }
]

var jTimeAway = [
    {
        nome: 'Julio Cesar',
        habilidade : 15,
        posicao : 1,
        acoes: {
            1 : gol,
            2 : defende,
            3 : gol,
            4 : espalma,
            5 : espalmaFora,
            6 : gol
        }
    },
    {
        nome: 'Digão',
        habilidade : 13,
        posicao : 1,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : disputa
        }
    },
    {
        nome: 'Gum',
        habilidade : 15,
        posicao : 2,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : disputa
        }
    },
    {
        nome: 'Richard',
        habilidade : 15,
        posicao : 3,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : toque
        }
    },
    {
        nome: 'Ayrton Lucas',
        habilidade : 15,
        posicao : 4,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : lancamento
        }
    },
    {
        nome: 'Jadson',
        habilidade : 15,
        posicao : 5,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : lancamento
        }
    },
    {
        nome: 'Daniel',
        habilidade : 15,
        posicao : 6,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : toque
        }
    },
    {
        nome: 'Marcos Junior',
        habilidade : 13,
        posicao : 7,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : chute
        }
    },
    {
        nome: 'Pedro',
        habilidade : 12,
        posicao : 8,
        acoes: {
            1 : carrinho,
            2 : corrida,
            3 : chute,
            4 : drible,
            5 : toque,
            6 : chute
        }
    }
]

jogo = {
    timeHome :{
        placar : 0,
        nome : 'Flamengo',
        jogadores : jTimeHome.slice(),
        inicial : jTimeHome.slice()
    },
    timeAway : {
        placar : 0,
        nome : 'Fluminense',
        jogadores : jTimeAway.slice(),
        inicial : jTimeAway.slice()
    },
    posseBola : {
        time : 'timeHome',
        jogador : 0
    },
    tempo : 0   

}

function rolaDado(){
    var dado = Math.floor(Math.random() * 6) + 1;
    console.log(jogo[jogo.posseBola.time].jogadores[jogo.posseBola.jogador].acoes[dado]);
}



// jogo.timeHome.jogadores[3] = 'hue';
// console.table(jogo.timeHome.inicial)
// console.table(jogo.timeHome.jogadores[0].acoes[1]());

rolaDado();
/**
 * 
 */




var jTimeHome = [
    {
        nome: 'Diego Alves',
        habilidades : {
            penalti: 15,
            posicionamento : 12,
            defesa : 14
        },
        posicao : 1,
        camisa:1,
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
        habilidades : {
            forca : 13,
            toque : 13,
            lancamento : 10,
            chute : 6,
            drible : 4,
            carrinho : 14,
            corrida : 5
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
        }
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
            corrida : 7
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
        }
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
            corrida : 7
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
        }
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
            corrida : 12
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
        }
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
            corrida : 12
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
        }
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
            corrida : 13
        },
        posicao : 5,
        camisa : 7,
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
        habilidades : {
            forca : 11,
            toque : 14,
            lancamento : 12,
            chute : 6,
            drible : 4,
            carrinho : 14,
            corrida : 12
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
        }
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
            corrida : 13
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
        }
    }
]

var jTimeAway = [
    {
        nome: 'Julio Cesar',
        habilidades : {
            penalti: 10,
            posicionamento : 9,
            defesa : 11
        },
        posicao : 1,
        camisa : 1,
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
        habilidades : {
            forca : 5,
            toque : 5,
            lancamento : 7,
            chute : 5,
            drible : 5,
            carrinho : 12,
            corrida : 10
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
        }
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
            corrida : 10
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
        }
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
            corrida : 10
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
        }
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
            corrida : 10
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
        }
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
            corrida : 10
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
        }
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
            corrida : 10
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
        }
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
            corrida : 12
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
        }
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
            corrida : 11
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
        timeAtk : 'timeHome',
        timeDef : 'timeAway',
        jogador : 5             //camisa do jogador com a bola
    },
    tempo : 0   

}

function rolaDado(){
    var dado = Math.floor(Math.random() * 6) + 1;
    return dado; 
}



// jogo.timeHome.jogadores[3] = 'hue';
// console.table(jogo.timeHome.inicial)
// console.table(jogo.timeHome.jogadores[0].acoes[1]());

// rolaDado();
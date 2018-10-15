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
    'Juan',
    'Leo Duarte',
    'Cuellar',
    'Lucas Paquetá',
    'Diego',
    'Everton Ribeiro',
    'Vitinho',
    'Uribe'
]

var jTimeAway = [
    'Julio Cesar',
    'Digão',
    'Gum',
    'Richard',
    'Ayrton Lucas',
    'Jadson',
    'Daniel',
    'Marcos Junior',
    'Pedro'
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
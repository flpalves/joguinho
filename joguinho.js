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
        time : 'Home',
        jogador : 5
    },
    tempo : 0

}
// jogo.timeHome.jogadores[3] = 'hue';
console.table(jogo.timeHome.inicial)
console.table(jogo.timeHome.jogadores[0].acoes[1]());
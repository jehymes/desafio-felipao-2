function calculoDeSaldoDeRankeadas(saldoDeVitorias, saldoDeDerrotas){
    return saldoDeVitorias - saldoDeDerrotas;
}

function nivelRanked(saldoDeRankeadas) {
    let nivel;

    if(saldoDeRankeadas <= 10){
        nivel = "Ferro";
    } else if(saldoDeRankeadas >= 11 && saldoDeRankeadas <= 20){
        nivel = "Bronze"
    } else if(saldoDeRankeadas >= 21 && saldoDeRankeadas <= 50){
        nivel = "Prata"
    } else if(saldoDeRankeadas >= 51 && saldoDeRankeadas <= 80){
        nivel = "Ouro"
    } else if(saldoDeRankeadas >= 81 && saldoDeRankeadas <= 90){
        nivel = "Diamante"
    } else if(saldoDeRankeadas >= 91 && saldoDeRankeadas <= 100){
        nivel = "Lendário"
    } else if(saldoDeRankeadas >= 101){
        nivel = "Imortal"
    };

    return nivel
}

function statusHeroRanked(listHeroes){
    for(const hero in listHeroes){
        if(listHeroes.hasOwnProperty(hero)){
            let saldo = calculoDeSaldoDeRankeadas(listHeroes[hero][0], listHeroes[hero][1]);
            let nivel = nivelRanked(saldo);

            console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`)
        }
    }
}

let listHeroes = {
    "XIX.Detonador.XIX": [356, 125],
    "BillyBongs": [56, 352],
    "JackVigort": [115, 80],
    "MellyBarthey": [35, 98]
};

statusHeroRanked(listHeroes);
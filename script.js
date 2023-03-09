function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var quantidadeSeries,contador,exercicio, quantidadeFeita;

quantidadeSeries = Number (prompt ("Quantas series de exercicio deseja fazer? "));
exercicio = prompt("Qual o exercicio deseja fazer?");
quantidadeFeita = Number (prompt("Quantas series você ja fez?"));

var resumo = quantidadeSeries - quantidadeFeita;

if(quantidadeFeita == quantidadeSeries){
    mostra(`<h2>Você escolheu fazer ${quantidadeSeries} séries de ${exercicio}</h2>`);
    mostra(`<h2>Restam ${resumo} series</h2>`);
    mostra(`<h2>Você concluiu todas as séries !!!</h2>`);
    mostra(`<h2>Parabens !!!</h2>`);
}else{
    if(quantidadeFeita > quantidadeSeries){
        mostra(`<h2>Você escolheu fazer ${quantidadeSeries} séries de ${exercicio}</h2>`);
        mostra(`<h2>Você fez ${quantidadeFeita} series !!!</h2>`);
        mostra(`<h2>Você fez além da sua meta !!!</h2>`);
        mostra(`<h2>Parabens !!!</h2>`);
    }else{
        mostra(`<h2>Até o momento você fez ${quantidadeFeita} series</h2>`);
        mostra(`<h2>Restam ${resumo} series</h2>`);
        mostra(`<h2>Força! Voce consegue !</h2>`);
    }
}


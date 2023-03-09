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
    mostra(`<p>Você escolheu fazer ${quantidadeSeries} séries de ${exercicio}</p>`);
    mostra(`<p>Restam ${resumo} series</p>`);
    mostra(`<p>Você concluiu todas as séries !!!</p>`);
    mostra(`<p>Parabens !!!</p>`);
}else{
    if(quantidadeFeita > quantidadeSeries){
        mostra(`<p>Você escolheu fazer ${quantidadeSeries} séries de ${exercicio}</p>`);
        mostra(`<p>Você fez ${quantidadeFeita} series !!!</p>`);
        mostra(`<p>Você fez além da sua meta !!!</p>`);
        mostra(`<p>Parabens !!!</p>`);
    }else{
        mostra(`<p>Até o momento você fez ${quantidadeFeita} series</p>`);
        mostra(`<p>Restam ${resumo} series</p>`);
        mostra(`<p>Força! Voce consegue !</p>`);
    }
}


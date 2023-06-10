let botas = [
    'Aço',
    'Ionianas', 
    'Mobilidade', 
    'Grevas', 
    'Passos', 
    'Rapidez', 
    'Sapatos'
];

let itens = [
    ['Abraço', 'none'],
    ['Anatema', 'none'],
    ['AnjoGuardiao', 'none'],
    ['Arcanjo', 'gota'],
    ['ArcoAxioma', 'none'],
    ['ArcoEscudo', 'salvavidas'],
    ['Banshee', 'none'],
    ['CajadoAquafluxo', 'none'],
    ['CajadoDoVazio', 'none'],
    ['CanhaoFumegante', 'none'],
    ['ChamaSombria', 'none'],
    ['ChuvaDeCanivete', 'none'],
    ['Cimitarra', 'mercurio'],
    ['ColeteDeEspinhos', 'cortacura'],
    ['Coletora', 'none'],
    ['Colhedor', 'fulgor'],
    ['CoraçaoCongelado', 'none'],
    ['Couraça', 'none'],
    ['Cutelo', 'none'],
    ['Dança', 'none'],
    ['DançarinaFantasma', 'none'],
    ['Dominik', 'penetraçao'],
    ['Egide', 'none'],
    ['Fimbulwinter', 'gota'],
    ['FocoDoHorizonte', 'none'],
    ['ForçaDaNatureza', 'none'],
    ['Garra', 'none'],
    ['Glaive', 'none'],
    ['Impeto', 'none'],
    ['Juramento', 'none'],
    ['LembreteMortal', 'penetraçao'],
    ['Lich', 'fulgor'],
    ['Limiar', 'none'],
    ['LimiteDaRazao', 'none'],
    ['Malmortius', 'alvavidas'],
    ['Manamune', 'gota'],
    ['Mandato', 'none'],
    ['MascaraAbissal', 'none'],
    ['MataCraquens', 'none'],
    ['Mejai', 'none'],
    ['Mikael', 'none'],
    ['Morellonomicon', 'cortacura'],
    ['Nashor', 'none'],
    ['Placa', 'none'],
    ['Pratania', 'mercurio'],
    ['Presa', 'none'],
    ['Putrificador', 'cortacura'],
    ['Quebracascos', 'none'],
    ['QuimiotanqueTurbo', 'none'],
    ['Rabadon', 'none'],
    ['Raivosa', 'hidra'],
    ['Randuin', 'none'],
    ['Redençao', 'none'],
    ['Rei', 'none'],
    ['Runaan', 'none'],
    ['Rylai', 'none'],
    ['Sedenta', 'none'],
    ['Semblante', 'none'],
    ['Serraespada', 'cortacura'],
    ['Serylda', 'penetracao'],
    ['Shojin', 'cdr'],
    ['Stattik', 'none'],
    ['Sterak', 'salvavidas'],
    ['Titanica', 'hidra'],
    ['Turibulo', 'none'],
    ['Warmog', 'none'],
    ['Zeke', 'none'],
    ['Zhonya', 'none'],
];

let mitico =[
    ['BastaoDasEras', 'none'],
    ['Cinturao', 'none'],
    ['ColhedorNoturno', 'none'],
    ['CoracaoDeAco', 'none'],
    ['Coroa', 'none'],
    ['Criafendas', 'none'],
    ['Draktar', 'none'],
    ['Eclipse', 'none'],
    ['EcosDeHelia', 'none'],
    ['ForcaDoVendaval', 'none'],
    ['Glacieterno', 'none'],
    ['Guinsoo', 'none'],
    ['Gume', 'none'],
    ['Hemodrenario', 'none'],
    ['Jaksho', 'none'],
    ['Liandry', 'none'],
    ['Luden', 'none'],
    ['Manopla', 'fulgor'],
    ['Navori', 'cdr'],
    ['PedraLunar', 'none'],
    ['ProtecaoImutavel', 'none'],
    ['Quebrapassos', 'none'],
    ['Ruptor', 'fulgor'],
    ['Shurelya', 'none'],
    ['Solari', 'none'],
    ['Trindade', 'fulgor'],
    ['Virtude', 'none'],
    ['Youmuu', 'none'],
];

var order = 0;
var inventario = [
    ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]
];

function start() {
    var ebotas = ['', '', ''];
    for (let i = 0; i < 3; i++) {
        ebotas[i] = botas[Math.floor(Math.random() * (botas.length))];
        for (let j = 0; j < i; j++) {
            if(ebotas[i] == ebotas[j]){
                i--;
            }
        }
    }
    for (let i = 1; i < 4; i++) {
        var text = ebotas[i-1];
        $("#img"+i).attr("src", "Images/"+ text +".png");
    }
    $("#start").hide();
    $("#main").css("margin-top", "55px");
    order++;
}

$("#img1").on("click", function() {
   escolha(1);
});

$("#img2").on("click", function() {
    escolha(2);
});

$("#img3").on("click", function() {
    escolha(3);
});

function escolha(num) {
    var eitem = [["", ""], ["", ""], ["", ""]];
    if(order != 0 && order <= 6){
        $('#item' + order).css('background-image', 'url(' + $("#img" + num).attr("src") + ')');
        $('#item' + order).css('background-size', "180px 180px");
        var aux = $("#img" + num).attr("src");
        inventario[order - 1][0] = aux.slice(7, aux.length - 4);
        procuraEsp(inventario[order - 1][0], order-1);
        
        if(order == 1){
            
            for (let i = 0; i < 3; i++) {
                eitem[i] = mitico[Math.floor(Math.random() * (mitico.length))];
                for (let j = 0; j < i; j++) {
                    if(eitem[i][0] == eitem[j][0]){
                        i--;
                    }
                }
            }
            for (let i = 1; i < 4; i++) {
                var text = eitem[i-1][0];
                $("#img"+i).attr("src", "Images/"+ text +".png");
            }
        }else{
            for (let i = 0; i < 3; i++) {
                let test = 0;
                eitem[i] = itens[Math.floor(Math.random() * (itens.length))];
                for (let j = 0; j < i; j++) {
                    if(eitem[i][0] == eitem[j][0]){
                        test = 1;
                        i--;
                    }
                }
                if(test){
                    continue;
                }
                for (let j = 0; j < 6; j++) {
                    if(eitem[i][0] == inventario[j]){
                        test = 1;
                        i--;
                    }
                }
            }

            for (let i = 1; i < 4; i++) {
                var text = eitem[i-1][0];
                $("#img"+i).attr("src", "Images/"+ text +".png");
            }
        }
        order++;
    }
}

function procuraEsp(nome, num){
    for (let i = 0; i < itens.length; i++) {
        if(nome == itens[i][0]){
            inventario[num][1] = itens[i][1];
        }
    }
    for (let i = 0; i < mitico.length; i++) {
        if(nome == mitico[i][0]){
            inventario[num][1] = mitico[i][1];
        }
    }
}
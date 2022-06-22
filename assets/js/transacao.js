/*
var listaExtra = localStorage.getItem('listaEx')
if (listaExtra != null) {
    var listaEx = JSON.parse(listaExtra)
} else {
    var listEx = []
}
*/



function exeTrans() {
/*
   localStorage.setItem("arquivo1", document.getElementById("merc").value);
   localStorage.setItem("arquivo2", document.getElementById("val").value);


    localStorage.getItem("arquivo1", document.)


    let valorDigitado = "";

    valorDigitado = document.getElementById('val').value
    document.getElementById('total').innerHTML = valorDigitado


  */  





    var mercado = document.getElementById("merc").value;
    var quantia = document.getElementById("val").value;
    if(mercado == '' || quantia == '') {
        alert("Preencha todos os campos!");
    }
    else {
        document.getElementById("formulario").submit();
    }   

   
   
    
    
}

// 



function moeda(a, e, r, t) {
    let n = ""
      , h = j = 0
      , u = tamanho2 = 0
      , l = ajd2 = ""
      , o = window.Event ? t.which : t.keyCode;
    if (13 == o || 8 == o)
        return !0;
    if (n = String.fromCharCode(o),
    -1 == "0123456789".indexOf(n))
        return !1;
    for (u = a.value.length,
    h = 0; h < u && ("0" == a.value.charAt(h) || a.value.charAt(h) == r); h++)
        ;
    for (l = ""; h < u; h++)
        -1 != "0123456789".indexOf(a.value.charAt(h)) && (l += a.value.charAt(h));
    if (l += n,
    0 == (u = l.length) && (a.value = ""),
    1 == u && (a.value = "0" + r + "0" + l),
    2 == u && (a.value = "0" + r + l),
    u > 2) {
        for (ajd2 = "",
        j = 0,
        h = u - 3; h >= 0; h--)
            3 == j && (ajd2 += e,
            j = 0),
            ajd2 += l.charAt(h),
            j++;
        for (a.value = "",
        tamanho2 = ajd2.length,
        h = tamanho2 - 1; h >= 0; h--)
            a.value += ajd2.charAt(h);
        a.value += r + l.substr(u - 2, u)
    }

    return !1
    
}











/*
class Transacao {

    constructor() {

        //this.negaPosi = funçao comparando valor e setando negativo ou poisitivo 
        this.arrayTransacao = [];


    }

    executarTrans() {
        
        this.lerDados();
        this.adicionar(transacao);
        
        this.listaTabela();
        
    } 

    listaTabela() {

        let tbody = document.getElementById('tbody');

        for(let i = 0; i< this.arrayTransacao.length; i++) {
            let tr = tbody.insertRow();

            let td_merc = tr.insertCell();
            let td_val = tr.insertCell();

            td_merc.innerText = this.arrayTransacao[i].nomeMerc;
            td_val.innerText = this.arrayTransacao[i].nomeVal;
        }

    }

    adicionar(transacao) {
        this.arrayTransacao.push(transacao);
        //this.negaPosi++;
    }

    lerDados() {

        let transacao = {}

       // transacao.negaPosi = this.negaPosi;
        transacao.nomeMerc = document.getElementById('merc').value;
        transacao.nomeVal = document.getElementById('val').value;
        return transacao;

    }

}

var transacao = new Transacao();


*/
































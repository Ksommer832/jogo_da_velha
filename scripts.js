Letra = "X"

function joga(celula){
    celulaclicada = document.getElementById(celula).innerhtml;
    if (celulaclicada == "X" || celulaclicada == "O"){
        alert("Opa, esse quadrado já foi escolhido!");
  }else{
      document.getElementById(celula).innerHTML = Letra;
      if (Letra == "X"){
          Letra = ("O");
      }else{
          Letra = "X";
      }
  }
    }


function verifc(){
    c11 = document.getElementById('ce11').innerHTML;
    c12 = document.getElementById('ce12').innerHTML;
    c13 = document.getElementById('ce13').innerHTML;
    c21 = document.getElementById('ce22').innerHTML;
    c22 = document.getElementById('ce21').innerHTML;
    c23 = document.getElementById('ce23').innerHTML;
    c31 = document.getElementById('ce31').innerHTML;
    c32 = document.getElementById("ce32").innerHTML;
    c33 = document.getElementById("ce33").innerHTML;
    if ((( c11 != ' ') && (c12 != ' ') && (c13 != ' ') &&
    (c11 == c12) && ( c12 == c13)) || (( c11 != ' ') &&
    (c22 != ' ') && (c33 != ' ') && (c11 == c22) &&
    (c22 == c33)) || ((c11 != ' ') && (c21 != ' ') &&
    (c31 != ' ') && (c11 == c21) && (c21 == 31)) || ((c21 != ' ') &&
    (c22 != ' ') && (c23 != ' ') && (c21 == c22) &&
    (c22 == c23) || (( c31 != ' ') && (c32 != ' ') &&
    (c33 != ' ')  && (c13 == c23) && ( c13 == c33)) || (c31 != ' ') &&
    (c22 != ' ') && (c13 != ' ') && (c31 == c22) && (c22 == c13))){
        alert(' Voce ganhou, parabens campeão!!!');
        novo();
    }
function novo(){
    for(i=1; i<4; i++){
        for (j=1; j<4; j++){
            nomecelula = 'cel' + i + j
            document.getElementById(nomecelula).innerHTML =s
        }
    }
}
   
}
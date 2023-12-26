// let mais = document.getElementById("mais");
// let menos = document.getElementById("menos");

// let num = 0;
// let p = document.getElementById("eu");
// p.innerHTML = num;

// function alteraNum(sinal) {
//   let p = document.getElementById("eu");
//   if (sinal == "+") {
//     p.innerHTML = ++num;
//   }

//   if (sinal == "-") {
//     if (p.innerHTML <= 0) return;
//     p.innerHTML = --num;
//   }
// }

// mais.addEventListener("click", () => alteraNum("+"));
// menos.addEventListener("click", () => alteraNum("-"));

let armazenar2 = 0;
let visor = document.getElementById("visor");
let arraydeBotao = document.getElementsByClassName("botao");
let arraydeOperacao = document.getElementsByClassName("operacao");

for (let i = 0; i < arraydeBotao.length; i++) {
  const numeros = arraydeBotao[i];

  numeros.addEventListener("click", (evt) => {
    visor.value = visor.value + evt.target.value;
  });
}

//for dos arrayOperacao que faz os calculos
for (let i = 0; i < arraydeOperacao.length; i++) {
  const operacoes = arraydeOperacao[i];

  operacoes.addEventListener("click", (evt) => {
    let sinal = evt.target.innerHTML;

    // if (!visor.value) return;
    let armazenar = parseInt(visor.value);

    if (sinal == "+") {
      if (visor.value == sinal) return;
      armazenar2 += parseInt(armazenar);
      console.log(armazenar);
      console.log(armazenar2);
    }

    if (sinal == "-") {
      if (visor.value == sinal) return;
      armazenar2 += parseInt(armazenar); // x += y   --->    x = x + y
      console.log(armazenar2);
    }

    if (sinal == "*") {
      if (visor.value == sinal) return;
      armazenar2 = parseInt(armazenar * armazenar2);
      console.log(armazenar2);
    }

    if (sinal == "/") {
      if (visor.value == sinal) return;
      armazenar2 = parseInt(armazenar / armazenar2);
      console.log(armazenar2);
    }

    if (sinal == "C") {
      visor.value = "";
      armazenar = 0;
      armazenar2 = 0;
      return;
    }

    if (sinal == "=") {
      let valorFinal;
      if (!visor.value) return;
      valorFinal = parseInt(visor.value) + armazenar2;
      visor.value = valorFinal;
      armazenar = 0;
      armazenar2 = 0;
      return;
    }
    visor.value = sinal;
  });
}

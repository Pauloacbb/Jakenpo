    /*Usuario Escolher pedra papel tesoura
    Apenas aceitar uma das tres
    Computador Escolher pedra papel tesoura aletoriamente
    Comparar escolha de usario com de computador
    */
    let pontosUsario = 0;
    let pontosComp = 0;

    function escolhaDoUser() {
      let escolhaUser = prompt("Pedra, Papel, Tesoura", "Escolha um");
      console.log("Escolha do Usuario: " + escolhaUser);
      let escolha = escolhaUser.toLocaleLowerCase()
      if (escolha !== "pedra" && escolha !== "papel" && escolha !== "tesoura") {
        alert("Erro");
      }
      return escolha;
    }
    function computerPlay() {
      let aleatorio = ["pedra", "papel", "tesoura"];
      return aleatorio[Math.floor(Math.random() * 3)];
    }
    function playRound(escolha, escolhaComp) {
      if (escolha === escolhaComp) {
        alert("Empate");
      }
      else if (escolha == "pedra" && escolhaComp == "tesoura" || escolha == "papel" && escolhaComp == "pedra" ||
        escolha == "tesoura" && escolhaComp == "papel") {
        alert("Ganhou"); pontosUsario++;
      }
      else if (escolha == "pedra" && escolhaComp == "papel" || escolha == "papel" && escolhaComp == "tesoura" ||
        escolha == "tesoura" && escolhaComp == "pedra") {
        alert("Perdeu"); pontosComp++;
      }
    }
    function game() {
      for (let i = 0; i < 5; i++) {
      let escolhaDoUsuario = escolhaDoUser();
      let escolhaComp = computerPlay();
      console.log("Escolha do Computador: " + escolhaComp);
      playRound(escolhaDoUsuario, escolhaComp);
}
      console.log("Pontos do Usario ", pontosUsario);
      console.log("Pontos do Computador ", pontosComp);
    }
    game();
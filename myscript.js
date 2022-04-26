/*Usuario Escolher pedra papel tesoura
Computador Escolher pedra papel tesoura aletoriamente
Comparar escolha de usario com de computador
*/
let pontosUsario = 0;
let pontosComp = 0;
const resultsDiv = document.querySelector('#resultsDiv');
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let playerSelection = button.id;
    console.log(`Escolha do Usuario: ${playerSelection}`);
    let escolhaComp = computerPlay();
    console.log(`Escolha do Comp: ${escolhaComp}`)
    playRound(playerSelection, escolhaComp);
  });
});

function computerPlay() {
  let aleatorio = ["pedra", "papel", "tesoura"];
  return aleatorio[Math.floor(Math.random() * 3)];
}
function playRound(escolha, escolhaComp) {
  if(pontosUsario == 5){
    const newP = document.createElement("p");
    const pTxt = document.createTextNode(`GANHOU A PARTIDA Pontos do Usuario:${pontosUsario} Pontos do Computador:${pontosComp}`)
    newP.style.color ="blue"
    newP.appendChild(pTxt);
    resultsDiv.appendChild(newP);
    return;
  }
  
  else if(pontosComp == 5){
    const newP = document.createElement("p");
    const pTxt = document.createTextNode(`PERDEU A PARTIDA Pontos do Usuario:${pontosUsario} Pontos do Computador:${pontosComp}`)
    newP.style.color ="purple"
    newP.appendChild(pTxt);
    resultsDiv.appendChild(newP);
    return;
  }

  if (escolha === escolhaComp) {
    const newP = document.createElement("p");
    const pTxt = document.createTextNode(`Empate Pontos do Usuario:${pontosUsario} Pontos do Computador:${pontosComp}`)
    newP.appendChild(pTxt);
    resultsDiv.appendChild(newP);
  }
  else if (escolha == "pedra" && escolhaComp == "tesoura" || escolha == "papel" && escolhaComp == "pedra" ||
    escolha == "tesoura" && escolhaComp == "papel") {
    pontosUsario++;  
    const newP = document.createElement("p");
    const pTxt = document.createTextNode(`Ganhou Pontos do Usuario:${pontosUsario} Pontos do Computador:${pontosComp}`)
    newP.style.color ="green"
    newP.appendChild(pTxt);
    resultsDiv.appendChild(newP);
    
  }
  else if (escolha == "pedra" && escolhaComp == "papel" || escolha == "papel" && escolhaComp == "tesoura" ||
    escolha == "tesoura" && escolhaComp == "pedra") {
    pontosComp++; 
    const newP = document.createElement("p");
    const pTxt = document.createTextNode(`Perdeu Pontos do Usuario:${pontosUsario} Pontos do Computador:${pontosComp}`)
    newP.style.color ="red"
    newP.appendChild(pTxt);
    resultsDiv.appendChild(newP);
    
  } 
    console.log(pontosUsario);
    console.log(pontosComp); 

}

function checkWinner(pontosUsario, pontosComp){
  if(pontosUsario == 5){
    const newP = document.createElement("p");
    const pTxt = document.createTextNode(`GANHOU A PARTIDA Pontos do Usuario:${pontosUsario} Pontos do Computador:${pontosComp}`)
    newP.style.color ="blue"
    newP.appendChild(pTxt);
    resultsDiv.appendChild(newP);
  }
  
  else if(pontosComp == 5){
    const newP = document.createElement("p");
    const pTxt = document.createTextNode(`PERDEU A PARTIDA Pontos do Usuario:${pontosUsario} Pontos do Computador:${pontosComp}`)
    newP.style.color ="purple"
    newP.appendChild(pTxt);
    resultsDiv.appendChild(newP);
  }
  return
}


//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();


  if (nome === "") {
    alert("Digite um nome válido");
    return;
}

    amigos.push(nome);
     const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpando a lista

for (let i = 0; i < amigos.length; i++) {
  const item = document.createElement("li");
  item.textContent = amigos[i];
  lista.appendChild(item);
}

input.value = "";


  
}

function sortearAmigo(){
    
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpando sorteios anteriores
    const item = document.createElement("li");
    item.textContent = amigoSorteado;
    resultado.appendChild(item);
}





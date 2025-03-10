// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    amigos.push(nombre);
    
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);
    
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para sortear.");
        return;
    }
    
    let amigosShuffle = [...amigos];
    amigosShuffle = amigosShuffle.sort(() => Math.random() - 0.5);
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    for (let i = 0; i < amigosShuffle.length; i++) {
        const amigo = amigosShuffle[i];
        const siguienteAmigo = amigosShuffle[(i + 1) % amigosShuffle.length];
        
        const li = document.createElement("li");
        li.textContent = `${amigo} -> ${siguienteAmigo}`;
        resultado.appendChild(li);
    }
}

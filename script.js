function verificarSenha() {
    const senha = document.getElementById("senha").value;
    const senhaCorreta = "6/10/2023";
    const erro = document.getElementById("erro");

    if (senha === senhaCorreta) {
        window.location.href = "mensagem.html";
    } else {
        erro.textContent = "Senha incorreta. Tente novamente!";
    }
}

// Enter funciona como o botão "Entrar"
const inputSenha = document.getElementById("senha");
inputSenha.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verificarSenha();
    }
});

// Botão "Sair"
function sair() {
    window.location.href = "index.html";
}

// Botão "Mostrar Dicas"
function toggleDicas() {
    const box = document.getElementById("boxDicas");
    if (box.style.display === "block") {
        box.style.display = "none";
    } else {
        box.style.display = "block";
    }
}

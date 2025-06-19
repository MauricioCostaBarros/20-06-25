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

function sair() {
    window.location.href = "index.html";
}

// 👉 Aqui é onde você adiciona:
const inputSenha = document.getElementById("senha");

inputSenha.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verificarSenha();
    }
});

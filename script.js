function verificarSenha() {
    const senha = document.getElementById("senha").value;
    const senhaCorreta = "06/10/2023";
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

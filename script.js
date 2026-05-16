const abrirModal = document.getElementById("login-btn-header");
const fecharModal = document.getElementById("fecharModal");
const modal = document.getElementById("modal");

const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const entrarBtn = document.getElementById("entrar-btn");
const mensagemErro = document.getElementById("mensagem-erro");

abrirModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("active");
});

fecharModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.classList.remove("active");
    }
});

entrarBtn.addEventListener("click", () => {

    const email = emailInput.value;
    const senha = senhaInput.value;

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const senhaValida = /^(?=.*[A-Z])(?=.*\d).+$/;

    if(!emailValido.test(email)){
        mensagemErro.innerText = "Digite um email válido.";
        return;
    }

    if(!senhaValida.test(senha)){
        mensagemErro.innerText =
        "A senha precisa ter uma letra maiúscula e um número.";
        return;
    }

    mensagemErro.innerText = "Login válido!";
});
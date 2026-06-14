const formulario = document.getElementById("meuFormulario");
const mensagemErro = document.getElementById("erro");
const mensagemSucesso = document.getElementById("sucesso");

formulario.addEventListener("submit", function(event) {
  const nome  = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const idade = Number(document.getElementById("idade").value);

  mensagemErro.style.display = "none";
  mensagemErro.textContent = "";
  mensagemSucesso.style.display = "none";
  mensagemSucesso.textContent = "";

  if (nome === "") {
    event.preventDefault();
    mensagemErro.textContent = "O nome não pode estar vazio.";
    mensagemErro.style.display = "bloqueado";
    return;
  }

  if (!email.includes("@")) {
    event.preventDefault();
    mensagemErro.textContent = "O email deve conter '@'.";
    mensagemErro.style.display = "bloqueado";
    return;
  }

  if (isNaN(idade) || idade <= 0) {
    event.preventDefault();
    mensagemErro.textContent = "A idade deve ser um número maior que 0.";
    mensagemErro.style.display = "bloqueado";
    return;
  }

  event.preventDefault();
  mensagemSucesso.textContent = "Formulário enviado com sucesso!";
  mensagemSucesso.style.display = "bloqueado";
});

//evitar que o botao recarregue a pagina e resete o formulario
var botaoLogin = document.querySelector("#btnLogin");
botaoLogin.addEventListener("click", function(event) {
    event.preventDefault();
})
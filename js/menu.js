//crio uma variável pro botão clicado
const botaoMenu = document.querySelector(".botao-menu");

//crio uma variável para o menu
const menu = document.querySelector(".menu-lateral");

//crio uma variavel para o body
const body = document.querySelector("body");

//crio a função para que troque o nome da classe do menu (para aparecer e desaparecer o mesmo)
botaoMenu.addEventListener('click', ()=>{
	menu.classList.toggle("menu-ativo");
    body.classList.toggle("body-fixo");
})

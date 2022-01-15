var botao = document.querySelector(".botao-mobile").addEventListener("click", controleNavbar);
var navbar = document.querySelector(".conteudo-navbar");
function controleNavbar (){
    if (navbar.classList.contains("ocultar")){
        document.getElementById("expansao-nav").classList.remove("ocultar");
    }else{
        document.getElementById("expansao-nav").classList.add("ocultar");
       }
    };

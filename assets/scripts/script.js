// Capturando o botão
const goToTopBtn = document.querySelector("#goTopBtn");

// Motramos o botão quando o usuário rolar a página 20px, adicionando o display block
window.onscroll = function () {
  scrollFunction();
};

// Função que faz a verificação da posição do scroll
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
}

// Função que faz o scroll ir até o topo
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

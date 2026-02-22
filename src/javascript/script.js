const mobileBtn = document.getElementById("mobile_btn");
const mobileMenu = document.getElementById("mobile_menu");
const menuItems = document.querySelectorAll("#mobile_nav_list a");
const imagens = document.querySelectorAll(".imagem-projeto");
const cards = document.querySelectorAll(".card");



mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

  imagens.forEach((imagem) => {
    imagem.addEventListener("click", () => {
      const cardAtual = imagem.closest(".card");
      const jaEstaAtivo = cardAtual.classList.contains("ativo");

      cards.forEach((card) => {
        card.classList.remove("ativo");
      });

      if (!jaEstaAtivo) {
        cardAtual.classList.add("ativo");
      }
    });
  });

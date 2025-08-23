
/*----------- Menu Hamburguer ------------*/
  function toggleMenu() {
    // só funciona se a largura da tela for menor que 768px
    if (window.innerWidth <= 768) {
      const menu = document.getElementById("menu");
      menu.classList.toggle("active");
    }
  }
/*--------------------------------------------------------------*/
/*----------- Depoimentos do Index.html ------------*/

  const depoimentos = document.querySelectorAll(".depoimento");
  let indiceAtual = 0;

  function trocarDepoimento() {
    depoimentos[indiceAtual].classList.remove("ativo");
    indiceAtual = (indiceAtual + 1) % depoimentos.length;
    depoimentos[indiceAtual].classList.add("ativo");
  }

  setInterval(trocarDepoimento, 4000); // troca a cada 4 segundos

/*--------------------------------------------------------------*/

/*----------- Modo cozinha ------------*/

  function proximaEtapa(atual, proxima) {
    document.getElementById(atual).style.display = "none";
    document.getElementById(proxima).style.display = "block";
  }

  function finalizar(receitaId) {
    document.querySelectorAll(`#receita-${receitaId} .etapa`).forEach(etapa => etapa.style.display = "none");
    document.getElementById(`${receitaId}-finalizado`).style.display = "block";
  }







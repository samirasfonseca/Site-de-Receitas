
/*----------- Menu Hamburguer ------------*/
  function toggleMenu() {
    // só funciona se a largura da tela for menor que 768px
    if (window.innerWidth <= 768) {
      const menu = document.getElementById("navbar").classList.toggle("active");
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

/*--------------------------------------------------------------*/

/*----------- Receita Individual (accordion no mobile) ------------*/

  // seleciona todos os dropbtn
const dropbtns = document.querySelectorAll('.dropbtn');

dropbtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // evita scroll ao clicar no "#"

    const dropdownContent = btn.nextElementSibling;

    // fecha todos os outros dropdowns
    dropbtns.forEach(otherBtn => {
      if(otherBtn !== btn) {
        otherBtn.nextElementSibling.style.display = 'none';
      }
    });

    // alterna o dropdown clicado
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
  });
});








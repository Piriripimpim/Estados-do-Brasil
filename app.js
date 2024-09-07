let indice = -1
// Função para mudar o fundo
function mudarfundo() {

    // Seleciona o elemento que terá o fundo alterado (neste caso, o corpo)
    const body = document.body;
  
    // Gera um número aleatório entre 0 e 25
    indice = indice+1;
  
    // Obtém a URL da imagem aleatória
    const novaImagem = bandeiras[indice].img;
  
    // Altera o estilo do corpo para aplicar a nova imagem de fundo
  if (indice <= 25) {
    fundoDesfocado.style.backgroundImage = `url(${novaImagem})`;
    console.log(fundoDesfocado.style.backgoundImage);
  } 
  
  else {
    fundoDesfocado.style.backgroundImage = `url("imagem/Bandeiras/istockphoto-176430982-612x612.jpg")`;
    indice = -1
  }
  }

//permitir que o usuário pesquise utizando enter
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
     pesquisar();
  }
})

// função de pesquisa
function pesquisar() {

  let resultado = document.getElementById("resultados-pesquisa")

  let campoPesquisa = document.getElementById("pesquissar").value

  let results = ""
  let descricao = ""
  let titulo = ""
  let tag = ""


if (campoPesquisa == ""){
  resultado.innerHTML = "Por favor digite o nome de algum estado ou região que ele se encontra";
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

    for (let estado of dados) {
      descricao = estado.descricão.toLowerCase()
      titulo = estado.titulo.toLowerCase()
      tag = estado.tag.toLowerCase()
      // estrutura if que indentica se o que foi pesquisado e filtra o resultado
      if (estado.titulo.includes(campoPesquisa) || estado.descricão.includes(campoPesquisa) || estado.tag.includes(campoPesquisa)) {
          results += `<div class="item-resultado"> 
                 <div class="container">
                    <img src= "${estado.mapa}" alt= ${estado.alt}  class="mapa">
                </div>
                <a href="${estado.link}" target="_blank" rel="external"> 
                  <h2 class= "titulo">
                    ${estado.titulo}
                  </h2>
                </a>
               
                <p class= "descricao"> 
                  ${estado.descricão}
                </p>
                    <a href="${estado.link}" target="_blank" rel="external">
                       <button>Saiba mais</button></a> 
                </div>`
              }
            }
  
  if (!results) {
    resultado.innerHTML = "Resultado não encontrado. Veja se está digitado corretamente"
    return
  }

  resultado.innerHTML = results;

}
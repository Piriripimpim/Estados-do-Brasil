let indice = -1
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

  let roberto = document.getElementById("resultados-pesquisa")

  let mario = document.getElementById("pesquissar").value

  let results = ""
  let descricao = ""
  let titulo = ""
  let tag = ""


if (mario == ""){
    roberto.innerHTML = "Por favor digite o nome de algum estado ou região que ele se encontra";
    return
}

mario = mario.toLowerCase()

    for (let estado of dados) {
     descricao = estado.descricão.toLowerCase()
     titulo = estado.titulo.toLowerCase()
    tag = estado.tag.toLowerCase()
    if (estado.titulo.includes(mario) || estado.descricão.includes(mario) || estado.tag.includes(mario)) {
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
    roberto.innerHTML = "Resultado não encontrado, veja se está digitado corrta"
  }

  roberto.innerHTML = results;

}
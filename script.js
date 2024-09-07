//funcao change no checkbox
const checkboxPet = document.getElementById("check-pet");
const checkboxKid = document.getElementById("check-kid");
const checkboxRodas = document.getElementById("check-rodas");

const imagemPet = document.getElementById("pet");
const imagemKid = document.getElementById("kid");
const imagemRodas = document.getElementById("rodas");
const labelPet = document.getElementById("check-label-pet");
const labelKid = document.getElementById("check-label-kid");
const labelRodas = document.getElementById("check-label-rodas");

checkboxPet.addEventListener("change", () => {
  if (checkboxPet.checked) {
    imagemPet.src = "public/pet-roxo.png";
    labelPet.style.backgroundColor = "#cfbef4";
    labelPet.style.color = "#3e2197";
  } else {
    imagemPet.src = "public/pet.png";
    labelPet.style.backgroundColor = "#3e2197";
    labelPet.style.color = "#cfbef4";
  }
});

checkboxKid.addEventListener("change", () => {
  if (checkboxKid.checked) {
    imagemKid.src = "public/kid-roxo.png";
    labelKid.style.backgroundColor = "#cfbef4";
    labelKid.style.color = "#3e2197";
  } else {
    imagemKid.src = "public/kid.png";
    labelKid.style.backgroundColor = "#3e2197";
    labelKid.style.color = "#cfbef4";
  }
});

checkboxRodas.addEventListener("change", () => {
  if (checkboxRodas.checked) {
    imagemRodas.src = "public/rodas-roxo.png";
    labelRodas.style.backgroundColor = "#cfbef4";
    labelRodas.style.color = "#3e2197";
  } else {
    imagemRodas.src = "public/rodas.png";
    labelRodas.style.backgroundColor = "#3e2197";
    labelRodas.style.color = "#cfbef4";
  }
});

//funcao buscar do botao
function buscar(event) {
  event.preventDefault();

  const home = document.getElementById("home");
  const homeRsultado = document.getElementById("resultados");
  home.classList.add("hide");
  homeRsultado.classList.remove("hide");

  // Obtem os elementos do formulário
  const cidadeSelecionada = document.getElementById("cidade").value;
  const pet = document.querySelector('input[name="pet"]').checked;
  const crianca = document.querySelector('input[name="crianca"]').checked;
  const deficiencia = document.querySelector(
    'input[name="deficiencia"]'
  ).checked;

  // Encontrando a cidade na base de dados
  const cidadeEncontrada = cidades.find(
    (cidade) => cidade.cidade === cidadeSelecionada
  );

  // Limpa a área de resultados
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = "";

  // Filtra os resultados
  let conteudo = "";
  let filtroHoteis = "";
  let filtroRestaurantes = "";
  let filtroAtividades = "";
  let estrela;
  let section = document.getElementById("resultados");

  if (cidadeEncontrada) {
    // Filtra os hotéis
    const hoteisFiltrados = cidadeEncontrada.hoteis.filter(
      (hotel) =>
        (!pet || hotel.pet) &&
        (!crianca || hotel.familia) &&
        (!deficiencia || hotel.acessibilidade)
    );
    console.log(hoteisFiltrados);
    for (let hotel of hoteisFiltrados) {
      switch (hotel.estrelas) {
        case 1:
          estrela = `
          <img class="estrela" src="public/estrela.png" alt="estrela"/>
          `;
          break;
        case 2:
          estrela = `
            <img class="estrela" src="public/estrela.png" alt="estrela"/>
              <img class="estrela" src="public/estrela.png" alt="estrela"/>
            `;
          break;
        case 3:
          estrela = `
              <img class="estrela" src="public/estrela.png" alt="estrela"/>
                <img class="estrela" src="public/estrela.png" alt="estrela"/>
                <img class="estrela" src="public/estrela.png" alt="estrela"/>
              `;
          break;
        case 4:
          estrela = `
                <img class="estrela" src="public/estrela.png" alt="estrela"/>
                  <img class="estrela" src="public/estrela.png" alt="estrela"/>
                  <img class="estrela" src="public/estrela.png" alt="estrela"/>
                  <img class="estrela" src="public/estrela.png" alt="estrela"/>
                `;
          break;
        case 5:
          estrela = `
                  <img class="estrela" src="public/estrela.png" alt="estrela"/>
                    <img class="estrela" src="public/estrela.png" alt="estrela"/>
                    <img class="estrela" src="public/estrela.png" alt="estrela"/>
                    <img class="estrela" src="public/estrela.png" alt="estrela"/>
                    <img class="estrela" src="public/estrela.png" alt="estrela"/>
                  `;
          break;
      }

      filtroHoteis += `
        <div class="caixa">
          <div class="esquerda">
            <div >
               <img class="caixa-img" src="public/${hotel.imagem}" alt="${
        hotel.nome
      }"/>
            </div>
            <div class="principal">
              <div class="filtros">
            ${
              hotel.pet
                ? '<img src="public/pet-roxo.png" "alt="ícone de pet"/>'
                : '<img src="public/pet.png" "alt="ícone de pet"/>'
            }
             ${
               hotel.familia
                 ? '<img src="public/kid-roxo.png" "alt="ícone de pet"/>'
                 : '<img src="public/kid.png" "alt="ícone de pet"/>'
             }
             ${
               hotel.acessibilidade
                 ? '<img src="public/rodas-roxo.png" "alt="ícone de pet"/>'
                 : '<img src="public/rodas.png" "alt="ícone de pet"/>'
             }
             </div>
              <h4><a href="${hotel.site}" target="_blank">${hotel.nome}</a></h4>
              <div>${estrela}</div>
          </div>
          </div>

          <div class="preco">
            <p class="p1">A partir de</p>
            <p class="p2">${hotel.valor}</p>
            <a class="botao" href="${hotel.link}" target="_blank">Reserve</a>
          </div>
        </div>
`;
    }
    console.log(filtroHoteis);
    //filtra os restaurantes
    const restaurantesFiltrados = cidadeEncontrada.restaurantes.filter(
      (restaurante) =>
        (!pet || restaurante.pet) &&
        (!crianca || restaurante.familia) &&
        (!deficiencia || restaurante.acessibilidade)
    );

    for (let restaurante of restaurantesFiltrados) {
      filtroRestaurantes += `
     <div class="caixa">
     <div class="esquerda">
       <img class="caixa-img" src="public/${restaurante.imagem}" alt="${
        restaurante.nome
      }"/>
       <div class="principal">
          <div class="filtros">
            ${
              restaurante.pet
                ? '<img src="public/pet-roxo.png" "alt="ícone de pet"/>'
                : '<img src="public/pet.png" "alt="ícone de pet"/>'
            }
             ${
               restaurante.familia
                 ? '<img src="public/kid-roxo.png" "alt="ícone de pet"/>'
                 : '<img src="public/kid.png" "alt="ícone de pet"/>'
             }
             ${
               restaurante.acessibilidade
                 ? '<img src="public/rodas-roxo.png" "alt="ícone de pet"/>'
                 : '<img src="public/rodas.png" "alt="ícone de pet"/>'
             }
             </div>
       <h4><a href="${restaurante.link}" target="_blank">${
        restaurante.nome
      }</a></h4>
       <p>${restaurante.descricao}</p>
       </div>
       </div>
       <div class="preco">
          <a class="botao" href="${restaurante.endereco}" target="_blank">Ir</a>
       </div>
     </div>
`;
    }
    //filtra atividades
    const atividadesFiltradas = cidadeEncontrada.atividades.filter(
      (atividade) =>
        (!pet || atividade.pet) &&
        (!crianca || atividade.familia) &&
        (!deficiencia || atividade.acessibilidade)
    );

    for (let atividade of atividadesFiltradas) {
      filtroAtividades += `
     <div class="caixa">
       <div class="esquerda">
          <img class="caixa-img" src="public/${atividade.imagem}"/>
        <div class="principal">
          <div class="filtros">
            ${
              atividade.pet
                ? '<img src="public/pet-roxo.png" "alt="ícone de pet"/>'
                : '<img src="public/pet.png" "alt="ícone de pet"/>'
            }
             ${
               atividade.familia
                 ? '<img src="public/kid-roxo.png" "alt="ícone de pet"/>'
                 : '<img src="public/kid.png" "alt="ícone de pet"/>'
             }
             ${
               atividade.acessibilidade
                 ? '<img src="public/rodas-roxo.png" "alt="ícone de pet"/>'
                 : '<img src="public/rodas.png" "alt="ícone de pet"/>'
             }
             </div>
          <h4><a href="${atividade.link}" target="_blank">${
        atividade.nome
      }</a></h4>
          <p>${atividade.descricao}</p>
       </div>
       </div>
        <div class="preco">
          <a class="botao" href="${atividade.endereco}" target="_blank">Ir</a>
       </div>
     </div>
`;
    }

    //renderiza o conteudo
    conteudo = `
    <div class="titulo">
      <img class="titulo-imagem" src="public/${cidadeEncontrada.imagem}" alt="${cidadeEncontrada.cidade}"/>
      <h2 class="titulo-cidade">${cidadeEncontrada.cidade}</h2>
    </div>
    <div class="descricao container">
      <p>${cidadeEncontrada.descricao}</p>
    </div>
     <div class="conteudo container">
      <h3>Hotéis</h3>
      ${filtroHoteis}
     </div>
     <div class="conteudo container">
      <h3>Restaurantes</h3>
       ${filtroRestaurantes}
     </div>
     <div class="conteudo container">
     <h3>Atividades</h3>
     ${filtroAtividades}
     </div>
`;

    section.innerHTML = conteudo;
    // ... (código para renderizar os hotéis filtrados)
  } else {
    // Exibir mensagem de cidade não encontrada
    resultadosDiv.textContent = "Cidade não encontrada.";
  }
}

const botaoBuscar = document.querySelector('button[type="submit"]');
botaoBuscar.addEventListener("click", buscar);

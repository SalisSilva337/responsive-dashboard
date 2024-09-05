//função para mostrar o botao de voltar ao topo
let voltarTopo = document.getElementById("voltarTopo");
let barraLateral = document.getElementById("barraLateral");
let infosBarraLateral = document.getElementById("infosBarraLateral");
let abrirBarra = document.getElementById("abrirBarra");

window.addEventListener("scroll", () => {
  let scroll = this.scrollY;

  if (scroll >= 350) {
    voltarTopo.style.display = "flex";
    voltarTopo.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  } else {
    voltarTopo.style.display = "none";
  }
});
barraLateral.addEventListener("mouseenter", () => {
  infosBarraLateral.classList.add("show");
  abrirBarra.style.display = "none";
});
barraLateral.addEventListener("mouseleave", () => {
  infosBarraLateral.classList.remove("show");
  abrirBarra.style.display = "block";
});

let tabelaUsuarios = document.getElementById("tabelaUsuarios");
let inputPesquisa = document.getElementById("inputPesquisa");
let iconePesquisa = document.getElementById("iconePesquisa");
let iconeDica = document.getElementById("iconeDica");
let dica = document.getElementById("dica");
let controleSessoes = document.getElementById("controleSessoes");
let iconeEditar = document.getElementById("iconeEditar");
let modal = document.getElementById("modal");
let modalConteudo = document.getElementById("modalConteudo");
let imgUsuarioBarraLateral = document.getElementById("imgUsuarioBarraLateral");
let nomeUsuario = document.getElementById("nomeUsuario");

let modalCarregarApi = document.getElementById("modalCarregarApi");
let contador = 0;
window.onload = buscarDadosApi();

function buscarDadosApi() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  fetch("https://randomuser.me/api/?results=20&nat=br", options)
    .then((response) => response.json())
    .then((data) => {
      modalCarregarApi.style.display = "none";
      for (let index = 0; index < data.results.length; index++) {
        let urlArray = data.results[index];
        let tr = document.createElement("tr");
        let tdUsuarios = document.createElement("td");

        tdUsuarios.textContent = urlArray.name.first + " " + urlArray.name.last;
        tr.appendChild(tdUsuarios);

        let tdEmail = document.createElement("td");
        tdEmail.textContent = urlArray.email;
        tr.appendChild(tdEmail);

        let tdData = document.createElement("td");

        let dataRegistro = urlArray.registered.date.slice(0, 10);
        tdData.textContent = dataRegistro;
        tr.appendChild(tdData);
        tabelaUsuarios.append(tr);
        tr.style.transition = "0.5s all";

        inputPesquisa.addEventListener("input", () => {
          if (
            inputPesquisa.value == tdUsuarios.textContent ||
            inputPesquisa.value + "@example.com" == tdEmail.textContent ||
            inputPesquisa.value == tdData.textContent
          ) {
            tr.style.backgroundColor = "#111827";
          } else {
            tr.style.backgroundColor = "#172554";
          }
        });
      }

      const interval = setInterval(() => {
        let contador = Math.floor(Math.random() * data.results.length);
        if (contador >= data.results.length) {
          clearInterval(interval);
        }
        let urlArray = data.results[contador];
        let cadaSessao = document.createElement("div");
        cadaSessao.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
        cadaSessao.style.fontSize = "20";

        if (contador % 2 == 0) {
          cadaSessao.style.color = "green";
          cadaSessao.textContent =
            urlArray.name.first + " " + urlArray.name.last + " ingressou...";
        } else {
          cadaSessao.style.color = "red";
          cadaSessao.textContent =
            urlArray.name.first + " " + urlArray.name.last + " desconectou...";
        }

        controleSessoes.appendChild(cadaSessao);
      }, 1500);
    })
    .catch((err) => console.error(err));

  iconeDica.addEventListener("click", () => {
    dica.classList.toggle("show");
  });
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
iconeEditar.onclick = () => {
  modalConteudo.innerHTML = "";
  let divImg = document.createElement("div");
  let divUser = document.createElement("div");

  divImg.id = "divImg";
  divUser.id = "divUser";

  let imgH1 = document.createElement("h1");
  let userH1 = document.createElement("h1");
  imgH1.textContent = "Imagem de Perfil:";
  userH1.textContent = "Nome de Usuário:";
  divImg.appendChild(imgH1);
  divUser.appendChild(userH1);

  let inputModal = document.createElement("input");

  let inputFile = document.createElement("input");
  let imgArea = document.createElement("div");
  let imgArquivo = document.createElement("img");
  let spanComplete = document.createElement("span");
  spanComplete.hidden = true;

  let divBotao = document.createElement("div");
  let botaoSalvar = document.createElement("button");
  divBotao.id = "divBotao";
  botaoSalvar.textContent = "Salvar Alterações";

  botaoSalvar.id = "botaoSalvar";

  divBotao.appendChild(spanComplete);
  divBotao.appendChild(botaoSalvar);

  inputFile.addEventListener("change", uploadImg);

  function uploadImg() {
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    console.log(imgLink);
    imgArquivo.src = imgLink;
  }

  inputFile.id = "inputFile";
  inputFile.type = "file";
  inputFile.accept = "image/*";

  inputModal.id = "inputModal";
  imgArea.id = "imgArea";
  imgArquivo.id = "imgArquivo";

  imgArea.appendChild(imgArquivo);
  divImg.appendChild(imgArea);
  divImg.appendChild(inputFile);
  divUser.appendChild(inputModal);
  divUser.appendChild(divBotao);

  modalConteudo.appendChild(divImg);
  modalConteudo.appendChild(divUser);

  botaoSalvar.addEventListener("click", () => {
    if (inputModal.value == "" && imgArquivo.src == "") {
      spanComplete.hidden = false;
      spanComplete.textContent = "Digite algo no input e adicione uma imagem";
      setTimeout(() => {
        spanComplete.hidden = true;
      }, 2000);
    } else if (inputModal.value == "") {
      spanComplete.hidden = false;
      spanComplete.textContent = "Digite algo no input";
      setTimeout(() => {
        spanComplete.hidden = true;
      }, 2000);
    } else if (imgArquivo.src == "") {
      spanComplete.hidden = false;
      spanComplete.textContent = "Adicione uma imagem";
      setTimeout(() => {
        spanComplete.hidden = true;
      }, 2000);
    } else {
      imgUsuarioBarraLateral.src = imgArquivo.src;
      nomeUsuario.textContent = inputModal.value;
      modal.style.display = "none";
    }
  });

  modal.style.display = "flex";
};

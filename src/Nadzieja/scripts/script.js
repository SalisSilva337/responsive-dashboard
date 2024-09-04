//função para mostrar o botao de voltar ao topo
let voltarTopo = document.getElementById("voltarTopo");
window.addEventListener("scroll", (event) => {
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

let tabelaUsuarios = document.getElementById("tabelaUsuarios");
let inputPesquisa = document.getElementById("inputPesquisa");
let iconePesquisa = document.getElementById("iconePesquisa");
let iconeDica = document.getElementById("iconeDica");
let dica = document.getElementById("dica");
let controleSessoes = document.getElementById("controleSessoes");
let contador = 0;
window.onload = buscarDadosApi();

function buscarDadosApi() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  fetch("https://randomuser.me/api/?results=15&nat=br", options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
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

        let dataRegistro = urlArray.registered.date.slice(0, 9);
        tdData.textContent = dataRegistro;
        tr.appendChild(tdData);
        tabelaUsuarios.append(tr);
        tr.style.transition = "0.5s all";

        inputPesquisa.addEventListener("input", () => {
          if (
            inputPesquisa.value == tdUsuarios.textContent ||
            inputPesquisa.value + "@example.com" == tdEmail.textContent
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
        console.log(contador);
      }, 1500);
    })
    .catch((err) => console.error(err));

  iconeDica.addEventListener("click", () => {
    dica.classList.toggle("show");
  });
}

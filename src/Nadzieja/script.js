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
window.onload = buscarDadosApi();

function buscarDadosApi() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZmNWNjMGU0NDhkZDI0ODA2MTRkYjEwNTIyMjcyMCIsIm5iZiI6MTcyMzgyNTIyMy42NDQ2ODMsInN1YiI6IjY2Mzk1ZGQxNDcwZWFkMDEyYTEzOTdhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hsqu3PPTDgnUa1K9LHgpqKVeH0P475EbPrAlWZkzrBw",
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
      }
    })
    .catch((err) => console.error(err));
}

let ctx = document.getElementById("barChart");

let barChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
      "Domingo",
    ],
    datasets: [
      {
        label: "Nº de sessões",
        data: [12, 45, 3, 5, 2, 3, 10],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

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

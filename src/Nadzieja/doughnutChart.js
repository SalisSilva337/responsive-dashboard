let ctx2 = document.getElementById("doughChart");

let doughChart = new Chart(ctx2, {
  type: "polarArea",
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
        label: "Indicadores de Desempenho",
        data: [12, 45, 3, 5, 2, 3, 10],
        borderWidth: 1,
      },
    ],
  },
  options: {},
});

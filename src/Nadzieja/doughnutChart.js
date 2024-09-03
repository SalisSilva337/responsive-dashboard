let ctx2 = document.getElementById("doughChart");

let doughChart = new Chart(ctx2, {
  type: "doughnut",
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
  options: {},
});

let ctx3 = document.getElementById("barChart3");

let barChart3 = new Chart(ctx3, {
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

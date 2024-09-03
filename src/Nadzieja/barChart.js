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

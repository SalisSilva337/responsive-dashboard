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
        data: [890, 670, 880, 940, 1500, 1300, 1700],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 15,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "white",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
      },
    },
  },
});

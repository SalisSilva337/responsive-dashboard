let ctx3 = document.getElementById("barChart3");

let barChart3 = new Chart(ctx3, {
  type: "bar",
  data: {
    labels: ["Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto"],
    datasets: [
      {
        label: "Usuários Ativos",
        data: [41200, 45000, 68000, 53500, 41000, 51000, 45200],
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

let ctx3 = document.getElementById("barChart3");

let barChart3 = new Chart(ctx3, {
  type: "bar",
  data: {
    labels: ["Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto"],
    datasets: [
      {
        label: "Usuários Ativos",
        data: [15000, 45000, 68000, 53500, 41000, 51000, 45200],
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

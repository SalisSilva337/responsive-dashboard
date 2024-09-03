let ctx2 = document.getElementById("doughChart");

let doughChart = new Chart(ctx2, {
  type: "polarArea",
  data: {
    labels: [
      "Dias de Correção de Bugs",
      "Dias de Otimização da Dashboard",
      "Dias de Manutenção do Servidor",
    ],
    datasets: [
      {
        label: "Nº de Dias de Manutenção do NADZIEJA",
        data: [15, 30, 19],
        borderWidth: 1,
        color: "white",
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

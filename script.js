    // Chart.defaults.font.family = 'Poppins, sans-serif';
    let ctx = document.querySelector("#revenueChart");
    ctx.height = 150;
    let revChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "sept 1",
          "sept 3",
          "sept 6",
          "sept 9",
          "sept 12",
          "sept 15",
          "sept 18",
          "sept 21",
          "sept 24",
          "sept 27",
          "sept 30",
        ],
        datasets: [
          {
            label: "views",
            borderColor: "#2ec3a3",
            borderWidth: "3",
            backgroundcolor: "rgba(235,247,245,0.7)",
            data: [0, 30, 60, 25, 60, 25, 50, 10, 50, 90, 120],
          },
          {
            label: "Watch time",
            borderColor: "#396aff",
            borderWidth: "3",
            backgroundcolor: "rgba(233,238,253,0.7)",
            data: [0, 60, 25, 100, 20, 75, 30, 55, 20, 60, 20],
          },
        ],
      },
      options: {
        responsive: true,
        tooltips: {
          intersect: false,
          node: "index",
        },
      },
    });
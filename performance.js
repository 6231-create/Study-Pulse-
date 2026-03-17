var subjects = [
  { name: "Mathematics",      score: 62, change: "+12%" },
  { name: "Physics",          score: 71, change: "+11%" },
  { name: "Computer Science", score: 78, change: "+13%" },
  { name: "Chemistry",        score: 55, change: "+13%" },
  { name: "English",          score: 84, change: "+9%"  },
];

function renderChart() {
  var ctx = document.getElementById("barChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: subjects.map(function(s) { return s.name; }),
      datasets: [{
        data: subjects.map(function(s) { return s.score; }),
        backgroundColor: "#3b82f6",
        borderRadius: 6,
        borderSkipped: false,
        barPercentage: 0.55,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) { return " " + context.parsed.y + "%"; }
          }
        }
      },
      scales: {
        y: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 25,
            font: { family: "'DM Sans', sans-serif", size: 12 },
            color: "#9ca3af",
          },
          grid: { color: "#e5e7eb", borderDash: [4, 4] },
          border: { display: false },
        },
        x: {
          ticks: {
            font: { family: "'DM Sans', sans-serif", size: 11 },
            color: "#6b7280",
          },
          grid: { display: false },
          border: { display: false },
        }
      }
    }
  });
}

function renderSummary() {
  var list = document.getElementById("summary-list");
  subjects.forEach(function(s) {
    var div = document.createElement("div");
    div.className = "summary-item";
    div.innerHTML =
      '<div class="summary-left">' +
        '<span class="summary-subject">' + s.name + '</span>' +
        '<span class="summary-current">Current: ' + s.score + '%</span>' +
      '</div>' +
      '<span class="summary-change">' + s.change + '</span>';
    list.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  renderChart();
  renderSummary();
});

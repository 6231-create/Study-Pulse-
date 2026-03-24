// ===== DATA =====

var stats = [
  { value: "69h", label: "Total Study Hours",    color: "blue" },
  { value: "4",   label: "High Priority Topics", color: "red"  },
  { value: "10",  label: "Topics to Cover",      color: "teal" }
];

var sections = [
  {
    priority : "high",
    dot      : "red",
    heading  : "High Priority — Focus First",
    topics   : [
      { title: "Probability",       subject: "Mathematics", hours: 8,  tip: "Focus on Bayes' theorem and conditional probability. Practice with real-world problems." },
      { title: "Calculus",          subject: "Mathematics", hours: 10, tip: "Review integration techniques and practice differential equations daily." },
      { title: "Organic Chemistry", subject: "Chemistry",   hours: 12, tip: "Master reaction mechanisms starting with SN1/SN2. Use molecular models." },
      { title: "Quantum Physics",   subject: "Physics",     hours: 8,  tip: "Start with wave-particle duality basics. Watch visual lectures before solving problems." }
    ]
  },
  {
    priority : "medium",
    dot      : "amber",
    heading  : "Medium Priority — Schedule This Week",
    topics   : [
      { title: "Physical Chemistry", subject: "Chemistry",        hours: 6, tip: "Connect thermodynamics concepts with chemistry applications." },
      { title: "Thermodynamics",     subject: "Physics",          hours: 6, tip: "Focus on laws of thermodynamics and heat engine problems." },
      { title: "Biochemistry",       subject: "Chemistry",        hours: 5, tip: "Study enzyme kinetics and metabolic pathways with diagrams." },
      { title: "Operating Systems",  subject: "Computer Science", hours: 6, tip: "Practice process scheduling and memory management problems." }
    ]
  },
  {
    priority : "low",
    dot      : "teal",
    heading  : "Low Priority — Review When Ready",
    topics   : [
      { title: "Essay Writing",    subject: "English",          hours: 4, tip: "Write one essay daily. Focus on structure: intro, body, conclusion." },
      { title: "Database Systems", subject: "Computer Science", hours: 4, tip: "Practice SQL queries and normalize sample databases." }
    ]
  }
];

// ===== HELPERS =====

var clockIcon =
  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
    '<circle cx="12" cy="12" r="10"/>' +
    '<polyline points="12 6 12 12 16 14"/>' +
  '</svg>';

function cap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ===== RENDER =====

function renderStats() {
  var container = document.getElementById("sp-stats");
  stats.forEach(function(s) {
    var div = document.createElement("div");
    div.className = "sp-stat-card";
    div.innerHTML =
      '<div class="sp-stat-value ' + s.color + '">' + s.value + '</div>' +
      '<div class="sp-stat-label">' + s.label + '</div>';
    container.appendChild(div);
  });
}

function renderSections() {
  var container = document.getElementById("sp-sections");

  sections.forEach(function(sec) {
    // Section heading
    var header = document.createElement("div");
    header.className = "sp-section-header";
    header.innerHTML =
      '<div class="sp-dot ' + sec.dot + '"></div>' +
      '<span>' + sec.heading + '</span>';
    container.appendChild(header);

    // Grid
    var grid = document.createElement("div");
    grid.className = "sp-grid";

    sec.topics.forEach(function(t) {
      var card = document.createElement("div");
      card.className = "sp-card " + sec.priority;
      card.innerHTML =
        '<div class="sp-card-top">' +
          '<div class="sp-card-title">' + t.title + '</div>' +
          '<span class="sp-badge ' + sec.priority + '">' + cap(sec.priority) + '</span>' +
        '</div>' +
        '<div class="sp-card-subject">' + t.subject + '</div>' +
        '<div class="sp-card-tip">' + t.tip + '</div>' +
        '<div class="sp-card-time">' + clockIcon + ' Estimated: ' + t.hours + ' hours</div>';
      grid.appendChild(card);
    });

    container.appendChild(grid);
  });
}

// ===== INIT =====

document.addEventListener("DOMContentLoaded", function() {
  renderStats();
  renderSections();
});

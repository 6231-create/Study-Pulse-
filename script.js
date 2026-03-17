const topics = [
  { subject: "Mathematics",      name: "Probability",        score: 38 },
  { subject: "Chemistry",        name: "Organic Chemistry",  score: 40 },
  { subject: "Physics",          name: "Quantum Physics",    score: 42 },
  { subject: "Mathematics",      name: "Calculus",           score: 45 },
  { subject: "Chemistry",        name: "Physical Chemistry", score: 48 },
  { subject: "Chemistry",        name: "Biochemistry",       score: 50 },
  { subject: "Physics",          name: "Thermodynamics",     score: 55 },
  { subject: "Computer Science", name: "Operating Systems",  score: 58 },
];

const suggestions = [
  { topic: "Probability",        subject: "Mathematics",      text: "Practice with Bayes' theorem problems daily. Try Khan Academy's probability module." },
  { topic: "Organic Chemistry",  subject: "Chemistry",        text: "Focus on reaction mechanisms. Use 3D molecular visualization tools." },
  { topic: "Quantum Physics",    subject: "Physics",          text: "Start with double-slit experiment concepts. Watch MIT OpenCourseWare lectures." },
  { topic: "Calculus",           subject: "Mathematics",      text: "Master limits first, then derivatives. Use Wolfram Alpha to verify solutions." },
  { topic: "Physical Chemistry", subject: "Chemistry",        text: "Connect thermodynamics from Physics to chemical applications." },
  { topic: "Biochemistry",       subject: "Chemistry",        text: "Draw metabolic pathway diagrams. Use flashcards for enzyme names." },
  { topic: "Thermodynamics",     subject: "Physics",          text: "Focus on the three laws. Solve heat engine numerical problems." },
  { topic: "Operating Systems",  subject: "Computer Science", text: "Practice scheduling algorithms by hand. Build a simple process simulator." },
];

function renderTopics() {
  var list = document.getElementById("topics-list");
  topics.forEach(function(t, i) {
    var div = document.createElement("div");
    div.className = "topic-item";
    div.innerHTML =
      '<span class="subject-badge">' + t.subject + '</span>' +
      '<div class="topic-header">' +
        '<span class="topic-name">' + t.name + '</span>' +
        '<div class="topic-score-row">' +
          '<span class="topic-score">' + t.score + '%</span>' +
          '<span class="badge-weak">Weak</span>' +
        '</div>' +
      '</div>' +
      '<div class="progress-bar-bg">' +
        '<div class="progress-bar-fill" id="bar-' + i + '"></div>' +
      '</div>';
    list.appendChild(div);
  });
}

function renderSuggestions() {
  var grid = document.getElementById("suggestions-grid");
  suggestions.forEach(function(s) {
    var div = document.createElement("div");
    div.className = "suggestion-card";
    div.innerHTML =
      '<div class="suggestion-card-header">' +
        '<span class="suggestion-topic">' + s.topic + '</span>' +
        '<span class="suggestion-subject-badge">' + s.subject + '</span>' +
      '</div>' +
      '<div class="suggestion-text">' + s.text + '</div>';
    grid.appendChild(div);
  });
}

function animateBars() {
  setTimeout(function() {
    topics.forEach(function(t, i) {
      var bar = document.getElementById("bar-" + i);
      if (bar) bar.style.width = t.score + "%";
    });
  }, 200);
}

document.addEventListener("DOMContentLoaded", function() {
  renderTopics();
  renderSuggestions();
  animateBars();
});

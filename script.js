document.getElementById("resumeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const get = (id) => document.getElementById(id).value;

  const resumeHTML = `
    <div class="pdf-container">
      <h1>${get("name")}</h1>

      <p><strong>Email:</strong> ${get("email")}</p>
      <p><strong>Phone:</strong> ${get("phone")}</p>
      <p><strong>LinkedIn:</strong> ${get("linkedin")}</p>
      <p><strong>GitHub:</strong> ${get("github")}</p>

      <hr>

      <h2>Education</h2>
      <p>${format(get("education"))}</p>

      <h2>Technical Skills</h2>
      <p>${format(get("skills"))}</p>

      <h2>Certifications</h2>
      <p>${format(get("certifications"))}</p>

      <h2>Projects</h2>
      <p>${format(get("projects"))}</p>

      <h2>Internships</h2>
      <p>${format(get("internships"))}</p>

      <h2>Achievements</h2>
      <p>${format(get("achievements"))}</p>
    </div>
  `;

  document.getElementById("resumeOutput").innerHTML = resumeHTML;
});

function format(text) {
  return text.replace(/\n/g, "<br>");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function downloadResume() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "pt", "a4");

  doc.html(document.getElementById("resumeOutput"), {
    callback: function (pdf) {
      pdf.save("Generated_Resume.pdf");
    },
    x: 20,
    y: 20,
    html2canvas: { scale: 1 }
  });
}

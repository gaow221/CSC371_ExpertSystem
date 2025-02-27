function evaluateApplicant() {
    // Get values from the form
    let pythonCourse = document.getElementById("python_course").value;
    let softwareCourse = document.getElementById("software_engineering_course").value;
    let degree = document.getElementById("degree").value;
    let pythonExperience = parseInt(document.getElementById("python_experience").value);
    let dataExperience = parseInt(document.getElementById("data_experience").value);
    let agileExperience = document.getElementById("agile_experience").value;
    let projectManagementExperience = parseInt(document.getElementById("project_management_experience").value);
    let agileManagementExperience = parseInt(document.getElementById("agile_management_experience").value);
    let expertSystemsExperience = parseInt(document.getElementById("expert_systems_experience").value);
    let dataArchitectureExperience = parseInt(document.getElementById("data_architecture_experience").value);
    let pmiCertification = document.getElementById("pmi_certification").value;
    let usedGit = document.getElementById("used_git").value;
    let agileCourse = document.getElementById("agile_course").value;

    // We'll store ALL qualifying positions here
    let qualifiedPositions = [];

    // Check job qualifications
    // ---------------------------------------------------------
    // 1. Entry-Level Python Engineer
    if (
      pythonCourse === "yes" && 
      softwareCourse === "yes" && 
      (degree === "bachelor" || degree === "master")
    ) {
        qualifiedPositions.push({
            position: "Entry-Level Python Engineer",
            reasoning: "Completed required coursework and hold a Bachelor's or Master's in CS."
        });
    }

    // 2. Python Engineer
    if (
      pythonExperience >= 3 && 
      dataExperience >= 1 && 
      agileExperience === "yes" && 
      (degree === "bachelor" || degree === "master")
    ) {
        qualifiedPositions.push({
            position: "Python Engineer",
            reasoning: "Experience in Python development, data development, Agile projects, and a Bachelor's/Master's in CS."
        });
    }

    // 3. Project Manager
    if (
      projectManagementExperience >= 3 && 
      agileManagementExperience >= 2 && 
      pmiCertification === "yes"
    ) {
        qualifiedPositions.push({
            position: "Project Manager",
            reasoning: "3+ years managing software projects, 2+ years in Agile projects, and PMI Lean Project Management Certification."
        });
    }

    // 4. Senior Knowledge Engineer
    if (
      expertSystemsExperience >= 3 && 
      dataArchitectureExperience >= 2 && 
      degree === "master"
    ) {
        qualifiedPositions.push({
            position: "Senior Knowledge Engineer",
            reasoning: "3+ years using Python to develop Expert Systems, 2+ years in data architecture, and a Master's in CS."
        });
    }

    // Handle desired skills as bonus
    // ---------------------------------------------------------
    let bonus = [];
    if (usedGit === "yes") {
        bonus.push("You have Git experience (bonus for software engineering roles).");
    }
    if (agileCourse === "yes") {
        bonus.push("You have taken an Agile course (bonus for Agile-based positions).");
    }

    // Construct the final result text
    // ---------------------------------------------------------
    let resultText = "";
    if (qualifiedPositions.length === 0) {
        // No positions qualified
        resultText = "You do not qualify for any positions.";
    } else {
        // List all positions qualified
        resultText = "Congratulations! Based on your input, you qualify for the following position(s):<br><ul>";
        qualifiedPositions.forEach((job) => {
            resultText += `
                <li>
                    <strong>${job.position}</strong><br>
                    Reasoning: ${job.reasoning}
                </li>`;
        });
        resultText += "</ul>";
    }

    // Display the result
    document.getElementById("result").innerHTML = resultText;

    // Display bonus messages if any
    if (bonus.length > 0) {
        document.getElementById("bonus").innerHTML = 
            "<strong>Additional Notes:</strong><br>" + bonus.join("<br>");
    } else {
        document.getElementById("bonus").innerText = "";
    }
}

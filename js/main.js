$(document).ready(function() {
  const ButtonProject = document.getElementById("lk_projects");
  ButtonProject.style.textDecoration = "underline";
});

function show(section) {
  /* display contents*/
  const Projects = document.getElementById("projects");
  const Resume = document.getElementById("resume");
  /* Button Ids */
  const ButtonProject = document.getElementById("lk_projects");
  const ButtonResume = document.getElementById("lk_resume");

  if (section === "resume") {
    Projects.style.display = "none";
    Resume.style.display = "block";
    ButtonProject.style.textDecoration = "none";
    ButtonResume.style.textDecoration = "underline";
    /*
    ButtonProject.style.backgroundColor = "white";
    ButtonResume.style.backgroundColor = "#93ff8c";
    */
  } else if (section === "projects") {
    Projects.style.display = "block";
    Resume.style.display = "none";
    ButtonResume.style.textDecoration = "none";
    ButtonProject.style.textDecoration = "underline";
    /*
    ButtonProject.style.backgroundColor = "#93ff8c";
    ButtonResume.style.backgroundColor = "white";
    */
  }
}

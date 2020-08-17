console.log("hello");



function show(section) {
    const Projects = document.getElementById("projects");
    const Resume = document.getElementById("resume");
    if (section === 'resume') {
        Projects.style.display="none";
        Resume.style.display="block";
    }
    else if (section === 'projects') {
        Projects.style.display="block";
        Resume.style.display="none";
    }
    console.log(section);
}
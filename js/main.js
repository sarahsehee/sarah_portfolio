function show(section) {
    /* display contents*/
    const Projects = document.getElementById("projects");
    const Resume = document.getElementById("resume");
    /* Button Ids */
    const ButtonProject = document.getElementById("lk_projects");
    const ButtonResume = document.getElementById("lk_resume");
    /* Right Div*/
    const Right = document.getElementById("right_bottom");

    if (section === 'resume') {
        Projects.style.display="none";
        Resume.style.display="block";
        ButtonResume.style.color="var(--color-softpink)";
        ButtonProject.style.color="white";
        Right.style.backgroundColor="var(--color-softpink)";
    }
    else if (section === 'projects') {
        Projects.style.display="block";
        Resume.style.display="none";
        ButtonProject.style.color="#D9FF6F";
        ButtonResume.style.color="white";
        Right.style.backgroundColor="var(--color-highlight)";
    }
}
const About = document.querySelector("#About");
const Contact = document.querySelector("#Contact");
const Project = document.querySelector("#Projects");
const aboutContent = document.querySelector("#About-content");
const contactContent = document.querySelector("#Contact-content");
const projectsContent = document.querySelector("#Projects-content");

About.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    background: "#00aa00",
  });
});

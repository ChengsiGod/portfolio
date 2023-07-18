const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const project = document.querySelector("#projects");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const projectContent = document.querySelector("#projects-content");
const textElement = document.getElementById("effect");
const textElement2 = document.getElementById("effect2");
const text = "Chengsi Zhou";
const text2 =
  "I am a front end developer, I have a good understanding of HTML, CSS, JavaScript, and have basic knowledge of Git. I am also familiar with React...";
let index = 0;
let num = 0;

// Create an object to track open windows
let openWindows = {
  about: null,
  contact: null,
};

const writeText = (callback) => {
  if (index < text.length) {
    textElement.innerText = text.slice(0, index + 1);
    index++;
    setTimeout(() => writeText(callback), 700); // Passing the callback
  } else {
    callback(); // Call the callback function after all text has been written
  }
};

const writeText2 = () => {
  if (num < text2.length) {
    textElement2.innerText = text2.slice(0, num + 1);
    num++;
    setTimeout(writeText2, 100);
  }
};
about.addEventListener("click", () => {
  if (openWindows.about) return; // Check if the about window is already open, if yes, return

  openWindows.about = new WinBox({
    title: "About Me",
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("var(--text-color)");
    },
    onblur: function () {
      this.setBackground("#777");
    },
    onclose: function () {
      openWindows.about = null; // Clear the about window from the object when it is closed
    },
  });
});

contact.addEventListener("click", () => {
  if (openWindows.contact) return; // Check if the contact window is already open, if yes, return

  openWindows.contact = new WinBox({
    title: "Contact Me",
    width: "400px",
    height: "400px",
    top: 100,
    right: 50,
    bottom: 50,
    left: 150,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("var(--text-color)");
    },
    onblur: function () {
      this.setBackground("#777");
    },
    onclose: function () {
      openWindows.contact = null; // Clear the contact window from the object when it is closed
    },
  });
});

project.addEventListener("click", () => {
  if (openWindows.about) return; // Check if the about window is already open, if yes, return

  openWindows.about = new WinBox({
    title: "projects",
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: projectContent,
    onfocus: function () {
      this.setBackground("var(--text-color)");
    },
    onblur: function () {
      this.setBackground("#777");
    },
    onclose: function () {
      openWindows.about = null; // Clear the about window from the object when it is closed
    },
  });
});

writeText(writeText2);

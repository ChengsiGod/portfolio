const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const textElement = document.getElementById("effect");
const text = "Chengsi Zhou";
let index = 0;

// Create an object to track open windows
let openWindows = {
  about: null,
  contact: null,
};

const writeText = () => {
  if (index < text.length) {
    textElement.innerText = text.slice(0, index + 1);
    index++;
    setTimeout(writeText, 700);
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

writeText();

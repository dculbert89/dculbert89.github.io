const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox.png");
  }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUsername();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozzila is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUsername();
  } 
    else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  

myButton.onclick = () => {
    setUsername();
  }
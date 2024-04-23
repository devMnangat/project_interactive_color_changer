let myInterval = null;

function ready() {
  const colorBox = document.getElementById("color-box");

  const colorChangeButton = document.getElementById("change-color-btn");
  colorChangeButton.addEventListener("click", function () {
    var randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
  });
}

function getRandomColor() {
  let counter = 0;
  const myAlert = () => {
    alert("Color has been changed");
    clearInterval(myInterval);
  };

  myInterval = setInterval(myAlert, 300);

  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  return (
    `#${red.toString(16).padStart(2, "0")}${ green.toString(16).padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`
    
  );
}

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

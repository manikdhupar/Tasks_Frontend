//EVENT HANDLERS

document.querySelector(".btn").addEventListener("click", addColors);
//event bubbling added
document.querySelector(".squares").addEventListener("click", copyColor);

//FUNCTIONS

function addColors(e) {
  e.preventDefault();
  let divs = document.querySelectorAll(".square");

  [].forEach.call(divs, div => {
    // do whatever
    div.style.backgroundColor = randomRGB();
    console.log(div.style.color);
  });
}

function randomRGB() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}

function copyColor(e) {
  var hiddenH2 = document.querySelector(".hidden");
  hiddenH2.style.display = "block";
  hiddenH2.innerHTML = e.target.style.backgroundColor;
}

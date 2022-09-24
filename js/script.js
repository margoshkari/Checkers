window.onload = () => {
  CreateElements();
  FillSquares();
};

function CreateElements() {
  var grid = document.getElementById("grid");
  for (let index = 0; index < 64; index++) {
    const newDiv = document.createElement("div");
    newDiv.className = "block";
    grid.appendChild(newDiv);
  }
}
function FillSquares() {
  var index = -1;
  var block = document.getElementsByClassName("block");
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      index++;
      if (i % 2 == 0) {
        if (j % 2 == 0) {
          block[index].style.background = "#EAEAEA";
        } else {
          block[index].style.background = "#A5A5A5";
        }
      } else {
        if (j % 2 == 0) {
          block[index].style.background = "#A5A5A5";
        } else {
          block[index].style.background = "#EAEAEA";
        }
      }
    }
  }
}

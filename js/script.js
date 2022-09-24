window.onload = () => {
  CreateElements();
  FillSquares();
};

function CreateElements() {
  var grid = document.getElementById("grid");
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const newDiv = document.createElement("div");
      newDiv.className = "block";
      if (i < 3 || i > 4) {
        if ((i % 2 == 0 && j % 2 != 0) || (i % 2 != 0 && j % 2 == 0)) {
          const checker = document.createElement("div");
          checker.className = "checker";
          i < 3
            ? (checker.style = "background-color: #131313;")
            : (checker.style = "background-color: #FDFDFD;");
          newDiv.appendChild(checker);
        }
      }

      grid.appendChild(newDiv);
    }
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

function createBoard() {
  const table = document.createElement("div");
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let field = document.createElement("button");
      field.classList.add("board-field");
      table.appendChild(field);
    }
  }
  table.classList.add("table");
  return table;
}

function createMainDiv() {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main-div");
  mainDiv.appendChild(createBoard());
  mainDiv.appendChild(createBoard());
  return mainDiv;
}

export default createMainDiv;

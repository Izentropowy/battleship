import createMainDiv from "./components/boards";
import createFooter from "./components/footer";
import gameSetup from "./components/gameSetup";
import createHeader from "./components/header";
import gameLoop from "./components/gameLoop";

function initializeWebsite() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMainDiv());
  content.appendChild(createFooter());
  const players = gameSetup();
  gameLoop(players[0], players[1]);
}

export default initializeWebsite;

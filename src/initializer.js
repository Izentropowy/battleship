import createMainDiv from "./components/boards";
import createFooter from "./components/footer";
import gameLoop from "./components/gameLoop";
import createHeader from "./components/header";

function initializeWebsite() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMainDiv());
  content.appendChild(createFooter());
  gameLoop();
}

export default initializeWebsite;

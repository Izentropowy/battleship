import createMainDiv from "./components/boards";
import createFooter from "./components/footer";
import createHeader from "./components/header";

function initializeWebsite() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMainDiv());
  content.appendChild(createFooter());
}

export default initializeWebsite;

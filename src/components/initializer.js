import createMainDiv from "./mainDiv";
import createFooter from "./footer";
import createHeader from "./header";

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMainDiv());
  content.appendChild(createFooter());
}

export default initializeWebsite;

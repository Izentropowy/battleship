function createHeader() {
  const header = document.createElement("header");
  const headerContent = document.createElement("h1");
  headerContent.textContent = "Battlefield";
  header.appendChild(headerContent);
  return header;
}

export default createHeader;

function createFooter() {
  const footer = document.createElement("footer");
  const footerContent = document.createElement("h6");
  footerContent.textContent = "Copyright Izentropowy";
  footer.appendChild(footerContent);
  return footer;
}

export default createFooter;

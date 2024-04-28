import initializeWebsite from "./initializer";

initializeWebsite();

export const elements = {
  player1Fields: document.querySelector(".player1 .table"),
  player2Fields: document.querySelector(".player2 .table"),
  player1TableHeader: document.querySelector(".player1 .table-header"),
  player2TableHeader: document.querySelector(".player2 .table-header"),
};

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#theExcuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let pronoun = ["a", "the", "that"];
  let subject = ["Lion", "Sister", "Girlfriend"];
  let action = ["smashed", "ran over", "bit"];
  let possession = ["my foot", "her homework", "his food"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    ". "
  );
};

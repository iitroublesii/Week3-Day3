"use strict";

const output = document.getElementById("output");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");

const jsonForm = document.getElementById("jsonForm");

jsonForm.addEventListener("submit", function (event) {
  event.preventDefault();
  try {
    const items = JSON.parse(jsonForm.jsonInput.value);
    console.log(items);
    output.textContent = items[0];
    output2.textContent = items[1];
    output3.textContent = items[2];
  } catch (error) {
    output.textContent = "";
    output2.textContent = "";
    output3.textContent = "";
  }
});
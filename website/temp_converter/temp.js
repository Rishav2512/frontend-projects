const textbox = document.getElementById("textbox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;
function convert() {
  if (toFarenheit.checked) {
    temp = Number(textbox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(2) + "°F";
    // toFixed(2) is used to round off the result to 2 decimal places
  } else if (toCelcius.checked) {
    temp = Number(textbox.value);
    temp = ((temp - 32) * 5) / 9;
    result.textContent = temp.toFixed(2) + "°C";
  } else {
    result.textContent = " SELECT A UNIT";
  }
}

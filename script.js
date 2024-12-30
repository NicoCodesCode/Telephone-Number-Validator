const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

checkButton.addEventListener("click", () => {
  const phoneNumber = document.getElementById("user-input").value;

  if (!phoneNumber) {
    alert("Please provide a phone number");
  } else {
    result.textContent = validateNumber(phoneNumber);
  }
});

clearButton.addEventListener("click", () => {
  result.textContent = "";
});

function validateNumber(num) {
  const regex =
    /^(?:1\s?)?(?:\d\d\d|\(\d\d\d\))(?:-|\s)?\d\d\d(?:-|\s)?\d\d\d\d$/;

  if (regex.test(num)) {
    return `Valid US number: ${num}`;
  } else {
    return `Invalid US number: ${num}`;
  }
}

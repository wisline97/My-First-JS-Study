const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if (isNaN(age)) {
  parseInt(prompt("Please write a number"));
} else {
  alert("Thank you for writing your age.");
}

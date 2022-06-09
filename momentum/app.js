const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if (isNaN(age) || age < 0) {
  parseInt(prompt("Please write a real positive number"));
} else if (age < 18) {
  alert("You are too young");
} else if (age >= 18 && age <= 50) {
  alert("You can drink");
} else if (age > 50 && age <= 80) {
  alert("You should stop drink");
} else if (age > 80) {
  alert("You can do whatever you want.");
} else {
  alert("You can't drink");
}

function charHistogram(string) {
  var counters = {};
  var letter;
  for (let i = 0; i < string.length; i++) {
    letter = string.charAt(i);
    if (/[a-zA-Z]/.test(letter)) {
      if (counters.hasOwnProperty(letter)) {
        counters[letter] += 1;
      } else {
        counters[letter] = 1;
      }
    }
  }
  return counters;
}

function userPrompt() {
  var string = window.prompt("Enter a string: ");
  var counters = charHistogram(string);
  for (p in counters) {
    console.log(p + ": " + counters[p]);
  }
}
userPrompt();

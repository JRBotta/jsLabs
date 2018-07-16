function countWords(input) {

  if (input.match(/\b\w+\b/g) !== null) {
    return input.match(/\b\w+\b/g).length;
  } else if (input.match(/\w+/) !== null) {
    return 1;
  } else {
    return 0;
  }

}

function userPrompt() {
  var string = window.prompt("Enter a string: ");
  console.log(countWords(string));
}

userPrompt();

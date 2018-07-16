function StringTransformer (string) {
  var regex = /[AEIOUaeiou]/;
  var string2 = string;
  var cont = true;
  var i = 1;
  do {
    string = string2;
    string2 = string.replace(regex, i);
    i++;
    cont = string !== string2;
  } while(cont);

  return string2;
}

function userPrompt() {
  var string = window.prompt("Enter a string: ", "The quick brown fox jumped over the lazy dog");

  console.log(StringTransformer(string));
}

userPrompt();

var structures = [['article','adjective','noun','adverb','verb'],['article','adjective','noun','verb','article','noun'],['article','noun','verb','article','noun','adverb']];

var article = ['the','a'];
var noun = ['dog','cat','monkey','banana','coconut'];
var verb = ['ate','fought','stole'];
var adverb = ['quickly','slowly'];
var adjective = ['blue','green','slow','fast'];

var structure = structures[Math.floor(Math.random()*structures.length)];
var sentence = "";
structure.forEach(function(elem) {
  switch (elem) {
    case 'article':
      sentence += article[Math.floor(Math.random()*article.length)];
      break;
    case 'adjective':
      sentence += adjective[Math.floor(Math.random()*adjective.length)];
      break;
    case 'noun':
      sentence += noun[Math.floor(Math.random()*noun.length)];
      break;
    case 'verb':
      sentence += verb[Math.floor(Math.random()*verb.length)];
      break;
    case 'adverb':
      sentence += adverb[Math.floor(Math.random()*adverb.length)];
      break;
  }
  sentence += " ";
});

console.log(sentence);

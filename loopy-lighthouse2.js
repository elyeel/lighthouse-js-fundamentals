const loopyLighthouse = function(range, multiples, words) {
  if (range.length === 2 && multiples.length === 2 && words.length === 2) {
    for (let i = range[0]; i <= range[1]; i++) {
      if (i % multiples[0] === 0 && i % multiples[1] === 0) {
        console.log(words[0] + words[1]);
      } else if (i % multiples[0] === 0) {
        console.log(words[0]);
      } else if (i % multiples[1] === 0) {
        console.log(words[1]);
      } else {
        console.log(i);
      }
    }
  } else {
    // else start here
  }
};

const loopyLighthouse2 = function(range, multiples, words) {
  const obj = {
    bottom: range[0],
    top: range[1],
    multi1: multiples[0],
    multi2: multiples[1],
    word1: words[0],
    word2: words[1]
  };
  for (let i = obj.bottom; i < obj.top; ++i) {
    let word = "";
    i % obj.multi1 === 0 ? (word += obj.word1) : null;
    i % obj.multi2 === 0 ? (word += obj.word2) : null;
    word ? console.log(word) : console.log(i);
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
loopyLighthouse2([15, 90], [2, 5], ["Batty", "Beacon"]);

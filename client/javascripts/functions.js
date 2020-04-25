// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;

    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
console.log(containsDuplicates("Web App Dev"));
console.log(containsDuplicates("Od or Ev"));
console.log(containsDuplicates("Nth"));

let revWords1 = (sentence) => {
  let words = sentence.split(" ");
  let result;
  for (let i = 0; i < words.length; i++) {
    result = "";
    for (let x = words[i].length - 1; x >= 0; x--) {
      result += words[i][x];
    }
    words[i] = result;
  }
  return words.join(" ");
};
console.log(revWords1("Web App Dev"));
console.log(revWords1("Delta Echo"));


let revWords3 = (str) => {
  let reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

console.log(revWords3("Web App Dev"));
console.log(revWords3("Delta Echo"));



function revWords2(str) {
  let reversed = "";
  str.split("").forEach(function(char) {

    reversed = char + reversed;

  });
  return reversed;
}
console.log(revWords2("Web App Dev"));
console.log(revWords2("Delta Echo"));

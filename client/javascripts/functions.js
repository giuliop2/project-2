// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};

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

let revWords2 = (arr) => {
  let words = arr.split(" ");
  let temp;
  arr.forEach(let i = 0; i < arr.length; i++) {
    temp = "";
    for (let x = arr[i].length - 1; x >= 0; x--) {
      temp += words[i][x];
    }
    words[i] = temp;
  }
  return words.join(" ");
};
console.log(revWords2("Web App Dev"));
console.log(revWords2("Delta Echo"));

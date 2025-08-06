let text = "a car in a cat";
let regex = RegExp("c[ar|at]");
let regex2 = RegExp("pop.*?prop");
let regex3 = RegExp("ferr[et|y|ari]");
let regex4 = RegExp("\\w+ious$");
let regex5 = RegExp("\\s[\\.|,|;|:]");
let regex6 = RegExp("\\w{6}");
let regex7 = RegExp("[^e]+")
console.log("pape".match(regex7));

let text2 = "'I'm the cook,' he said, 'it's my job.'";

console.log(text2.replace(/(^|\P{L})'|'(\P{L}|$)/gu, '$1"$2'));

let validateNumber = "-3.3E-3.3";
let regexNum = /-?(\d+|\d+\.|\.\d+|\d+.\d+)[eE]-?(\d+|\d+\.|\.\d+|\d+.\d+)/g;
let number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/
console.log(validateNumber.match(regexNum));
//console.log("rens".match(regex6));
//console.log("rensevious".match(regex6));
//console.log(" ;".match(regex5));
//console.log(text.match(regex));
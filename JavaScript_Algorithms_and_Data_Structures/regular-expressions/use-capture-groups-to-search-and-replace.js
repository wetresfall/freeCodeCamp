let str = "one two three";
let fixRegex = /(one)\s(two)\s(three)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);
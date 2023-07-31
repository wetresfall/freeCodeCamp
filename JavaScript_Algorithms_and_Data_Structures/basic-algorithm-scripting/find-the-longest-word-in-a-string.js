function findLongestWordLength(str) {
  let words = str.split(" ");
  let longestWordLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWordLength) {
      longestWordLength = words[i].length;
    }
  }
  return longestWordLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
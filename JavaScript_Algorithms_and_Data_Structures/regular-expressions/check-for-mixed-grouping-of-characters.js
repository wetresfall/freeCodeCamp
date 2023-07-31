let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin ([A-Z]\. )?|Eleanor ([A-Z]\. )?)Roosevelt/; 
let result = myRegex.test(myString); 
// After passing the challenge experiment with myString and see how the grouping works
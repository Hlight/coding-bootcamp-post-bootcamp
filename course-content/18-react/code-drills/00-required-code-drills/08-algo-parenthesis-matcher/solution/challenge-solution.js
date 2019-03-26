// Parenthesis Matcher



// `matchParenthesis` takes in a string and the index of an opening parenthesis and returns the index of the parenthesis that corresponds to the parenthesis given
const matchParenthesis = (str, index) => {
  // -------------------- Your Code Here --------------------
  // If the character at the given index isn't an opening parenthesis, return null
  if (str[index] !== "(") return null;
  // Create an array to use as a stack for keeping track of any nested parenthesis
  const nestedParens =[];
  // Iterate through the string starting from the character after the given index
  for (let i=index+1; i<str.length; i++) {
    // If the current character is an opening parenthesis, push it into the stack
    if (str[i] === "(")
      nestedParens.push(i);
    // If the current character is a closing parenthesis
    if (str[i] === ")"){
      // And the stack keeping track of nested parentheticals is empty, return the current index
      if (nestedParens.length === 0) return i;
      // If the stack isn't empty, just pop the last element out of the stack
      else nestedParens.pop();
    }
  }
  // If we've iterated through the entire string without finding a matching parenthesis, return null
  return null
  // --------------------- End Code Area --------------------
}


// Tests
// All tests should console log `true`
var test = "apple (banana grape (pineapple)) orange";
// ------------------------------------------------------------
console.log("==================== Test 1 ====================");
console.log(matchParenthesis(test, 2) === null);

// ------------------------------------------------------------
console.log("==================== Test 2 ====================");
console.log(matchParenthesis(test, 20) === 30);

// ------------------------------------------------------------
console.log("==================== Test 3 ====================");
console.log(matchParenthesis(test, 6) === 31);

// ------------------------------------------------------------
test = "apple (banana grape (pineapple) orange";
console.log("==================== Test 4 ====================");
console.log(matchParenthesis(test, 6) === null);

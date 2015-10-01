// All the methods should be prototyped into the default data type classes, and called from within (String, Number Classes). No functions should be declared outside the prototyping of the classes.
// The methods that have the Regular Expression implementation in their descriptions, must be implemented with Regular Expressions.
// All tests must tests all methods, including the conditionals that they may contain (Arguments are customized, in the tests, so all conditions in the method get tested)

// All the methods are implemented with Regular Expression.
// Code base is efficient, not redundant loops or method calls that could deter performance.

// hasVowels(typeofBoolean​): Returns true if the string contains vowels. This method must implement Regular Expression.
String.prototype.hasVowels = function() {
  if(/[aeiou]/.test(this)) {
    return true;
  } else {
    return false;
  }
};
// toUpper(typeofString​): Returns the String in question but with all characters in upper cases as applicable.
String.prototype.toUpper = function() {
  if (/[a-z]/g) {
      return /[A-Z]/;
  }
};
// toLower(typeofString​): Returns the String in question but with all characters in their lower cases as applicable.
String.prototype.toLower = function() {

};
// ucFirst(typeofString​): Returns the String in question but changes the First Character to an Upper case.
String.prototype.ucFirst = function() {

};
// isQuestion(typeofBoolean​): Return true if the string is a question (ending with a question mark). This method must implement Regular Expression.
String.prototype.isQuestion = function() {
  if(/[?]/.test(this)) {
    return true;
  } else {
    return false;
  }
};
// words(typeofObject​,instanceofArray​): Returns a list of the words in the string, as an Array. This method must implement Regular Expression.
String.prototype.words = function() {

};
// wordCount(typeofNumber​): Returns the number of words in the string. It must make use of the ​words​method above.
String.prototype.wordCount = function() {

};
// toCurrency(typeofString​): Returns a currency representation of the String e.g 11111.11should be represented as 11,111.11.
String.prototype.toCurrency = function() {

};
// fromCurrency(typeofNumber​): Returns a number representation of the Currency String e.g 11,111.11should return 11111.11
String.prototype.fromCurrency = function() {

};
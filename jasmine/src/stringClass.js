// hasVowels(typeofBoolean​): Returns true if the string contains vowels. This method must implement Regular Expression.
String.prototype.hasVowels = function() {
  //to check any of the vowel characters within the []
  return /[aeiou]/.test(this);
};
// toUpper(typeofString​): Returns the String in question but with all characters in upper cases as applicable.
String.prototype.toUpper = function() {
  var newStr = '';
  // loop through the array of characters
  for (var i = 0, n = this.length; i < n; i++) {
    // condition to check for lowercase
    // get the ascii code of every character 
    if (this.charCodeAt(i) >= 97 && /[a-z]/g && this.charCodeAt(i) <= 122) {
      // subtract 32 to make it uppercase
      var upChar = this.charCodeAt(i) - 32;
      newStr += String.fromCharCode(upChar);
    } else {
      newStr += this[i];
    }
  }
  return newStr;
};
// toLower(typeofString​): Returns the String in question but with all characters in their lower cases as applicable.
String.prototype.toLower = function() {
  var newStr = '';
  // loop through the array of characters
  for (var i = 0, n = this.length; i < n; i++) {
    // condition to check for lowercase
    if (this.charCodeAt(i) >= 65 && this.charCodeAt(i) <= 90) {
      // get the ascii code of every character and add 32 to make it lowercase
      var lowChar = this.charCodeAt(i) + 32;
      newStr += String.fromCharCode(lowChar);
    } else {
      newStr += this[i];
    }
  }
  return newStr;
};
// ucFirst(typeofString​): Returns the String in question but changes the First Character to an Upper case.
String.prototype.ucFirst = function() {
  var newStr = '';
  // loop through the array of characters
  for (var i = 0, n = this.length; i < n; i++) {
    // condition to check for lowercase
    // get the ascii code of every character and subtract 32 to make it uppercase
    if (i === 0 && this.charCodeAt(i) >= 97 && this.charCodeAt(i) <= 122) {
      var upChar = this.charCodeAt(i) - 32;
      newStr += String.fromCharCode(upChar);
    } else {
      newStr += this[i];
    }
  }
  return newStr;
};
// isQuestion(typeofBoolean​): Return true if the string is a question (ending with a question mark). This method must implement Regular Expression.
String.prototype.isQuestion = function() {
  // checks whether there is a questionmark at the end of the string.
  return /[\?]+?$/.test(this);
};
// words(typeofObject​,instanceofArray​): Returns a list of the words in the string, as an Array. This method must implement Regular Expression.
String.prototype.words = function() {
  // splits the string where there are white spaces throughout the string
  return this.match(/\w+/gi);
};
// wordCount(typeofNumber​): Returns the number of words in the string. It must make use of the ​words​method above.
String.prototype.wordCount = function() {
  return this.words().length;
};
// toCurrency(typeofString​): Returns a currency representation of the String e.g 11111.11should be represented as 11,111.11.
String.prototype.toCurrency = function() {
  var number = this,
    integer,
    isNumber = /^[+-]?[\d]{1,3}(?:,?[\d]{3})*\.[\d]{2}/.test(number) || /^[+-]?[\d]{1,3}(?:,?[\d]{3})/.test(number);

  if (isNumber) {
    var decimalPart = '',
      currencyString = '';
    integer = number;
    var twoPartNumber = number.split(/\./);
    if (twoPartNumber.length === 2) {
      // store the whole part
      integer = twoPartNumber[0];
      // store the fraction
      decimalPart = twoPartNumber[1];
    } else if (twoPartNumber.length === 1) {
      // if there is only a whole part in the given number string
      integer = twoPartNumber[0];
    }
    for (var i = integer.length - 1, cluster = 0; i >= 0; i--) {
      // cluster is a counter for grouping sets of three digits
      if (cluster % 3 === 0 && cluster !== 0) {
        currencyString += ',';
      }
      currencyString += integer[i];
      cluster++;
    }
    // join the whole part and the fraction after reversing the string
    currencyString = currencyString.split('').reverse().join('');
    // if the decimal part is not empty
    if (decimalPart !== '') {
      return [currencyString, '.', decimalPart].join('');
    }
    return currencyString;
  }
  return number;
};

// fromCurrency(typeofNumber​): Returns a number representation of the Currency String e.g 11,111.11should return 11111.11
String.prototype.fromCurrency = function() {
  var number = this,
    isNumber = /[\d{1,3}(\,)?]+(\.[\d]+)?$/.test(number);

  if (isNumber) {
    return parseFloat(String(number.replace(/\,/g, '')));
  }
  return number;
};

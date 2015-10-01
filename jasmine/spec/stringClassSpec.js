// hasVowels(typeofBoolean​): Returns true if the string contains vowels. This method must implement Regular Expression.
// toUpper(typeofString​): Returns the String in question but with all characters in upper cases as applicable.
// toLower(typeofString​): Returns the String in question but with all characters in their lower cases as applicable.
// ucFirst(typeofString​): Returns the String in question but changes the First Character to an Upper case.
// isQuestion(typeofBoolean​): Return true if the string is a question (ending with a question mark). This method must implement Regular Expression.
// words(typeofObject​,instanceofArray​): Returns a list of the words in the string, as an Array. This method must implement Regular Expression.
// wordCount(typeofNumber​): Returns the number of words in the string. It must make use of the ​words​method above.
// toCurrency(typeofString​): Returns a currency representation of the String e.g 11111.11should be represented as 11,111.11.
// fromCurrency(typeofNumber​): Returns a number representation of the Currency String e.g 11,111.11should return 11111.11


// All the prototyped methods are to be covered fully with tests
// The tests should cover the methods as well as the conditions/procedures that the methods employ
// All the comparators used for the tests must be the optimum or most efficient comparator for the scenario

describe("Has Vowels", function(){
  var chopStory = 'Serve me some chops!';
  it("should return true if the string contains vowels.", function(){
    expect(chopStory.hasVowels()).toBeTruthy();
  });
});

describe("To Upper", function(){
  it("should return the String in question but with all characters in upper cases as applicable.", function(){
    expect(('prime leads the autobots').toUpper()).toBe('PRIME LEADS THE AUTOBOTS');
  });
});

describe("To Lower", function(){
  it("should return the String in question but with all characters in their lower cases as applicable.", function(){
    expect(('mIcKeY mOuSe').toLower()).toBe('mickey mouse');
  });
});

describe("Upper Case First", function(){
  it("should return the String in question but changes the First Character to an Upper case.", function(){
    expect(('justify your existence').ucFirst()).toBe('Justify Your Existence');
  });
});

describe("Is Question", function(){
  it("should return true if the string is a question (ending with a question mark).", function(){
    expect(('Could this be the end of time?').isQuestion()).toBeTruthy();
  });
});

describe("Words", function(){
  it("should return a list of the words in the string, as an Array.", function(){
    expect(('find your courage').words()).toEqual(['find', 'your', 'courage']);
  });
});

describe("Word Count", function(){
  it("should return the number of words in the string. It must make use of the ​words​ method.", function(){
    expect(('find your courage').wordCount()).toEqual(3);
  });
});

describe("To Currency", function(){
  it("should return a currency representation of the String e.g 11111.11 should be represented as 11,111.11.", function(){
    expect(('11111.11').toCurrency()).toEqual('11,111.11');
  });
});

describe("From Currency", function(){
  it("should return a number representation of the Currency String e.g 11,111.11should return 11111.11", function(){
    expect(('11,111.11').fromCurrency()).toEqual('11111.11');
  });
});
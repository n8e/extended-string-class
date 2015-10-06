// hasVowels(typeofBoolean​): Returns true if the string contains vowels. This method must implement Regular Expression.
describe("Has Vowels", function() {  
  it("should return true if the string contains vowels.", function() {
    var chopStory = 'Serve me some chops!';
    expect(chopStory.hasVowels()).toBeTruthy();
  });

  it("should return true if the string contains vowels.", function() {
    expect(('aeiou').hasVowels()).toBeTruthy();
  });

  it("should return true if the string contains vowels.", function() {
    expect(('qwrtypsdfghjkl').hasVowels()).toBeFalsy();
  });
});

// toUpper(typeofString​): Returns the String in question but with all characters in upper cases as applicable.
describe("To Upper", function() {
  it("should return the String in question but with all characters in upper cases as applicable.", function() {
    expect(('prime leads the autobots').toUpper()).toBe('PRIME LEADS THE AUTOBOTS');
  });
});

// toLower(typeofString​): Returns the String in question but with all characters in their lower cases as applicable.
describe("To Lower", function() {
  it("should return the String in question but with all characters in their lower cases as applicable.", function() {
    expect(('mIcKeY mOuSe').toLower()).toBe('mickey mouse');
  });
});

// ucFirst(typeofString​): Returns the String in question but changes the First Character to an Upper case.
describe("Upper Case First", function() {
  it("should return the String in question but changes the First Character to an Upper case.", function() {
    expect(('justify your existence').ucFirst()).toBe('Justify your existence');
  });
});

// isQuestion(typeofBoolean​): Return true if the string is a question (ending with a question mark). This method must implement Regular Expression.
describe("Is Question", function() {
  it("should return true if the string is a question (ending with a question mark).", function() {
    expect(('Could this be the end of time?').isQuestion()).toBeTruthy();
  });

  it("should return true if the string is a question (ending with a question mark).", function() {
    expect(('What? He cannot have escaped!').isQuestion()).toBeFalsy();
  });
});

// words(typeofObject​,instanceofArray​): Returns a list of the words in the string, as an Array. This method must implement Regular Expression.
describe("Words", function() {
  it("should return a list of the words in the string, as an Array.", function() {
    expect(('find your courage').words()).toEqual(['find', 'your', 'courage']);
  });

  it("should return a list of the words in the string, as an Array.", function() {
    expect(('find your courage !@#$%^').words()).toEqual(['find', 'your', 'courage']);
  });
});

// wordCount(typeofNumber​): Returns the number of words in the string. It must make use of the ​words​method above.
describe("Word Count", function() {
  it("should return the number of words in the string. It must make use of the ​words​ method.", function() {
    expect(('find your courage').wordCount()).toEqual(3);
  });

  it("should return the number of words in the string. It must make use of the ​words​ method.", function() {
    expect(('find your courage !@#$%^').wordCount()).toEqual(3);
  });
});

// toCurrency(typeofString​): Returns a currency representation of the String e.g 11111.11should be represented as 11,111.11.
describe("To Currency", function() {
  it("should return a currency representation of the String e.g 11111.11 should be represented as 11,111.11.", function() {
    expect(('11111.11').toCurrency()).toEqual('11,111.11');
  });

  it("should return a currency representation of the String e.g 11111.11111 should be represented as 1,111.11111.", function() {
    expect(('11111.11111').toCurrency()).toEqual('11,111.11111');
  });

  it("should return a currency representation of the String e.g 11111 should return 11,111", function() {
    expect(('11111').toCurrency()).toEqual('11,111');
  });

  it("should return a currency representation of the String e.g 100000000 should return 100,000,000", function() {
    expect(('100000000').toCurrency()).toEqual('100,000,000');
  });
});

// fromCurrency(typeofNumber​): Returns a number representation of the Currency String e.g 11,111.11should return 11111.11
describe("From Currency", function() {
  it("should return a number representation of the Currency String e.g 11,111.11 should return 11111.11", function() {
    expect(('11,111.11').fromCurrency()).toEqual(11111.11);
  });

  it("should return a number representation of the Currency String e.g 11111.11 should return 11111.11", function() {
    expect(('11111.1111').fromCurrency()).toEqual(11111.1111);
  });

  it("should return a number representation of the Currency String e.g 11,111 should return 11111", function() {
    expect(('11,111').fromCurrency()).toEqual(11111);
  });

  it("should return a number representation of the Currency String e.g 11111 should return 11111", function() {
    expect(('11111').fromCurrency()).toEqual(11111);
  });

  it("should return a number representation of the Currency String e.g 100,000,000 should return 100000000", function() {
    expect(('100,000,000').fromCurrency()).toEqual(100000000);
  });
});
var expect = require('chai').expect;
var ExtendedStringClass = require('../src/ExtendedString');

describe('Extended String Class', function () {
  var testString;

  // hasVowels(typeofBoolean​): Returns true if the string contains vowels. This method must implement Regular Expression.
  describe("Has Vowels", function () {
    it("should return true if the string contains vowels.", function () {
      testString = new ExtendedStringClass('Serve me some chops!');
      expect(testString.hasVowels()).to.be.true;
    });

    it("should return true if the string contains vowels.", function () {
      testString = new ExtendedStringClass('aeiou');
      expect(testString.hasVowels()).to.be.true;
    });

    it("should return true if the string contains vowels.", function () {
      testString = new ExtendedStringClass('qwrtypsdfghjkl');
      expect(testString.hasVowels()).to.be.false;
    });
  });

  // toUpper(typeofString​): Returns the String in question but with all characters in upper cases as applicable.
  describe("To Upper", function () {
    it("should return the String in question but with all characters in upper cases as applicable.", function () {
      testString = new ExtendedStringClass('prime leads the autobots');
      expect(testString.toUpper()).to.equal('PRIME LEADS THE AUTOBOTS');
    });
  });

  // toLower(typeofString​): Returns the String in question but with all characters in their lower cases as applicable.
  describe("To Lower", function () {
    it("should return the String in question but with all characters in their lower cases as applicable.", function () {
      testString = new ExtendedStringClass('mIcKeY mOuSe');
      expect(testString.toLower()).to.equal('mickey mouse');
    });
  });

  // ucFirst(typeofString​): Returns the String in question but changes the First Character to an Upper case.
  describe("Upper Case First", function () {
    it("should return the String in question but changes the First Character to an Upper case.", function () {
      testString = new ExtendedStringClass('justify your existence');
      expect(testString.ucFirst()).to.equal('Justify your existence');
    });
  });

  // isQuestion(typeofBoolean​): Return true if the string is a question (ending with a question mark). This method must implement Regular Expression.
  describe("Is Question", function () {
    it("should return true if the string is a question (ending with a question mark).", function () {
      testString = new ExtendedStringClass('Could this be the end of time?');
      expect(testString.isQuestion()).to.be.true;
    });

    it("should return true if the string is a question (ending with a question mark).", function () {
      testString = new ExtendedStringClass('What? He cannot have escaped!');
      expect(testString.isQuestion()).to.be.false;
    });
  });

  // words(typeofObject​,instanceofArray​): Returns a list of the words in the string, as an Array. This method must implement Regular Expression.
  describe("Words", function () {
    it("should return a list of the words in the string, as an Array.", function () {
      testString = new ExtendedStringClass('find your courage');
      expect(testString.words()).to.deep.equal(['find', 'your', 'courage']);
    });

    it("should return a list of the words in the string, as an Array.", function () {
      testString = new ExtendedStringClass('find your courage !@#$%^');
      expect(testString.words()).to.deep.equal(['find', 'your', 'courage']);
    });
  });

  // wordCount(typeofNumber​): Returns the number of words in the string. It must make use of the ​words​method above.
  describe("Word Count", function () {
    it("should return the number of words in the string. It must make use of the ​words​ method.", function () {
      testString = new ExtendedStringClass('find your courage');
      expect(testString.wordCount()).to.equal(3);
    });

    it("should return the number of words in the string. It must make use of the ​words​ method.", function () {
      testString = new ExtendedStringClass('find your courage !@#$%^');
      expect(testString.wordCount()).to.equal(3);
    });
  });

  // toCurrency(typeofString​): Returns a currency representation of the String e.g 11111.11should be represented as 11,111.11.
  describe("To Currency", function () {
    it("should return a currency representation of the String e.g 11111.11 should be represented as 11,111.11.", function () {
      testString = new ExtendedStringClass('11111.11');
      expect(testString.toCurrency()).to.equal('11,111.11');
    });

    it("should return a currency representation of the String e.g 11111.11111 should be represented as 1,111.11111.", function () {
      testString = new ExtendedStringClass('11111.11111');
      expect(testString.toCurrency()).to.equal('11,111.11111');
    });

    it("should return a currency representation of the String e.g 11111 should return 11,111", function () {
      testString = new ExtendedStringClass('11111');
      expect(testString.toCurrency()).to.equal('11,111');
    });

    it("should return a currency representation of the String e.g 100000000 should return 100,000,000", function () {
      testString = new ExtendedStringClass('100000000');
      expect(testString.toCurrency()).to.equal('100,000,000');
    });
  });

  // fromCurrency(typeofNumber​): Returns a number representation of the Currency String e.g 11,111.11should return 11111.11
  describe("From Currency", function () {
    it("should return a number representation of the Currency String e.g 11,111.11 should return 11111.11", function () {
      testString = new ExtendedStringClass('11,111.11');
      expect(testString.fromCurrency()).to.equal(11111.11);
    });

    it("should return a number representation of the Currency String e.g 11111.11 should return 11111.11", function () {
      testString = new ExtendedStringClass('11111.1111');
      expect(testString.fromCurrency()).to.equal(11111.1111);
    });

    it("should return a number representation of the Currency String e.g 11,111 should return 11111", function () {
      testString = new ExtendedStringClass('11,111');
      expect(testString.fromCurrency()).to.equal(11111);
    });

    it("should return a number representation of the Currency String e.g 11111 should return 11111", function () {
      testString = new ExtendedStringClass('11111');
      expect(testString.fromCurrency()).to.equal(11111);
    });

    it("should return a number representation of the Currency String e.g 100,000,000 should return 100000000", function () {
      testString = new ExtendedStringClass('100,000,000');
      expect(testString.fromCurrency()).to.equal(100000000);
    });
  });
});
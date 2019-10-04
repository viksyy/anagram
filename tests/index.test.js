var Anagram = require('../index');

describe("Anagram", () => {
    var anagram;
    beforeAll(() => {
        anagram = new Anagram({
            'estt': ['test', 'test', 'test', 'etst', 'ttse'],
            'aastw': ['astaw'],
            'addss': ['sdasd'],
            'adssw': ['sasdw']
        });
    });

    it("should sortLetters() correct sort", () => {
        var word = anagram.sortLetters('test');
        expect(word).toBe('estt');
    });

    it("should not sortLetters() correct sort", () => {
        var word = anagram.sortLetters('test');
        expect(word).not.toBe('test');
    });

    it("should correct findAllAnagrams(input)", () => {
        var result = anagram.findAllAnagrams('test')
        var resultToBe = ["test", "test", "test", "etst", "ttse"];
        expect(result).toStrictEqual(resultToBe);
    });

    it("should correct findAllAnagrams(input) no anagrams", () => {
        var result = anagram.findAllAnagrams('k')
        var resultToBe = "There isn't any anagrams right now :(";
        expect(result).toStrictEqual(resultToBe);
    });

    it("should correct findAllAnagrams(input) with no string input", () => {
        var result = anagram.findAllAnagrams('')
        var resultToBe = "There isn't any anagrams right now :(";
        expect(result).toStrictEqual(resultToBe);
    });

    it("should correct findAllAnagrams(input) caseSensitive", () => {
        var result = anagram.findAllAnagrams('TEST')
        var resultToBe = ["test", "test", "test", "etst", "ttse"];
        expect(result).toStrictEqual(resultToBe);
    });
});

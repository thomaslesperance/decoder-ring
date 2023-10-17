// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("Substitution function", () => {
    it("should return false if the given alphabet isn't exactly 26 characters long", () => {
        const input = "This is a test.";
        const alphabet = "ahsgetyui";
        const expected = false;
        const actual = substitution.substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });

    it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
        const input = "abc";
        const alphabet = "/.;'[]polkimnjhytgvcfredsw";
        const expected = "/.;";
        const actual = substitution.substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });

    it("should return false if there are any duplicate characters in the given alphabet", () => {
        const input = "abc";
        const alphabet = "//;'[]polkimnjhytgvcfredsw";
        const expected = false;
        const actual = substitution.substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message, before and after encoding or decoding", () => {
        const input = " abc ";
        const alphabet = "/.;'[]polkimnjhytgvcfredsw";
        const expected = " /.; ";
        const actual = substitution.substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const input = "TEST";
        const alphabet = "qazwsxedcrfvtgbyhnujmik,ol";
        const expected = "jsuj";
        const actual = substitution.substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
});
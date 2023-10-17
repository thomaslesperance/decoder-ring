// Write your tests here!

const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("Polybius function should", () => {
    
    it("When encoding, translate the letters i and j to 42", () => {
        input = "i j";
        expected = "42 42";
        actual = polybius.polybius(input, true);

        expect(actual).to.equal(expected);
    });

    it("When decoding, translates 42 to (i/j)", () => {
        input = "42";
        expected = "i/j";
        actual = polybius.polybius(input, false);

        expect(actual).to.equal(expected);
    });

    it("ignore capital letters", () => {
        input = "TEST";
        expected = "44513444";
        actual = polybius.polybius(input, true);

        expect(actual).to.equal(expected);
    });

    it("maintain spaces in the message, before and after encoding", () => {
        input = " TEST ";
        expected = " 44513444 ";
        actual = polybius.polybius(input, true);

        expect(actual).to.equal(expected);
    });

    it("maintain spaces in the message, before and after decoding", () => {
        input = " 44513444 ";
        expected = " test ";
        actual = polybius.polybius(input, false);

        expect(actual).to.equal(expected);
    });
});
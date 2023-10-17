// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("Caesar function should", () => {

    it("return false if the shift value is equal to 0", () => {
        input = "test";
        shift = 0;
        expected = false;
        actual = caesar.caesar(input, shift, true);

        expect(actual).to.equal(expected);
    });

    it("return false if the shift value is less than -25", () => {
        input = "test";
        shift = -29;
        expected = false;
        actual = caesar.caesar(input, shift, true);

        expect(actual).to.equal(expected);
    });

    it("return false if the shift value is greater than 25", () => {
        input = "test";
        shift = 29;
        expected = false;
        actual = caesar.caesar(input, shift, true);

        expect(actual).to.equal(expected);
    });

    it("return false if the shift value is not present", () => {
        input = "test";
        expected = false;
        actual = caesar.caesar(input);

        expect(actual).to.equal(expected);
    });

    it("ignore capital letters", () => {
        input = "TEST";
        shift = 1;
        expected = "uftu";
        actual = caesar.caesar(input, shift, true);

        expect(actual).to.equal(expected);
    });

    it("encoding, handles shifts that go past the end of the alphabet", () => {
        input = "z";
        shift = 2;
        expected = "b";
        actual = caesar.caesar(input, shift, true);

        expect(actual).to.equal(expected);
    });

    it("maintain spaces and other nonalphabetic symbols in the message, before and after encoding", () => {
        input = "! test !";
        shift = 1;
        expected = "! uftu !";
        actual = caesar.caesar(input, shift, true);

        expect(actual).to.equal(expected);
    });

    it("maintain spaces and other nonalphabetic symbols in the message, before and after decoding", () => {
        input = "! uftu !";
        shift = 1;
        expected = "! test !";
        actual = caesar.caesar(input, shift, false);

        expect(actual).to.equal(expected);
    });
});
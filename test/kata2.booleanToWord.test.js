const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns Yes when True and returns No when false", () => {
    expect(booleanToWord(true)).toBe('Yes');
    expect(booleanToWord(false)).toBe('No');
});
});
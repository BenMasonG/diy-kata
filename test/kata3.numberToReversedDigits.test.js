const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits([5,4,3,2,1])).toEqual([1,2,3,4,5]);
    expect(numberToReversedDigits([4,5,7,3,2])).toEqual([2,3,7,5,4]);
    expect(numberToReversedDigits([15,4,23,2,14])).toEqual([14,2,23,4,15]);
    expect(numberToReversedDigits([50,400,3,87,16])).toEqual([16,87,3,400,50]);
  });
});

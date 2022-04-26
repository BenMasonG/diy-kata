const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    test("returns an array showing the age in human years, cat years and dog years", () => {
      expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
      expect(humanCatDogYears(5)).toEqual([5, 36, 39]);
      expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
      expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
      expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
      expect(humanCatDogYears(-5)).toEqual("Error, humans, cats and dogs can't have an age of less than 0");
    });
  });

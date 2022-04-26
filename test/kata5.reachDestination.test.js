const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
    expect(reachDestination(50, 20)).toBe("I should be there in 2.5 hours.");
    expect(reachDestination(75, 96)).toBe("I should be there in 1 hours.");
    expect(reachDestination("Hello", 96)).toBe("Error. Both distance and speed need to be numbers to calculation the journey duration.");
    expect(reachDestination(10, "Hello")).toBe("Error. Both distance and speed need to be numbers to calculation the journey duration.");
    expect(reachDestination("Hello", "Timmy")).toBe("Error. Both distance and speed need to be numbers to calculation the journey duration.");
  });
});

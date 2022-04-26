/* eslint-disable prettier/prettier */
const { getEmployerRole } = require("../src");

  describe("getEmployerRole", () => {
    test("returns the employee's role in the company", () => {
      const employees = [{name: "Satti", role: "Developer"}, {name: "Jenny", role: "Sales Associate"},
    {name: "Javid", role: "Human Resources"}];
    
    expect(getEmployerRole("Javid", employees)).toBe("Human Resources");
    expect(getEmployerRole("Satti", employees)).toBe("Developer");
    expect(getEmployerRole("Jenny", employees)).toBe("Sales Associate");
    });
  });
const Manager = require("../lib/Manager");

test("check officeNumber", () => {
    const officeNumber = 1;
    const manager = new Manager("Erin", 1234, "erin@gmail.com", officeNumber)
    expect(manager.officeNumber).toEqual(officeNumber);
});

test("check getRole", () => {
    const role = "Manager";
    const manager = new Manager("ERin", 1234, "erin@gmail.com", role);
    expect(manager.getRole()).toBe(role);
});

test("check getOfficeNumber", () => {
    const getOfficeNumber = 2;
    const manager = new Manager("Erin", 1234, "erin@gmail.com", getOfficeNumber);
    expect(manager.getOfficeNumber()).toBe(getOfficeNumber);
});
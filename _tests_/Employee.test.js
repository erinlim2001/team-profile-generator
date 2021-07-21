const Employee = require("../lib/Employee");
test("new employee class", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("checks set name", () => {
    const name = "Erin";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("checks set id", () => {
    const id = 27;
    const employee = new Employee("Erin", id);
    expect(employee.id).toBe(id);
});

test("check if you can set email", () => {
    const email = "erinlim2001@gmail.com";
    const employee = new Employee("Erin", 2, email);
    expect(employee.email).toBe(email);
});

test("check getName() method ", () => {
    const name = "Erin";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test("check getId() method ", () => {
    const getId = 27001;
    const employee = new Employee("Erin", getId);
    expect(employee.getId()).toBe(getId);
});

test("check getEmail() method", () => {
    const email = "erin@gmail.com";
    const employee = new Employee("Erin", 1234, email);
    expect(employeeTest.getEmail()).toBe(email);
});

test("check getRole() method", () => {
    const role = "Employee";
    const employee = new Employee("Erin", 1234, "erin@gmail.com", role);
    expect(employee.getRole()).toBe(role);
});
const Intern = require("../lib/Intern");
test("test school method", () => {
    const school = "UT Austin";
    const intern = new Intern("Erin", 1234, "erin@gmail.com", school)
    expect(intern.school).toEqual(school);
});

test("check getRole() method", () => {
    const role = "Intern";
    const intern = new Intern("Erin", 1234, "erin@gmail.com", role);
    expect(intern.getRole()).toBe(role);
});

test("check getSchool() method", () => {
    const school = "UT Austin";
    const intern = new Intern("Erin", 1234, "erin@gmail.com", school);
    expect(intern.getSchool()).toBe(school);
});
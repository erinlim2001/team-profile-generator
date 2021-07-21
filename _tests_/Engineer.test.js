const Engineer = require("../lib/Engineer");
test("check github method", () => {
    const github = "erinlim2001";
    const engineer = new Engineer("Erin", 1234, "erin@gmail.com", github)
    expect(engineer.github).toEqual(github);
});

test("check getRole", () => {
    const role = "Engineer";
    const engineer = new Engineer("Erin", 1234, "erin@gmail.com", role);
    expect(engineer.getRole()).toBe(role);
});

test("check getGithub()", () => {
    const githubAcc = "erinlim2001";
    const engineer = new Engineer("Erin", 1234, "erin@gmail.com", githubAcc);
    expect(engineer.getGithub()).toBe(githubAcc);
});
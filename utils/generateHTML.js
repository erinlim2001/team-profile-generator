const createManager = function(manager) {
    return `<div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">${manager.name} <br><br> Manager</div>
    <div class="card-body text-primary">
    <p class="card-text">ID: ${manager.id}</p>
    <a href="mailto:${manager.email}">Email: ${manager.email}</a>
    <p>Office number: ${manager.officeNumber}</p>
    </div>
  </div>`
}

const createEngineer = function(engineer) {
    return `<div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">${engineer.name} <br><br> Engineer</div>
    <div class="card-body text-primary">
    <p class="card-text">ID: ${engineer.id}</p>
    <a href="mailto:${engineer.email}">Email: ${engineer.email}</a><br>
    <a href="https://github.com/${engineer.github}">Github: ${engineer.github}</a>
    </div>
  </div>`
}

const createIntern = function(intern) {
    return `<div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">${intern.name} <br><br> Intern</div>
    <div class="card-body text-primary">
    <p class="card-text">ID: ${intern.id}</p>
    <a href="mailto:${intern.email}">Email: ${intern.email}</a><br>
    <p>School: ${intern.school}</p>
    </div>
  </div>`
}

//create function that organizes information for the team and returns html for each type of team member inside a html template
function generateHTML(team) {

    const managerArray = [];
    const internArray = [];
    const engineerArray = [];

    for (let i = 0; i < team.length; i++) {
        let employee = team[i];
        let role = employee.getRole();

        switch (role) {
            case "Manager":
                managerArray.push(createManager(employee))
                break;

            case "Intern":
                internArray.push(createIntern(employee))
                break;

            case "Engineer":
                engineerArray.push(createEngineer(employee))
                break;
        }
    }

    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./utils/styles.css"/>    
    <title>My Team</title>
</head>
<body>
<header>
<h1>My Team</h1>
</header>
<main>
<section class="row">
    ${managerArray.join()}
    ${engineerArray.join()}
    ${internArray.join()} 
</section>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>`
}

module.exports = generateHTML;
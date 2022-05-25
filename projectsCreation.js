function projectsCreation(input) {
    let name = input[0];
    let amountOfProjects = Number(input[1]); 
    let timeForProject = Number(input[1] * 3);
    
    let res = `The architect ${name} will need ${timeForProject} hours to complete ${amountOfProjects} project/s.`
  console.log (res)
}
projectsCreation (["Mariq", 4])
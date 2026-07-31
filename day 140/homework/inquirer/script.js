import inquirer from 'inquirer'
inquirer.prompt([
    {
        type: "input",
        name: "feedback",
        message: "did you encounter any problems while using our application?"
    }
]).then((answer)=>{
    console.log(`you answered with ${answer.feedback}. we will focus on fixing/improving the issue, thanks for contributing`)
})
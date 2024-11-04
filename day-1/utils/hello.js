// console.log("welcome...........");
const fs=require('fs')
fs.writeFile("notes.txt", "My first file",()=>{}) // file generated with txt

fs.writeFile("notes.txt", "My second text", () => {})

fs.writeFile("notes.txt", "My second text", (err) => {
    if(err) {
        console.log("some error found")
    }
    else {
        console.log("File created and text generated successfully")
    }
})

fs.appendFile("notes.txt", "\n My new update", (err) => {
    if(err) {
        console.log("some error found")
    }
    else {
        console.log("File appended and text generated successfully")
    }
})

const  chalk=require('chalk')
console.log(chalk.blue('Hello world!'));
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
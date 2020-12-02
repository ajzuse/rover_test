const { processProblem } = require("./src/logic");

const arguments = process.argv.slice(2);

if (!arguments || !arguments.length) {
    console.error('Input filename not found! Please provide an input file.\n\nExample: node app.js input.txt\n\n')
    return
}

processProblem(arguments[0])
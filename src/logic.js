const fs = require('fs')

const createLand = require('./land')

module.exports.processProblem = (fileName) => {
    const fileData = fs.readFileSync(fileName).toString();
    const instructions = fileData.split('\n')

    const landSize = instructions.shift().split(' ')
    if (landSize.length != 2 || isNaN(landSize[0]) || isNaN(landSize[1])) {
        throw Error(`Invalid land size parameters.\n\nPlease provide two integers number separated by whitespace in first line of input file.\n\nProvided data: ${landSize.join(' ')}\n\n`)
    }

    const land = createLand(landSize[0], landSize[1])
    
    let roverIndex = 0
    for (let index = 0; index < instructions.length; index++) {

        if (index % 2 == 0) {
            if (index != 0) {
                land.displayRoverStatus(roverIndex)
                roverIndex++
            }

            const roverCoordinates = instructions[index].split(' ')
            land.createRover(roverCoordinates[0], roverCoordinates[1], roverCoordinates[2])
        } else {
            for (let command of instructions[index]) {
                land.sendCommandToRover(roverIndex, command)
            }
        }
    }

    land.displayRoverStatus(roverIndex)
    
}
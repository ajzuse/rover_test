const createRover = require('./rover')

const land = (x, y) => {
    const maxX = x
    const maxY = y
    const rovers = []

    this.createRover = (x, y, direction) => {
        rovers.push(createRover(x, y, direction))
    } 
    
    this.sendCommandToRover = (roverIndex, command) => {
        rovers[roverIndex].processCommand(command)
    }

    this.displayRoverStatus = (roverIndex) => {
        console.log(rovers[roverIndex].statusReport())
    }

    return this
}

module.exports = land
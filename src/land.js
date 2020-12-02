const createRover = require('./rover')

const land = (x, y) => {
    const maxX = parseInt(x)
    const maxY = parseInt(y)
    const rovers = []

    this.createRover = (x, y, direction) => {
        if (x > maxX || y > maxY) {
            throw Error('Rover position Out of Bounds!')
        }

        rovers.push(createRover(x, y, direction))
    } 
    
    this.sendCommandToRover = (roverIndex, command) => {
        rovers[roverIndex].processCommand(command)

        validateRoverPosition(rovers[roverIndex])
    }

    this.displayRoverStatus = (roverIndex) => {
        console.log(rovers[roverIndex].statusReport())
    }

    const validateRoverPosition = (rover) => {
        if (rover.getX() > maxX || rover.getY() > maxY) {
            throw Error('Rover position Out of Bounds! Rover is lost!')
        }
    }

    return this
}

module.exports = land
const createRover = require('./rover')

const land = (x, y) => {
    if (!x || !y) {
        throw Error('Land need size to create!')
    }

    const maxX = parseInt(x)
    const maxY = parseInt(y)
    const rovers = []

    this.createRover = (x, y, direction) => {
        if (x > maxX || y > maxY) {
            throw Error('Rover position Out of Bounds!')
        }

        rovers.push(createRover(x, y, direction))
    } 

    this.getRover = (roverIndex) => rovers[roverIndex]
    
    this.sendCommandToRover = (roverIndex, command) => {
        rovers[roverIndex].processCommand(command)

        validateRoverPosition(rovers[roverIndex])
    }

    this.displayRoverStatus = (roverIndex) => {
        console.log(rovers[roverIndex].statusReport())
    }

    this.getMaxX = () => {
        return maxX
    }

    this.getMaxY = () => {
        return maxY
    }

    const validateRoverPosition = (rover) => {
        if (rover.getX() > maxX || rover.getY() > maxY) {
            throw Error('Rover position Out of Bounds! Rover is lost!')
        }
        if (rover.getX() < 0 || rover.getY() < 0) {
            throw Error('Rover position Out of Bounds! Rover is lost!')
        }
    }

    return this
}

module.exports = land
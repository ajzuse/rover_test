const directions = {
    N: { L: 'W', R: 'E', x: 0, y: +1 },
    S: { L: 'E', R: 'W', x: 0, y: -1 },
    E: { L: 'N', R: 'S', x: +1, y: 0 },
    W: { L: 'S', R: 'N', x: -1, y: 0 }
}


const rover = (x, y, direction) => {
    x = parseInt(x);
    y = parseInt(y);
    
    this.processCommand = (command) => {
        switch (command) {
            case 'L':
                direction = directions[direction].L
                break;
            case 'R':
                direction = directions[direction].R
                break;
            case 'M':
                x += directions[direction].x
                y += directions[direction].y
                break;
            default:
                throw Error(`Unrecognized Rover Command: ${command}`)
        }
    }

    this.statusReport = () => {
        return `${x} ${y} ${direction}`
    }

    this.getX = () => {
        return x
    }

    this.getY = () => {
        return y
    }

    return this
}

module.exports = rover
const assert = require('assert');
const createLand = require('../src/land')

describe('Land test', () => {
  describe('# land creation test', () => {
    it('should create one land with 2x2 size', () => {
      const land = createLand(2, 2)

      assert.strictEqual(land.getMaxX(), 2)
      assert.strictEqual(land.getMaxY(), 2)
    });

    it('should create one land with 5x3 size', () => {
      const land = createLand(5, 3)

      assert.strictEqual(land.getMaxX(), 5)
      assert.strictEqual(land.getMaxY(), 3)
    });

    it('sholdn\'t create one land with empty x size', () => {
      assert.throws(
        () => createLand(0, 2),
        /Land need size to create!/
      )
    })

    it('sholdn\'t create one land with empty y size', () => {
      assert.throws(
        () => createLand(2, 0),
        /Land need size to create!/
      )
    })
  });

  describe('# land rover test', () => {
    it('should create one rover in 1,1 position oriented to east', () => {
      const land = createLand(5, 5)

      land.createRover(1, 1, 'E')

      assert.strictEqual(land.getRover(0).getX(), 1)
      assert.strictEqual(land.getRover(0).getY(), 1)
      assert.strictEqual(land.getRover(0).getDirection(), 'E')
    })

    it('shouldn\'t create one rover out of land bounds', () => {
      const land = createLand(5, 5)

      assert.throws(
        () => land.createRover(6, 1, 'E'),
      /Rover position Out of Bounds!/
      )
    })

    it('shouldn\'t move rover to out of land bounds', () => {
      const land = createLand(5, 5)

      land.createRover(1, 1, 'W')
      land.sendCommandToRover(0, 'M'),

      assert.throws(
        () => land.sendCommandToRover(0, 'M'),
        /Rover position Out of Bounds! Rover is lost!/
      )
    })

    it('should move rover over the land test 1', () => {
      const land = createLand(5, 5)

      land.createRover(1, 2, 'N')
      land.sendCommandToRover(0, 'L')
      land.sendCommandToRover(0, 'M')
      land.sendCommandToRover(0, 'L')
      land.sendCommandToRover(0, 'M')
      land.sendCommandToRover(0, 'L')
      land.sendCommandToRover(0, 'M')
      land.sendCommandToRover(0, 'L')
      land.sendCommandToRover(0, 'M')
      land.sendCommandToRover(0, 'M')
      
      assert.strictEqual(land.getRover(0).statusReport(), '1 3 N')
    })

    it('should move rover over the land test 2', () => {
      const land = createLand(5, 5)

      land.createRover(3, 3, 'E')
      land.sendCommandToRover(0, 'M')
      land.sendCommandToRover(0, 'M')
      land.sendCommandToRover(0, 'R')
      land.sendCommandToRover(0, 'M')
      land.sendCommandToRover(0, 'M')
      land.sendCommandToRover(0, 'R')
      land.sendCommandToRover(0, 'M')
      land.sendCommandToRover(0, 'R')
      land.sendCommandToRover(0, 'R')
      land.sendCommandToRover(0, 'M')
      
      assert.strictEqual(land.getRover(0).statusReport(), '5 1 E')
    })
  })
});
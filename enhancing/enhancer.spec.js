const { repair } = require('./enhancer.js');
// test away!

const completeItem = {
  name: 'Test Item',
  durability: 75,
  enhancement: 2
};

const brokenItem = {
  name: 'Test Item',
  durability: 50,
  enhancement: 2
};

describe('enhancer', () => {
  describe('repair', () => {
    it('is item repaird', () => {
      expect(repair(brokenItem).durability).toEqual(100);
    });
  });
  describe('get', () => {
    it.todo('check that item is an object');
    it.todo('check that item have name, durability, and enhancement');
  });
});

const { repair, succeed } = require('./enhancer.js');
// test away!

const brokenItem = {
  name: 'Test Item',
  durability: 50,
  enhancement: 2
};

const unbrokenItem = {
  name: 'Test Item',
  durability: 100,
  enhancement: 2
};

const enhancedMaxItem = {
  name: 'Enhanced Test Item',
  durability: 50,
  enhancement: 20
};

const enhancedItem = {
  name: 'Enhanced Test Item',
  durability: 50,
  enhancement: 10
};

describe('enhancer', () => {
  describe('repair', () => {
    it('is item repaird', () => {
      expect(repair(brokenItem).durability).toEqual(100);
      expect(repair(unbrokenItem).durability).toEqual(100);
    });
  });
  describe('succeed', () => {
    it('check that enhancement level is < 20', () => {
      expect(succeed(enhancedItem).enhancement).toBeLessThanOrEqual(20);
      expect(succeed(enhancedMaxItem).enhancement).toBeLessThanOrEqual(20);
    });
    it('check that durability is not changed', () => {
      expect(succeed(enhancedItem).durability).toEqual(enhancedItem.durability);
      expect(succeed(enhancedMaxItem).durability).toEqual(
        enhancedItem.durability
      );
    });
    it.todo('check that item is an object');
    it.todo('check that item have name, durability, and enhancement');
  });
});

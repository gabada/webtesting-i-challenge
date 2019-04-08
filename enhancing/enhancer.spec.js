const { repair, succeed, fail } = require('./enhancer.js');
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
  });
  describe('fail', () => {
    it('check item enhancement level', () => {
      expect(fail(enhancedItem).enhancement).toEqual(enhancedItem.enhancement);
      expect(fail(enhancedMaxItem).enhancement).toEqual(
        enhancedMaxItem.enhancement
      );
    });
    it('check item enhancement level < 15 decrease durability by 5', () => {
      expect(fail(enhancedItem).durability).toEqual(45);
    });
    it('check item enhancement level >= 15 decrease durability by 10', () => {
      expect(fail(enhancedMaxItem).durability).toEqual(40);
    });
    it('check item enhancement level > 16 decrease enhancement by 10', () => {
      expect(fail(enhancedMaxItem).enhancement).toBeGreaterThan(16);
    });
  });
});

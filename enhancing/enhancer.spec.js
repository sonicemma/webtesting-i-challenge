const { repair, succeed, fail, get } = require("./enhancer.js");

describe("enhancer.js", () => {
  describe("repair()", () => {
    it("takes item, changes durability to 100", () => {
      const item = {
        name: "emma",
        durability: 10,
        enhancement: 15
      };
      //arrange
      const expected = {
        name: "emma",
        durability: 100,
        enhancement: 15
      };

      //act
      const repairedItem = repair(item);

      //assert
      expect(repairedItem).toEqual(expected);
    });
  });

  describe("succeed()", () => {
    it("raises enhancement", () => {
      const item = {
        durability: 10,
        enhancement: 15
      };
      const expected = {
        durability: 100,
        enhancement: 16
      };

      const enhancedItem = succeed(item);
      expect(enhancedItem).toEqual(expected);
    });
  });

  describe("fail()", () => {
    it("decreases durability", () => {
      const item = {
        durability: 50,
        enhancement: 14
      };

      const expected = {
        durability: 45,
        enhancement: 14
      };

      const failItem = fail(item);
      expect(failItem).toEqual(expected);
    });

    it("decreases durability", () => {
      const item = {
        durability: 50,
        enhancement: 16
      };

      const expected = {
        durability: 40,
        enhancement: 16
      };

      const failItem = fail(item);
      expect(failItem).toEqual(expected);
    });

    it("decreases durability", () => {
      const item = {
        durability: 50,
        enhancement: 18
      };

      const expected = {
        durability: 40,
        enhancement: 17
      };

      const failItem = fail(item);
      expect(failItem).toEqual(expected);
    });
  });
});
var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {

  it("普通商品，销售期限-1，品质值-1", function() {
    const items = [new Item('normal', 10, 20)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(9);
    expect(shop.items[0].quality).to.equal(19);
  });

  it("普通商品，销售期为0，品质值为2，每日-2，直到0", function() {
    const items = [new Item('normal', 0, 2)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(-1);
    expect(shop.items[0].quality).to.equal(0);
  });

  it("普通商品，销售期为0，品质值为1，每日-2，直到0", function() {
    const items = [new Item('normal', 0, 1)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(-1);
    expect(shop.items[0].quality).to.equal(0);
  });

  it("普通商品，销售期为负值，品质值每日-2，直到0", function() {
    const items = [new Item('normal', -2, 1)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(-3);
    expect(shop.items[0].quality).to.equal(0);
  });

  it("魔法锤有很长的销售期，品质恒定为80", function() {
    const items = [new Item('Sulfuras', 10, 20)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(10);
    expect(shop.items[0].quality).to.equal(80);
  });

  it("法国干酪品质+1，直到50；销售期限-1", function() {
    const items = [new Item('Aged Brie', 0, 50)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(-1);
    expect(shop.items[0].quality).to.equal(50);
  });

  it("法国干酪品质+1，直到50；销售期限-1", function() {
    const items = [new Item('Aged Brie', 10, 48)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(9);
    expect(shop.items[0].quality).to.equal(49);
  });

  it("剧场后台通行证品质+1，直到50；销售期限-1", function() {
    const items = [new Item('Backstage passes', 15, 50)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(14);
    expect(shop.items[0].quality).to.equal(50);
  });

  it("剧场后台通行证品质+2，直到50；销售期限-1", function() {
    const items = [new Item('Backstage passes', 8, 48)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(7);
    expect(shop.items[0].quality).to.equal(50);
  });

  it("剧场后台通行证品质+3，直到50；销售期限-1", function() {
    const items = [new Item('Backstage passes', 3, 47)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(2);
    expect(shop.items[0].quality).to.equal(50);
  });

  it("剧场后台通行证品质为0；销售期限-1", function() {
    const items = [new Item('Backstage passes', -1, 47)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(-2);
    expect(shop.items[0].quality).to.equal(0);
  });

});
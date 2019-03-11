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

});

describe("Gilded Rose", function() {

  it("普通商品，销售期为0或负值，品质值每日-2，直到0", function() {
    const items = [new Item('normal', 0, 1)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(-1);
    expect(shop.items[0].quality).to.equal(0);
  });

});

describe("Gilded Rose", function() {

  it("Sulfuras has long sellIn & stable quality 80", function() {
    const items = [new Item('Sulfuras', 10, 20)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(10);
    expect(shop.items[0].quality).to.equal(80);
  });

});

describe("Gilded Rose", function() {

  it("法国干酪品质+1，直到50；销售期限-1", function() {
    const items = [new Item('Aged Brie', 0, 50)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(-1);
    expect(shop.items[0].quality).to.equal(50);
  });

});

describe("Gilded Rose", function() {

  it("法国干酪品质+1，直到50；销售期限-1", function() {
    const items = [new Item('Aged Brie', 10, 48)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(9);
    expect(shop.items[0].quality).to.equal(49);
  });

});

describe("Gilded Rose", function() {

  it("剧场后台通行证品质+1，直到50；销售期限-1", function() {
    const items = [new Item('Backstage passes', 15, 50)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(14);
    expect(shop.items[0].quality).to.equal(50);
  });

});

describe("Gilded Rose", function() {

  it("剧场后台通行证品质+2，直到50；销售期限-1", function() {
    const items = [new Item('Backstage passes', 8, 48)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(7);
    expect(shop.items[0].quality).to.equal(50);
  });

});

describe("Gilded Rose", function() {

  it("剧场后台通行证品质+3，直到50；销售期限-1", function() {
    const items = [new Item('Backstage passes', 3, 47)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(2);
    expect(shop.items[0].quality).to.equal(50);
  });

});

describe("Gilded Rose", function() {

  it("剧场后台通行证品质为0；销售期限-1", function() {
    const items = [new Item('Backstage passes', -1, 47)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(-2);
    expect(shop.items[0].quality).to.equal(0);
  });

});
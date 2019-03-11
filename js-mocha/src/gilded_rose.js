class Item {
  constructor(name, sellIn, quality){
    // 商品名称
    this.name = name;
    // 销售期
    this.sellIn = sellIn;
    // 品质值
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(function(item){
      if ( item.name === 'Sulfuras' ) { // Sulfuras
        // 长期有效
        item.quality = 80;
      } else if (item.name === 'Aged Brie') { // Aged Brie
        // 商品的品质`Quality`永远不会超过50；
        if(item.quality > 0 && item.quality < 50){
          item.quality++
        }
        item.sellIn--
      } else if (item.name === 'Backstage passes') { // Backstage passes
        // 商品的品质`Quality`永远不会超过50；
        if (item.quality < 50) {
          // 开演前10天以外，每天增1
          if (item.sellIn > 10) {
            item.quality++
          } else if (item.sellIn <= 10 && item.sellIn > 5) {
            // 当离开演不足10天（含10天）时，品质`Quality`每天增2；
            item.quality+=2
          } else if (item.sellIn > 0 && item.sellIn <= 5) {
            // 当离开演不足5天（含5天）时，品质`Quality`每天增3；
            item.quality+=3
          } else {
            // 演出结束，品质就会降为0。
            item.quality=0
          }
        }
        item.sellIn--
      } else { // 普通商品
        // 一旦销售期限过期，品质值`Quality`会每天减2；
        item.sellIn > 0 ? item.quality-- : item.quality-=2
        item.quality < 0 ? item.quality = 0 : ''
        // 销售期限正常减1
        item.sellIn--
      }
    })
  }
}
module.exports = {
  Item,
  Shop
}

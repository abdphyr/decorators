
function PreOrderDecorator() {
  return (target) => {
    target.prototype.calculateTotalPrice = function () {
      return this.products
      .reduce((acc, item) => 
      acc + item.price, 0) * 0.90
    }
  };
}

module.exports.PreOrderDecorator = PreOrderDecorator
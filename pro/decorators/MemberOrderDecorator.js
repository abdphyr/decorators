function MemberOrderDecorator() {
  return (target) => {
    target.prototype.calculateTotalPrice = function () {
      return this.products
      .reduce((acc, item) => 
      acc + item.price, 0) * 0.95
    }
  };
}

module.exports.MemberOrderDecorator = MemberOrderDecorator
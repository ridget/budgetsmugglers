var TransactionInput = Ember.TextField.extend({
  change: function(){
    var currencyAmount = parseFloat(this.value.replace(/,/g, ""))
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.set("value", currencyAmount);
  }
});

export default TransactionInput;

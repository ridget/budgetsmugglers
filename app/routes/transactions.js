var TransactionsRoute = Ember.Route.extend({
  model: function(){
    return [{
      name: "GYG Burritos",
      category: "Dining",
      ammount: "12.00",
      type: "Debit",
      occurred_on: "12/05/2014"
    }];
  }
});

export default TransactionsRoute;

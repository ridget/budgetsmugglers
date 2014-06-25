var TransactionsController = Ember.ArrayController.extend({
  actions: {
    save: function(){
      console.log(this.currentModel);
    }
  }
});

export default TransactionsController;

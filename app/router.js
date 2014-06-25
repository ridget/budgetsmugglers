var Router = Ember.Router.extend({
  location: ENV.locationType,
  LOG_TRANSITIONS: true
});

Router.map(function() {
  this.resource("transactions", function(){
    this.route("new");
  });
});

export default Router;

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      listings: this.store.findAll('listing'),
      categories: this.store.findAll('category')
    });
  },
  actions: {
    saveNewListing(params) {
      console.log(params);
      var newListing = this.store.createRecord('listing', params);
      var category = params.category;
      console.log(category);
      category.get('listings').addObject(newListing);
      newListing.save().then(function(){
        return category.save();
      });
      this.transitionTo('index');
    }
  }
});

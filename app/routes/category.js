import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
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

import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveNewListing() {
      var params = {
        title: this.get("title"),
        price: this.get("price"),
        text: this.get("text"),
        image: this.get('image'),
        category: this.get('category')
      }
      this.sendAction("saveNewListing", params);
      this.transitionTo('category', category);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveNewListing() {
      var params = {
        title: this.get("title"),
        price: this.get("price"),
        text: this.get("text"),
        image: this.get('image'),
        created: this.get('created'),
        category: this.get('category')
      }
      console.log(params);
      console.log(params.category);
      console.log(params.created);
      this.set('title', null);
      this.set('price', null);
      this.set('text', null);
      this.set('image', null);
      this.sendAction("saveNewListing", params);
      this.transitionTo('category');

    }
  }
});

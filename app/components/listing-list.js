import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['created:desc'],
  sortedListings: Ember.computed.sort('listings', 'sortBy'),

});

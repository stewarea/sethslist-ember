import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  text: DS.attr(),
  image: DS.attr(),
  price: DS.attr(),
  created: DS.attr(),
  category: DS.belongsTo('category', {async:true})
});

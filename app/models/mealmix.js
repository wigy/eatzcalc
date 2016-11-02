import DS from 'ember-data';

export default DS.Model.extend({

    recipe: DS.belongsTo('recipe'),
    amount: DS.attr('number', { defaultValue: 0 }),

    energy: Ember.computed('recipe.energy', 'amount', function() {
        return this.get('recipe').get('energy') * this.get('amount');
    }),

    fat: Ember.computed('recipe.fat', 'amount', function() {
        return this.get('recipe').get('fat') * this.get('amount');
    }),

    carbs: Ember.computed('recipe.carbs', 'amount', function() {
        return this.get('recipe').get('carbs') * this.get('amount');
    }),

    protein: Ember.computed('recipe.protein', 'amount', function() {
        return this.get('recipe').get('protein') * this.get('amount');
    }),

    price: Ember.computed('recipe.price', 'amount', function() {
        return this.get('recipe').get('price') * this.get('amount');
    }),
});

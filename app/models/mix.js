import DS from 'ember-data';

export default DS.Model.extend({

    ingredient: DS.belongsTo('ingredient'),
    amount: DS.attr('number', { defaultValue: 0 }),

    weight: Ember.computed('ingredient.weight', 'amount', function() {
        return this.get('ingredient').get('weight') * this.get('amount');
    }),

    energy: Ember.computed('ingredient.energy', 'amount', function() {
        return this.get('ingredient').get('energy') * this.get('weight') / 100;
    }),

    fat: Ember.computed('ingredient.fat', 'amount', function() {
        return this.get('ingredient').get('fat') * this.get('weight') / 100;
    }),

    carbs: Ember.computed('ingredient.carbs', 'amount', function() {
        return this.get('ingredient').get('carbs') * this.get('weight') / 100;
    }),

    protein: Ember.computed('ingredient.protein', 'amount', function() {
        return this.get('ingredient').get('protein') * this.get('weight') / 100;
    }),

    price: Ember.computed('ingredient.price', 'amount', function() {
        return this.get('ingredient').get('price') * this.get('amount');
    }),
});

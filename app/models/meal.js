import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

    foodData: Ember.inject.service(),

    name: DS.attr('string', { defaultValue: null }),
    category: DS.attr('string'),

    parts: DS.attr(), // A list of `mealmix` instances.

    energy: Ember.computed('parts[]', function() {
        return this.get('parts').reduce((val, item) => {return val + item.get('energy');}, 0);
    }),

    fat: Ember.computed('parts[]', function() {
        return this.get('parts').reduce((val, item) => {return val + item.get('fat');}, 0);
    }),

    carbs: Ember.computed('parts[]', function() {
        return this.get('parts').reduce((val, item) => {return val + item.get('carbs');}, 0);
    }),

    protein: Ember.computed('parts[]', function() {
        return this.get('parts').reduce((val, item) => {return val + item.get('protein');}, 0);
    }),

    price: Ember.computed('parts[]', function() {
        return this.get('parts').reduce((val, item) => {return val + item.get('price');}, 0);
    }),

    add: function(num, what) {

        this.get('foodData').getRecipe(what).then(recipe => {
            let mealmix = this.get('store').createRecord('mealmix', {
                amount: num,
                recipe: recipe
            });
            if (!this.get('parts')) {
                this.set('parts', Ember.ArrayProxy.create({content: Ember.A([])}));
            }
            this.get('parts').addObject(mealmix);
        });
    },
});

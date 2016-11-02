import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

    name: DS.attr('string', { defaultValue: null }),
    description: DS.attr('string', { defaultValue: null }),

    parts: DS.attr(), // A list of `mix` instances.

    weight: Ember.computed('parts[]', function() {
        return this.get('parts').reduce((val, item) => {return val + item.get('weight');}, 0);
    }),

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
});

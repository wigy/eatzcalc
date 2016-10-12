import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    name: DS.attr('string', { defaultValue: null }),
    unit: DS.attr('string', { defaultValue: null }),
    weight: DS.attr(),
    energy: DS.attr(),
    fat: DS.attr(),
    carbs: DS.attr(),
    protein: DS.attr(),
    price: DS.attr(),

    fullName: Ember.computed('name', 'unit', function() {
       return `${this.get('name')} (${this.get('unit')})`;
    })
});

import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    unit: DS.attr(),
    weight: DS.attr(),
    energy: DS.attr(),
    fat: DS.attr(),
    carbs: DS.attr(),
    protein: DS.attr(),
    price: DS.attr(),
});

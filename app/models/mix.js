import DS from 'ember-data';

export default DS.Model.extend({

    ingredient: DS.belongsTo('ingredient'),
    amount: DS.attr('number', { defaultValue: 0 }),
});

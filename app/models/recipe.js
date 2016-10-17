import DS from 'ember-data';

export default DS.Model.extend({

    name: DS.attr('string', { defaultValue: null }),
    description: DS.attr('string', { defaultValue: null }),

    parts: DS.attr(), // A list of pairs: [full name of ingredient, unit multiplier]
});

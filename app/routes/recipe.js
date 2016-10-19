import Ember from 'ember';

export default Ember.Route.extend({

    foodData: Ember.inject.service(),

    model(params) {
        return this.get('foodData').getRecipe(params.id);
    }
});

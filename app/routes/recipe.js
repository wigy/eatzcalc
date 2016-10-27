import Ember from 'ember';

export default Ember.Route.extend({

    foodData: Ember.inject.service(),

    model({id}) {
        return this.get('foodData').getRecipe(id);
    }
});

import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Service.extend({

    store: Ember.inject.service(),

    ingredientsByName: {},

    ingredientsById: {},

    getIngredient(name) {
        return new RSVP.Promise((fulfill, reject) => {

            // TODO: If data available, resolve now.
            return this.get('store').findAll('ingredient').then((data) => {

                let n = data.get('length');
                for (let i = 0; i < n; i++) {
                    let obj = data.objectAt(i).get('data');
                    this.ingredientsByName[obj.name] = obj;
                    // TODO: How to get ID correctly?
                    let id = i + 1;
                    this.ingredientsById[id] = obj;
                }
                fulfill(this.ingredientsById[name]);
            }, (error) => {
                reject(error);
            });
        });
    }
});

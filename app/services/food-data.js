import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Service.extend({

    store: Ember.inject.service(),

    ingredientsByName: {},

    ingredientsById: {},

    recipesByName: {},

    recipesById: {},

    /**
     * Find an ingredient by its name or by its ID.
     */
    getIngredient(name) {
        return new RSVP.Promise((fulfill, reject) => {

            if(Object.keys(this.ingredientsById).length) {
                fulfill(this.ingredientsById[name] || this.ingredientsByName[name]);
                return;
            }

            this.get('store').findAll('ingredient').then((data) => {

                let n = data.get('length');
                for (let i = 0; i < n; i++) {
                    let obj = data.objectAt(i);
                    this.ingredientsByName[obj.get('fullName')] = obj;
                    this.ingredientsById[obj.id] = obj;
                }

                fulfill(this.ingredientsById[name] || this.ingredientsByName[name]);

            }, (error) => {

                reject(error);
            });
        });
    },

    /**
     * Find a recipe by its name or by its ID.
     */
    getRecipe(name) {

        return new RSVP.Promise((fulfill, reject) => {

                if(Object.keys(this.recipesById).length) {
                    fulfill(this.recipesById[name] || this.recipesByName[name]);
                    return;
                }

                this.get('store').findAll('recipe').then((data) => {
                    // Load ingredients in order to fill parts with objects.
                    this.getIngredient().then(() => {
                        let n = data.get('length');

                        for (let i = 0; i < n; i++) {
                            let obj = data.objectAt(i);
                            this.recipesByName[obj.get('name')] = obj;
                            this.recipesById[obj.id] = obj;
                            let parts = obj.get('parts');
                            let newParts = [];
                            for (let j = 1; j < parts.length; j += 2) {
                                let ingredient = this.ingredientsByName[parts[j]];
                                if (!ingredient) {
                                    reject("Cannot find ingredient: " + parts[j]);
                                }
                                parts[j] = ingredient;
                                let mix = this.get('store').createRecord('mix');
                                mix.set('amount', parts[j-1]);
                                mix.set('ingredient', ingredient);
                                newParts.push(mix);
                            }
                            obj.set('parts', Ember.ArrayProxy.create({content: Ember.A(newParts)}));
                        }

                        fulfill(this.recipesById[name] || this.recipesByName[name]);

                    }, (error) => reject(error))
            }, (error) => reject(error));
        });
    }
});

import Ember from 'ember';

function makeMeal(self) {

    let meal = self.get('store').createRecord('meal', {name: 'Kahvia & munapekoni', category: 'aamianen'});

    meal.add(1,'muna ja pekoni');
    meal.add(1,'lasi maitoa');
    meal.add(3,'maitokahvi');

    return meal;
}

export default Ember.Route.extend({
    model() {
        return makeMeal(this);
    }
});

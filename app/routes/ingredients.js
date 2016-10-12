import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let ret = this.get('store').findAll('ingredient');

        ret.then((data) => {
           let N = data.get('length');
           for (let i = 0; i < N; i++) {
               console.log(data.objectAt(i))
           }
        });
        return ret;
    }
});

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ingredients');
  this.route('ingredient', { path: '/ingredient/:id' });
});

export default Router;

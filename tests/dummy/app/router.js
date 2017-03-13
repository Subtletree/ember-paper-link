import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('first-route');
  this.route('second-route');
  this.route('third-route');

});

export default Router;

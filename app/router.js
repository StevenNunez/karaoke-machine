import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('playlists', function() {
    this.route('playlist', {path: ":playlist_id"}, function() {});
  });

  this.route('party', {
    path: 'party/:playlist_id'
  });
});

export default Router;

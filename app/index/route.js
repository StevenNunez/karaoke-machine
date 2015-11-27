import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('playlist');
  },
  actions: {
    createPlaylist(){
      let playlist = this.modelFor(this.routeName);
      playlist.save().then((playlist) => {
        this.transitionTo('playlists.playlist', playlist);
      });
    }
  }
});

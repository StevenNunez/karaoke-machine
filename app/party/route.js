import Ember from 'ember';

export default Ember.Route.extend({
  socket: Ember.inject.service(),
  setupController(){
    this._super(...arguments);
    this.get('channel').on('playlistUpdate', (rawVideo) => {
      let video = this.store.createRecord('video', rawVideo)
      this.modelFor(this.routeName).get('videos').pushObject(video);
    });
  },
  channel: Ember.computed("model", function(){
    let channel =  this.get('socket').channel(`playlists:${this.modelFor(this.routeName).get('id')}`)
    channel.join();
    return channel;
  }),
});

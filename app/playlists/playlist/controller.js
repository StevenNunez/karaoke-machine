import Ember from 'ember';

// When this page loads,
// connect to the channel, and let the channel know when
// Songs get added (ROUTE)
// Push that to party/:playlist_id
export default Ember.Controller.extend({
  selectedVideo: null,
  socket: Ember.inject.service(),
  channel: Ember.computed("model", function(){
    let channel =  this.get('socket').channel(`playlists:${this.get("model.id")}`)
    channel.join();
    return channel;
  }),
  actions: {
    addToPlaylist(video){
      this.get('model.videos').pushObject(video);
      this.get('model').save().then((playlist) => {
        this.get('channel').push("playlist_update", video);
        this.set('message', `${video.get('title')} added to your playlist`);
      });
    },
    queryForVideo(query){
      return this.store.query('video', {q: query});
    },
    selectVideo(video){
      this.set("selectedVideo", video);
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  selectedVideo: null,
  actions: {
    addToPlaylist(video){
      this.get('model.videos').pushObject(video);
      this.get('model').save()
    },
    queryForVideo(query){
      return this.store.query('video', {q: query});
    },
    selectVideo(video){
      this.set("selectedVideo", video);
    }
  }
});

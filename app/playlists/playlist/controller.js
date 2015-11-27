import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addToPlaylist(video){
      this.get('model.videos').pushObject(video)
      this.get('model').save().then((playlist) => {
        debugger
      })
    },
    queryForVideo(query){
      return this.store.query('video', {q: query});
    }
  }
});

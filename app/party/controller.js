import Ember from 'ember';

export default Ember.Controller.extend({
  currentVideoIndex: 0,
  currentVideo: Ember.computed("currentVideoIndex", function(){
    return this.get('model.videos').objectAt(this.get('currentVideoIndex'));
  }),
  lastIndex: Ember.computed('model.videos.length', function(){
    return this.get('model.videos.length') - 1
  }),
  hasNext: Ember.computed('model.videos.length', 'currentVideoIndex', function(){
    return this.get('lastIndex') > this.get('currentVideoIndex')
  }),
  hasPrevious: Ember.computed.gt('currentVideoIndex', 0),
  actions: {
    previous(){
      if (this.get('hasPrevious')) {
        this.decrementProperty('currentVideoIndex');
      }
    },
    next(){
      if (this.get('hasNext')) {
        this.incrementProperty('currentVideoIndex');
      }
    }
  }
});

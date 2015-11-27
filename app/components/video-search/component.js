import Ember from 'ember';

export default Ember.Component.extend({
  results: null,
  getResults(query){
    this.set("results", this.attrs.onVideoLookup(query));
  },
  actions: {
    updateQuery(query){
      // Pretty cool. Causes a delay
      Ember.run.debounce(this, "getResults", query, 300);
    }
  }
});

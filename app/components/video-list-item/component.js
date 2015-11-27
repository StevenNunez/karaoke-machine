import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["panel", "panel-default"],
  click(){
    this.attrs.onSelect();
  }
});

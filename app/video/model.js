import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  thumbnail: DS.attr('string'),
  videoId: DS.attr('string'),
  playlists: DS.hasMany('playlist')
});

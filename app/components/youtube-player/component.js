import Ember from 'ember';

export default Ember.Component.extend({
  playVideo(){
    this.get('player').loadVideoById(this.get('video.videoId'));
    this.get('player').playVideo();
  },
  loadPlayer(){
    window.onYouTubeIframeAPIReady = () => {
      let player = new YT.Player('ytplayer', {
        height: this.get('height'),
        width: this.get('width'),
        events: {
          onReady: this.playVideo.bind(this)
        }
      });
      this.set('player', player);
    }
  },
  didReceiveAttrs(){
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.loadPlayer();
  },
  didUpdateAttrs(){
    this.playVideo();
  }
});

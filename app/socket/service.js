import Ember from 'ember';
import {Socket} from "./../phoenix/phoenix"

export default Ember.Service.extend({
  init(){
    this._super(...arguments);
    let socket = new Socket("/socket", {
      logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
    });
    socket.connect();
    this.set('socket', socket);
  },
  channel(channelName){
    return this.get('socket').channel(channelName)
  }
});

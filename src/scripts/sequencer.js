import {Step, Track} from './track.js';

class Sequencer {
   constructor() {
      this.grid = [];
      const track = new Track();
      for (let i = 0; i < 8; i++) {
         this.grid.push(track);
      }
   }


   
}






export {Step, Track, Sequencer};


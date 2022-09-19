import {Step, Track} from './track.js';

class Sequencer {
   constructor(sampleList) {
      this.grid = [];
      for (let i = 0; i < sampleList.length; i++) {
         const track = new Track(sampleList[i]);
         this.grid.push(track);
      }
   }
   


}




export {Step, Track, Sequencer};


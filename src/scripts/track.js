import Step from './step.js';
import * as Tone from 'tone'

class Track {
   constructor(stepCount = 32) {
      this.stepCount = stepCount;
      this.row = [];
      this.sample = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
      const step = new Step;
      for (let i = 0; i < this.stepCount; i++) {
         this.row.push(step);
      }
   }
}



//alternate track





// function testPlay() {
//    const osc = new Tone.Oscillator().toDestination();

//    Tone.Transport.scheduleRepeat((time) => {
//       osc.start(time).stop(time + 0.1);
//    }, "8n");

//    Tone.Transport.start();
// }




// function createTrack() {
//    const newTrack = new Track();
//    const newStep = new Step();
//    return newTrack.makeRow(newStep);
// }


export {Track, Step};
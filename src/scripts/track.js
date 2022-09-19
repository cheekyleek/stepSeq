import Step from './step.js';
import * as Tone from 'tone'

class Track {
   constructor(sample, stepCount = 32) {
      this.stepCount = stepCount;
      this.row = [];
      this.sample = sample;
      
      for (let i = 0; i < this.stepCount; i++) {
         const step = new Step(i);
         this.row.push(step);
      }
   }

   loopTrack() {
      let sample = this.sample;
      for (let i = 0; i < this.row.length; i++) {
         let step = this.row[i];
         console.log(i);
         if (step.isActive === true) {
            if (i === 0) {
               sample.start();
            } else {
               sample.restart();
            }
         }
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
import Step from './step.js';
import * as Tone from 'tone'

class Track {
   constructor(sample, stepCount = 32) {
      this.stepCount = stepCount;
      this.sample = sample.toDestination();
      this.row = this.makeRow(stepCount);
   }
   
   makeRow(stepCount) {
      const row = [];

      for (let i = 0; i < stepCount; i++) {
         const step = new Step(i, this.sample);
         row.push(step);
      }

      return row;
   }
}

export {Track, Step};
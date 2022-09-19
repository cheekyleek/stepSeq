import * as Tone from "tone";

const defaultGrid = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];

class Track {
   constructor(sample, stepCount = 32) {
      this.stepCount = stepCount;
      this.sample = sample.toDestination();
      this.row = this.makeRow();
      this.sequence = new Tone.Sequence((time) => {
         this.sample.start(time);
      }, this.row);
   }
   
   makeRow() {
      const row = [];

      for (let i = 0; i < stepCount / 2; i++) {
         row.push([]);
      }

      return row;
   }

   selectStep() {
      
   }


}

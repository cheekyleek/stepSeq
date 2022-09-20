import * as Tone from "tone";

const defaultGrid = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];

class Track {
   constructor(sample, stepCount = 32) {
      this.stepCount = stepCount;
      this.sample = sample.toDestination();
      this.row = this.makeRow(stepCount);
      this.sequence = new Tone.Sequence((time) => {
         this.sample.start(time);
      }, this.row);
   }
   
   makeRow(stepCount) {
      const row = [];

      for (let i = 0; i < stepCount / 2; i++) {
         row.push([]);
      }

      return row;
   }

   selectStep() {

   }


}

function blobify(samplePath) {
   let xhr = new XMLHttpRequest();
   let player = new Tone.Player;

   xhr.open("GET", samplePath, true)
   xhr.responseType = 'blob';

   xhr.onload = function(){
      let blob = URL.createObjectURL(this.response);
      player.load(blob);
   };

   xhr.send();
   return player;
}

let c = new Track(blobify("./src/samples/hiphop/hip_hop_vox.wav"));
console.log(c);

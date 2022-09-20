import * as Tone from 'tone';
import { Step, Track } from './track.js';

class Sequencer {
   constructor(sampleList) {
      this.grid = this.makeGrid(sampleList);

   }

   makeGrid(sampleList) {
      let grid = [];

      for (let i = 0; i < sampleList.length; i++) {
         const track = new Track(sampleList[i]);
         grid.push(track);
      }

      return grid;
   }

   addTrack(sample) {
      const newTrack = new Track(sample);
      this.grid.push(newTrack);
   }

   loop(time) {
      let currentPlayMark = 0;

      let grid = this.grid;
      console.log(grid);
      
      while (currentPlayMark < 32) {

         for (let i = 0; i < grid.length; i++) {
            let track = grid[i];

            if (track.row[currentPlayMark].isActive === true) {
               track.row[currentPlayMark].sample.start(time);

            }
            let steps = document.getElementsByClassName('step');
            console.log(steps);
            // steps.every((step) => {
            //    if (step.getAttribute('data-step-id') === `${currentPlayMark}`) {
            //       step.classList.toggle("highlighted");
            //    }
            // })
         }

         currentPlayMark++;
      }
   }
}

function blobify(samplePath) {
   let xhr = new XMLHttpRequest();
   let player = new Tone.Player;

   xhr.open("GET", samplePath, true)
   xhr.responseType = 'blob';

   xhr.onload = function () {
      let blob = URL.createObjectURL(this.response);
      player.load(blob);
      // console.log(`${samplePath} loaded...`);
   };

   xhr.send();
   return player;
}

const hiphopSamples = {
   kick: blobify("./src/samples/hiphop/hip_hop_kick.wav"),
   snare: blobify("./src/samples/hiphop/hip_hop_snare.wav"),
   open_hihat: blobify("./src/samples/hiphop/hip_hop_hihat_open.wav"),
   closed_hihat: blobify("./src/samples/hiphop/hip_hop_hihat_closed.wav"),
   sub_bass: blobify("./src/samples/hiphop/hip_hop_sub.wav"),
   fx_hit: blobify("./src/samples/hiphop/hip_hop_orch_hit.wav"),
   lead: blobify("./src/samples/hiphop/hip_hop_lead.wav"),
   vox: blobify("./src/samples/hiphop/hip_hop_vox.wav")
};

const seq = new Sequencer(hiphopSamples);

Tone.Transport.bpm.value = 120;
Tone.Transport.scheduleRepeat(seq.loop(), "8n");



export { Step, Track, Sequencer };


import * as Tone from 'tone';
import { Samples } from './samples/sample_list.js'
import { View } from './scripts/view.js'
import {Step, Track, Sequencer} from './scripts/sequencer.js';


document.addEventListener("DOMContentLoaded", () => {
   console.log("Welcome to stepSeq");

   const hiphopSamples = function() {
      let kick = blobify("./src/samples/hiphop/hip_hop_kick.wav");               //need to make required from sample_list
      let snare = blobify("./src/samples/hiphop/hip_hop_snare.wav");
      let open_hihat = blobify("./src/samples/hiphop/hip_hop_hihat_open.wav");
      let closed_hihat = blobify("./src/samples/hiphop/hip_hop_hihat_closed.wav");
      let sub_bass = blobify("./src/samples/hiphop/hip_hop_sub.wav");
      let fx_hit = blobify("./src/samples/hiphop/hip_hop_orch_hit.wav");
      let lead = blobify("./src/samples/hiphop/hip_hop_lead.wav");
      let vox = blobify("./src/samples/hiphop/hip_hop_vox.wav");
   
      return [kick, snare, open_hihat, closed_hihat, sub_bass, fx_hit, lead, vox];
   }
   
   const unit = document.querySelector(".unit");
   const seq = new Sequencer(hiphopSamples());
   // const fx = new FXRack();
   // const rec = new Recorder();
   // const vis = new Visualizer();

   window.view = new View(unit, seq);                   //sets up all views initially

   const playback = document.getElementsByClassName("playback-controls");
   const playButton = playback[0].firstChild;
   console.log(playback);
   const stopButton = playback[0].children[1];
   stopButton.innerHTML = "Stop";
   playButton.innerHTML = "Play";
   let hello = seq.grid[0].sample.toDestination();
   let hello2 = seq.grid[1].sample.toDestination();

   stopButton.addEventListener("click", () => {
      Tone.Transport.stop();
   })

   playButton.addEventListener("click", () => {
      // let allTracks = seq.grid.slice();
      
      Tone.Transport.bpm.value = 120;
      Tone.Transport.scheduleRepeat(seq.loop, "8n");
      Tone.Transport.start();
      // Tone.start();

      // allTracks[0].startLoop();
      
      
      // testSequence.start();
      // testSequence2.start();
      
      
      
      console.log(Tone.Transport.bpm.value)
   })

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





   
});
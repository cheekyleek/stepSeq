import * as Tone from 'tone';
import { View } from './scripts/view.js'
import {Step, Track, Sequencer} from './scripts/sequencer.js';


document.addEventListener("DOMContentLoaded", () => {
   console.log("Welcome to stepSeq");

   const hiphopSamples = function() {
      let kick = blobify("./src/samples/hiphop/hip_hop_kick.wav");
      let snare = blobify("./src/samples/hiphop/hip_hop_snare.wav");
      let open_hihat = blobify("./src/samples/hiphop/hip_hop_hihat_open.wav");
      let closed_hihat = blobify("./src/samples/hiphop/hip_hop_hihat_closed.wav");
      let sub_bass = blobify("./src/samples/hiphop/hip_hop_sub.wav");
      let fx_hit = blobify("./src/samples/hiphop/hip_hop_orch_hit.wav");
      let lead = blobify("./src/samples/hiphop/hip_hop_lead.wav");
      let vox = blobify("./src/samples/hiphop/hip_hop_vox.wav");
   
      return [kick, snare, open_hihat, closed_hihat, sub_bass, fx_hit, lead, vox];
   }
   
   const unitElement = document.querySelector(".unit");
   const seq = new Sequencer(hiphopSamples());     
   window.view = new View(unitElement, seq);                     //sets up all views

   // seq.grid[0].loopTrack();

   const playback = document.getElementsByClassName("playback-controls");
   const playButton = playback[0].firstChild;
   console.log(playback);
   const stopButton = playback[0].children[1];
   stopButton.innerHTML = "Stop";
   playButton.innerHTML = "Play";
   let hello = seq.grid[0].sample.toDestination();

   stopButton.addEventListener("click", () => {
      Tone.Transport.stop();
   })
   
   

   const testSequence = new Tone.Sequence((time) => {
      hello.start(time);
      console.log("hello!!!");
   }, [[1], [], [1], [], [1], [], [1], [], [1], [], [1], [], [1], [], [1], []]);



   // const seqContainer = document.getElementsByClassName("sequencer");
   // const allTracks = seqContainer.getElementsByClassName("track");
   // const currentPlayingSteps = allTracks.querySelector("data-step-id", i);

   playButton.addEventListener("click", () => {
      // Tone.Transport.scheduleRepeat((time) => {
      //    for (i = 0; i < 32; i++) {

      //    }
      //    currentPlayingSteps.setAttribute("data-is-playing", true);
      //    currentPlayingSteps.setAttribute("data-is-playing", false);
      // }, "32n");
      testSequence.start();
      Tone.Transport.start();
      Tone.start();
      console.log(Tone.Transport.bpm.value)
   })

   const defaultGrid = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
   // [[1, , , ], [, , , ], [1, , , ], [, , , ], [1, , , ], [, , , ], [1, , , ], [, , , ]]

   



   // const hiphopSamples = new Tone.ToneAudioBuffer("https://tonejs.github.io/audio/berklee/gong_1.mp3", () => {
   //    const player = new Tone.Player().toDestination();
   //    player.buffer = hiphopSamples
   //    player.start();
   // });
   
   // console.log(hiphopSamples);
   // const defaultSteps = [];
   // for (let i = 0; i < 32; i++) {
   //    defaultSteps.push("A4");
   // }
   // const altTrack = new Tone.Sequence();
   // console.log(defaultSteps);
   

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

   

   // let c = new Sequencer(hiphopSamples());
   // console.log(c);
   // let hello = c.grid[7].sample.toDestination();
   

   // // let hello = hiphopSamples['lead'].toDestination();
   // hello.autostart = true;
   

   




   
   
   // const osc = new Tone.Oscillator().toDestination();
   // console.log(osc)
   // Tone.Transport.scheduleRepeat((time) => {
   //    osc.start(time).stop(time + 0.1);
   // }, "8n");







   
});
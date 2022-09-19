import * as Tone from 'tone';
import { View } from './scripts/view.js'
import {Step, Track, Sequencer} from './scripts/sequencer.js';


document.addEventListener("DOMContentLoaded", () => {
   console.log("Welcome to stepSeq")
   
   const unitElement = document.querySelector(".unit");     
   window.view = new View(unitElement);                     //sets up all views

   const allSteps = document.getElementsByClassName("step");      //gives all steps event listeners

   for (let i = 0; i < allSteps.length; i++) {
      allSteps[i].addEventListener("click", (e) => {
         const selectedStep = e.target;

         if (selectedStep.getAttribute('data-is-active') === 'false') {
            selectedStep.setAttribute('data-is-active', true);
         } else {
            selectedStep.setAttribute('data-is-active', false);
         }       
      })
   }

   const playback = document.getElementsByClassName("playback-controls");
   const playButton = playback[0].firstChild;
   playButton.innerHTML = "Play";

   playButton.addEventListener("click", () => {
      Tone.start();
      Tone.Transport.start();
      console.log(Tone.Transport.progress);
   })

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
         console.log('pressed');
         console.log(blob);
      };
      
      xhr.send();
      return player;
   }

   let newSample = blobify("./src/samples/hiphop/hip_hop_kick.wav");
   console.log(newSample);
   




   
   
   // const osc = new Tone.Oscillator().toDestination();
   // console.log(osc)
   // Tone.Transport.scheduleRepeat((time) => {
   //    osc.start(time).stop(time + 0.1);
   // }, "8n");







   
});
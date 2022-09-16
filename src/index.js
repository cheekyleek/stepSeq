// const Sequencer = require('./scripts/sequencer');
const Track = require('./scripts/track');
const Step = require('./scripts/step.js');
const PatternGrid = require('./scripts/pattern_grid.js');
// window.Step = require('./scripts/step.js');


document.addEventListener("DOMContentLoaded", () => {
   console.log("Welcome to stepSeq")

   const audioContext = new AudioContext();
   const sampleRate = audioContext.sampleRate;
   const buffer = audioContext.createBuffer(1, sampleRate * 1, sampleRate) 

   const channelData = buffer.getChannelData(0)

   for (let i = 0; i < buffer.length; i++) {
      channelData[i] = Math.random() * 2 - 1;
   }

   

   const primaryGainControl = audioContext.createGain();
   primaryGainControl.gain.setValueAtTime(0.05, 0);

   
   primaryGainControl.connect(audioContext.destination);

   const button = document.createElement('button');
   button.innerText = "White Noise";
   button.addEventListener("click", () => {
      const whiteNoiseSource = audioContext.createBufferSource();
      whiteNoiseSource.buffer = buffer;
      whiteNoiseSource.connect(primaryGainControl);

      whiteNoiseSource.start();
   })

   document.body.appendChild(button);




   //working on step to show up

   const testStep = new Step();
   console.log(testStep);








   
});
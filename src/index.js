import * as Tone from 'tone';
import { FXRack } from './scripts/components/fxRack.js';
import { Sampler } from './scripts/components/sampler.js';

import { fxView } from './scripts/views/fxView.js';
import { visView } from './scripts/views/visView.js';
import { ctrlView } from './scripts/views/ctrlView.js';
import { gridView } from './scripts/views/gridView.js';


document.addEventListener("DOMContentLoaded", () => {
   console.log("Welcome to stepSeq");

   const bottomContainer = document.querySelector(".bottom-container");
   const sequencer = document.createElement("div");
   const spacer = document.createElement("div");
   const palmRest = document.createElement("div");
   palmRest.classList.add("palm-rest")
   spacer.classList.add("spacer");
   sequencer.classList.add("sequencer");
   bottomContainer.appendChild(sequencer);

   const fxRack = new FXRack();
   const sampler = new Sampler(fxRack);

   sequencer.appendChild(fxView());
   sequencer.appendChild(ctrlView());
   sequencer.appendChild(visView());
   sequencer.appendChild(spacer);
   sequencer.appendChild(gridView(sampler));
   sequencer.appendChild(palmRest);

   //add event listeners

   const rightControls = document.getElementById("right-controls").children;
   console.log(rightControls)
   for (let control of rightControls) {
      control.addEventListener("click", () => {
         for (let control of rightControls) {
            control.setAttribute("data-is-active", "false");
         }
         control.setAttribute("data-is-active", "true");
      })
   }

   
   //general slider handler

   const handleSlider = (element, effect) => {
      const val = element.value;
      const readOutId = `${element.id}-readout`;
      const readOut = document.getElementById(readOutId);
      effect(val);
      if (val <= -50) {
         readOut.innerHTML = "-inf";
      } else {
         readOut.innerHTML = Math.floor(val);
      }
   }


   //slider actions

   const pitchSlider = document.getElementById("pitch");
   pitchSlider.oninput = () => {
      handleSlider(pitchSlider, fxRack.changePitch);
   };

   const distortSlider = document.getElementById("distort");
   distortSlider.oninput = () => {
      handleSlider(distortSlider, fxRack.changeDistort);
   };

   const phaserSlider = document.getElementById("phaser");
   phaserSlider.oninput = () => {
      handleSlider(phaserSlider, fxRack.changePhaser);
   };

   const delaySlider = document.getElementById("delay");
   delaySlider.oninput = () => {
      handleSlider(delaySlider, fxRack.changeDelay);
   };

   const reverbSlider = document.getElementById("reverb");
   reverbSlider.oninput = () => {
      handleSlider(reverbSlider, fxRack.changeReverb);
   };

   const gainSlider = document.getElementById("gain");
   gainSlider.oninput = () => {
      handleSlider(gainSlider, fxRack.changeGain);
   };

});  

   // setupStepListeners(MG);
// PUSH SAMPLE PLAYER OBJECTS INTO GRID

//    function masterGrid(sampleList) {
//       const grid = [];

//       for (let i = 0; i < 8; i++) {
//          const track = [];
//          for (let j = 0; j < 32; j++) {
            
//             const player = {
//                sample: sampleList[i],     //.connect(pitchShifter)
//                isActive: false,
//                pitch: 12
//             }
           
//             track.push(player);
//          }
//          grid.push(track);
//       }

//       return grid;
//    }
//    
//    const MG = masterGrid(technoSamples());



//    // ADD ALL LISTENERS
   


//    function setupStepListeners(masterGrid) {
//       const sequencer = document.getElementsByClassName("sequencer")
//       const allTracks = sequencer[0].children;
      
//       for (let i = 0; i < 8; i++) {
//          let track = allTracks[i];

//          for (let j = 0; j < 32; j++) {
//             let step = track.children[j];

//             step.addEventListener("click", (e) => {
//                const selectedStep = e.target;
//                // const stepID = selectedStep.getAttribute("data-step-id");
              
//                if (selectedStep.getAttribute('data-is-active') === 'false') {
//                   selectedStep.setAttribute('data-is-active', true);
//                   masterGrid[i][j].isActive = true;
//                   // console.log(selectedStep);
//                   // console.log(masterGrid[i][j]);
//                } else {
//                   selectedStep.setAttribute('data-is-active', false);
//                   masterGrid[i][j].isActive = false;
//                   // console.log(selectedStep);
//                   // console.log(masterGrid[i][j]);
//                }
//             })
//          }
//       }
      
//    };        

//    const playback = document.getElementsByClassName("playback-controls");
//    const playButton = playback[0].firstChild;
//    const stopButton = playback[0].children[1];

//    playButton.addEventListener("click", (e) => {
//       const play = e.target;
//       play.classList.add("active");
//    })

//    let currentPlayMark = 0;
   
//    const loop = function(time) {
//       let nextStep = currentPlayMark % 32;
//       const allTracks = seq.getElementsByClassName('track');
//       // console.log(time);
//       for (let i = 0; i < 8; i++) {
//          const activeColumn = [allTracks[i].children[nextStep]]


//          activeColumn.forEach((step) => {
//             if (step.getAttribute("data-is-active") === "true") {
               
//                step.classList.toggle('highlighted-selected');
//             } else {
//                step.classList.toggle('highlighted');
//             }
//          })

            
         
//          // activeColumn.classList.remove('highlighted')
         
//       }
//       // console.log(currentSteps);

//       let masterGrid = MG;
   
//       for (let i = 0; i < masterGrid.length; i++) {
//          const columnStep = masterGrid[i][nextStep];
         
//          if (columnStep.isActive === true) {
//             columnStep.sample.start(time).toDestination();    //chain here!!??
            
//             // console.log(columnStep.pitch)
//          }
//       }
      
//       currentPlayMark++;

      
//    }

//    stopButton.addEventListener("click", () => {
//       Tone.Transport.stop();
//    })
   
   
   

//    Tone.Transport.scheduleRepeat(loop, "32n");
//    // Tone.Destination.chain(looper, pitchShift);
//    // looper.chain(pitchShift(shiftValue)).toDestination();         // give the scheduled loop

//    playButton.addEventListener("click", () => {
      
//       Tone.start();
//       Tone.Transport.start();
//       Tone.Transport.loopEnd = "1m"
//       Tone.Transport.bpm.value = 120;
      
      
//       // console.log(Tone.Transport.bpm.value)
//    })



import * as Tone from 'tone';
import { FXRack } from './scripts/components/fxRack.js';
import { Sampler } from './scripts/components/sampler.js';

import { seqView } from  './scripts/views/seqView.js';
import { fxView } from './scripts/views/fxView.js';
import { visView } from './scripts/views/visView.js';


document.addEventListener("DOMContentLoaded", () => {
   console.log("Welcome to stepSeq");

   const mainContainer = document.querySelector(".main-container");
   const bottomContainer = document.querySelector(".bottom-container")

   const fxRack = new FXRack();
   const sampler = new Sampler(fxRack);

   bottomContainer.appendChild(seqView());
   

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
//    // SET UP CONTROL BAR
   


   
//    // console.log(FXArray);
//    // const FXFolderButton = allFXButtons[0][0];
//    // console.log(FXFolderButton);
//    // console.log(FXFolderButton);

//    // FXFolderButton.addEventListener("click", () => {
//    //    // const rack = document.getElementsByClassName("")
//    // })
   
   
   
//    // SET UP RECORDER
   
//    const recorder = function() {
   
//    };


   
//    // CREATE ALL ELEMENTS AND ATTACH TO UNIT
   
  
//    // const sequencer = setupSeq();
//    // const controlBar = setupControlBar();
//    // const FXRack = setupFX();
//    // const recorder = setupRec();
//    // const visualizer = setupVis();
   
   
//    // unit.appendChild(controlBar);
//    // unit.appendChild(sequencer);
//    // unit.appendChild(FXRack);
//    // unit.appendChild(recorder);
//    // unit.appendChild(visualizer);
   
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

   class View {
      constructor(unit, seq, bar) {  //, seq, fx, rec, vis
         this.unit = unit;
         this.seq = seq;
         this.controlBar = bar;
         // this.fx = fx;
         // this.rec = rec;
         // this.vis = vis;

         // const newFX = this.setupFX();
         // const newRec = this.setupRec();
         // const newVis = this.setupVis();
         
   
         unit.appendChild(this.controlBar);
         unit.appendChild(this.seq);
         // unit.appendChild(newFX);
         // unit.appendChild(newRec);
         // unit.appendChild(newVis);
         setupStepListeners(MG);
   
         return unit;
      }
   }
   
   
//    const seq = sequencer();
//    const bar = controlBar();
//    // const fx = new FXRack();
//    // const rec = new Recorder();
//    // const vis = new Visualizer();

//    window.view = new View(unit, seq, bar);                   //sets up all views initially

//    const playback = document.getElementsByClassName("playback-controls");
//    const playButton = playback[0].firstChild;
//    const stopButton = playback[0].children[1];
//    stopButton.innerHTML = "Stop";
//    playButton.innerHTML = "Play";

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

//    const FXFolderButton = document.querySelector(".fx-folder");
   
//    FXFolderButton.addEventListener("click", () => {
//       const rack = document.querySelector(".fx-rack");
//       // console.log(rack);
//       if (rack.getAttribute("folded") === "true") {
//          rack.setAttribute("folded", false);
//       } else {
//          rack.setAttribute("folded", true);
//       }
      
//    })

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

   


   
   box.addEventListener("click", () => {
      sampler.playSample("sound2");
      console.log("playing");
   })


});
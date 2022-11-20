import * as Tone from 'tone';
import { FXRack } from './scripts/fxRack.js';
import { Sampler } from './scripts/sampler.js';

import { FXRackView } from './scripts/views/fxRackView.js';

document.addEventListener("DOMContentLoaded", () => {
   console.log("Welcome to stepSeq");

   const mainContainer = document.querySelector(".main-container"); 
   const fxRack = new FXRack();
   const sampler = new Sampler(fxRack);

   


   // SET UP SEQUENCER VIEW
   
   // const sequencer = function() {
   //    const seq = document.createElement("div");
   //    seq.classList.add('sequencer');
      
   //    for (let i = 0; i < 8; i++) {
   //       const track = document.createElement("div");          //DONE EXCEPT CUSTOM TRACK INPUT
   //       track.classList.add('track');
   //       track.setAttribute('id', i);
   
   //       for (let j = 0; j < 32; j++) {
   //          // if (j % 4 === 0 && j !== 0) {
   //          //    let lineBreak = document.createElement("div");
   //          //    lineBreak.classList.add("spacer");
   //          //    track.appendChild(lineBreak);
   //          // }

   //          const step = document.createElement("button");
   //          step.classList.add('step');
   //          step.setAttribute('id', j);
   //          step.setAttribute('data-is-active', false);

            

   //          track.appendChild(step);
   //       }
   
   //       seq.appendChild(track);
   //    }
   
   //    return seq;
   // };

//    // SET UP FX-RACK

   
      
   

   

//    const visualizer = function() {
//       const vis = document.createElement("div");
//       const screen = document.createElement("div"); 

//       vis.classList.add('visualizer');      
//       screen.classList.add('screen');
//       vis.appendChild(screen);

//       return vis
//    };

//    const unit = document.querySelector(".unit");



   const handleSlider = (element, effect) => {
      const val = element.value;
      const readOutId = `${element.id}-readout`;
      const readOut = document.getElementById(readOutId);
      effect(val, "8n");
      readOut.innerHTML = Math.floor(val) ;
      console.log(val);
   }

             // ADD VISUALIZER TO THE MAIN CONTAINER
//    mainContainer.appendChild(visualizer());
   mainContainer.appendChild(FXRackView());

   const pitchSlider = document.getElementById("pitch");
   pitchSlider.oninput = () => {
      handleSlider(pitchSlider, fxRack.changePitch);
   };

   const delaySlider = document.getElementById("delay");
   console.log(delaySlider)
   delaySlider.oninput = () => {
      handleSlider(delaySlider, fxRack.changeDelay);
   };

   const reverbSlider = document.getElementById("reverb");
   console.log(reverbSlider)
   reverbSlider.oninput = () => {
      handleSlider(reverbSlider, fxRack.changeReverb);
   };




//    const pitchShifter = new Tone.PitchShift(pitchShiftValue).toDestination();
//    // const testAnalyser = new Tone.Analyser();
//    const phaser = new Tone.Phaser(phaserShiftValue);
//    const delay = new Tone.Delay();
//    const distortion = new Tone.Distortion();
//    const reverb = new Tone.Reverb();
//    // const signalPath = [pitchShift];

//    const phaserControl = document.getElementById("phaser");
//    // console.log(phaserControl);
//    phaserControl.addEventListener("mousedown", (e) => {   //THIS WORKS FOR ALL SLIDERS!!!!!!

   // function mouseMover(e) {
   //    console.log(e.target.value);

   //    // pitchControl.value = e.target.value;
   //    // slider.parentNode.innerHTML = `pitchshift: ${e.target.value}`;
   //    // slider.setAttribute("value", `${e.target.value}`);
   //    fxRack.changePitch(e.target.value);
   //    console.log(e.target.value);
   //    // console.log(phaserShiftValue);
   //    // console.log(signalPath[0].pitch);
   // }

   // console.log(pitchSlider)

   // pitchSlider.addEventListener("mousedown", e => {
   //    pitchSlider.addEventListener("mousemove", mouseMover(e))
   //    // slider.addEventListener("mousemove", mouseMover(e))

   //    pitchSlider.addEventListener("mouseup", () => {
   //       pitchSlider.removeEventListener("mousemove", mouseMover);
   //    })
   // })
      


               

      

      
//          // pitchControl.value = 
//          // pitchControl.innerHTML = `pitchshift : ${pitchControl.value}`;
//    })

//    const pitchControl = document.getElementById("pitchShift");
//    // console.log(pitchControl);
//    pitchControl.addEventListener("mousedown", (e) => {   //THIS WORKS FOR ALL SLIDERS!!!!!!
//       const slider = e.target;

               

//       function mouseMover(e) {
//          // console.log(e.target.value);

//          // pitchControl.value = e.target.value;
//          // slider.parentNode.innerHTML = `pitchshift: ${e.target.value}`;
//          slider.setAttribute("value", `${e.target.value}`);
//          pitchShiftValue = e.target.value;
//          // console.log(pitchShiftValue);
//          // console.log(pitchShifter.pitch);
//          // console.log(signalPath[0].pitch);
//       }

//       slider.addEventListener("mousemove", mouseMover)

//       slider.addEventListener("mouseup", () => {
//          slider.removeEventListener("mousemove", mouseMover);
//       })
//          // pitchControl.value = 
//          // pitchControl.innerHTML = `pitchshift : ${pitchControl.value}`;
//    })


   
// // PUSH SAMPLE PLAYER OBJECTS INTO GRID

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
//    // .chain(pitchShifter, phaser, distortion, delay, reverb, testAnalyser)
//    const MG = masterGrid(technoSamples());
//    // SET UP CONTROL BAR
   
//    const controlBar = function() {
//       const bar = document.createElement("div");
//       bar.classList.add('control-bar')
   
//       for (let i = 0; i < 3; i++) {
//          const controlArea = document.createElement("div");
//          if (i === 0) {
//             controlArea.classList.add("FX-controls");
//          } else if (i === 1) {
//             controlArea.classList.add("playback-controls");
//          } else {
//             controlArea.classList.add("rec-controls");
//          }

//          for (let j = 0; j < 4; j++) {
//             const button = document.createElement("button");
//             if (i === 0 && j === 3) {
//                button.classList.add("fx-folder");
//                button.innerHTML = "FX"
//             }
//             button.setAttribute('id', j)
//             controlArea.appendChild(button);
//          }
//          bar.appendChild(controlArea);
//       }
   
//       return bar;
//    };

   
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
   
//    // SET UP VISUALIZER
   
   

   
//    // const audioCtx = new Analyser


   
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

//    class View {
//       constructor(unit, seq, bar) {  //, seq, fx, rec, vis
//          this.unit = unit;
//          this.seq = seq;
//          this.controlBar = bar;
//          // this.fx = fx;
//          // this.rec = rec;
//          // this.vis = vis;

//          // const newFX = this.setupFX();
//          // const newRec = this.setupRec();
//          // const newVis = this.setupVis();
         
   
//          unit.appendChild(this.controlBar);
//          unit.appendChild(this.seq);
//          // unit.appendChild(newFX);
//          // unit.appendChild(newRec);
//          // unit.appendChild(newVis);
//          setupStepListeners(MG);
   
//          return unit;
//       }
//    }
   
   
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

   

   

//    // pitchShift(pitchControl.value);

   
   
      



//      //, phaser, delay, distortion, reverb, gain

//    // const testContext = new Tone.Context();
  
//    // console.log(testContext);


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
//       // console.log(signalPath[0]);
//       // connect(testContext)
//       // console.log(testAnalyser);
//       // console.log(pitchShifter.numberOfInputs);
//       // console.log(pitchShifter);
      
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

//    // const looper = function() {
//    //    return 
//    // }
   
   
   

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

   


   const box = document.getElementsByClassName("unit")[0];
   box.addEventListener("click", () => {
      sampler.playSample("sound2");
      console.log("playing");
   })


});
import * as Tone from 'tone';
// import { PitchShift, Synth } from 'tone';
// import { Analyser, PitchShift } from 'tone';
// import { Big_File } from './scripts/one_big_long_file.js';
// import { Samples } from './samples/sample_list.js';
// import { View } from './scripts/view.js';
// import {Step, Track, Sequencer} from './scripts/sequencer.js';


document.addEventListener("DOMContentLoaded", () => {
   console.log("Welcome to stepSeq");

   function blobify(samplePath) {
      let xhr = new XMLHttpRequest();
      let player = new Tone.Player;
   
      xhr.open("GET", samplePath, true)
      xhr.responseType = 'blob';
   
      xhr.onload = function(){
         let blob = URL.createObjectURL(this.response);
         player.load(blob);
         // console.log(`${samplePath} loaded...`);
      };
      
      xhr.send();
      return player;
   }
   
   // const phaser1 = new Tone.Phaser({
   //    frequency: 15,
   //    octaves: 5,
   //    baseFrequency: 1000
   // }).toDestination();
   // const synth = new Tone.FMSynth().connect(phaser1);
   // synth.triggerAttackRelease("E3", "2n");
  
   
   // // test.connect(shifter).toDestination();
   // test.triggerAttackRelease(220, "8n");


   // FUNCTION THAT TURNS AUDIO INTO BLOBS (THEY ARE LITTLE PLAYER OBJECTS)
   
   const hiphopSamples = function() {
      let inst1 = blobify("./src/samples/hiphop/hip_hop_kick.wav");               //need to make required from sample_list
      let inst2 = blobify("./src/samples/hiphop/hip_hop_snare.wav");
      let inst3 = blobify("./src/samples/hiphop/hip_hop_hihat_open.wav");
      let inst4 = blobify("./src/samples/hiphop/hip_hop_hihat_closed.wav");
      let inst5 = blobify("./src/samples/hiphop/hip_hop_sub.wav");
      let inst6 = blobify("./src/samples/hiphop/hip_hop_orch_hit.wav");
      let inst7 = blobify("./src/samples/hiphop/hip_hop_lead.wav");
      let inst8 = blobify("./src/samples/hiphop/hip_hop_vox.wav");
   
      return [inst1, inst2, inst3, inst4, inst5, inst6, inst7, inst8];
   }

   

   const technoSamples = function() {
      let inst1 = blobify("./src/samples/techno/techno_kick.wav");               //need to make required from sample_list
      let inst2 = blobify("./src/samples/techno/techno_clap.wav");
      let inst3 = blobify("./src/samples/techno/techno_hi_hat.wav");
      let inst4 = blobify("./src/samples/techno/techno_sub_bass.wav");
      let inst5 = blobify("./src/samples/techno/techno_chord_hit.wav");
      let inst6 = blobify("./src/samples/techno/techno_fx_hit.wav");
      let inst7 = blobify("./src/samples/techno/techno_white_noise");
      let inst8 = blobify("./src/samples/techno/techno_pad.wav");
   
      return [inst1, inst2, inst3, inst4, inst5, inst6, inst7, inst8];
   }
   
   const pianoSamples = function() {
      let inst1 = blobify("./src/samples/hiphop/hip_hop_kick.wav");               //need to make required from sample_list
      let inst2 = blobify("./src/samples/hiphop/hip_hop_snare.wav");
      let inst3 = blobify("./src/samples/hiphop/hip_hop_hihat_open.wav");
      let inst4 = blobify("./src/samples/hiphop/hip_hop_hihat_closed.wav");
      let inst5 = blobify("./src/samples/hiphop/hip_hop_sub.wav");
      let inst6 = blobify("./src/samples/hiphop/hip_hop_orch_hit.wav");
      let inst7 = blobify("./src/samples/hiphop/hip_hop_lead.wav");
      let inst8 = blobify("./src/samples/hiphop/hip_hop_vox.wav");
   
      return [inst1, inst2, inst3, inst4, inst5, inst6, inst7, inst8];
   }
   
   const sillySamples = function() {
      let inst1 = blobify("./src/samples/hiphop/hip_hop_kick.wav");               //need to make required from sample_list
      let inst2 = blobify("./src/samples/hiphop/hip_hop_snare.wav");
      let inst3 = blobify("./src/samples/hiphop/hip_hop_hihat_open.wav");
      let inst4 = blobify("./src/samples/hiphop/hip_hop_hihat_closed.wav");
      let inst5 = blobify("./src/samples/hiphop/hip_hop_sub.wav");
      let inst6 = blobify("./src/samples/hiphop/hip_hop_orch_hit.wav");
      let inst7 = blobify("./src/samples/hiphop/hip_hop_lead.wav");
      let inst8 = blobify("./src/samples/hiphop/hip_hop_vox.wav");
   
      return [inst1, inst2, inst3, inst4, inst5, inst6, inst7, inst8];
   }

   const cohortSamples = function() {
      let inst1 = blobify("./src/samples/hiphop/hip_hop_kick.wav");               //need to make required from sample_list
      let inst2 = blobify("./src/samples/hiphop/hip_hop_snare.wav");
      let inst3 = blobify("./src/samples/hiphop/hip_hop_hihat_open.wav");
      let inst4 = blobify("./src/samples/hiphop/hip_hop_hihat_closed.wav");
      let inst5 = blobify("./src/samples/hiphop/hip_hop_sub.wav");
      let inst6 = blobify("./src/samples/hiphop/hip_hop_orch_hit.wav");
      let inst7 = blobify("./src/samples/hiphop/hip_hop_lead.wav");
      let inst8 = blobify("./src/samples/hiphop/hip_hop_vox.wav");
   
      return [inst1, inst2, inst3, inst4, inst5, inst6, inst7, inst8];
   }
   
   // SAMPLE BANKS OF BLOB PLAYERS
   
   // SET UP SEQUENCER VIEW
   
   const sequencer = function() {
      const seq = document.createElement("div");
      seq.classList.add('sequencer');
      
      for (let i = 0; i < 8; i++) {
         const track = document.createElement("div");          //DONE EXCEPT CUSTOM TRACK INPUT
         track.classList.add('track');
         track.setAttribute('id', i);
   
         for (let j = 0; j < 32; j++) {
            // if (j % 4 === 0 && j !== 0) {
            //    let lineBreak = document.createElement("div");
            //    lineBreak.classList.add("spacer");
            //    track.appendChild(lineBreak);
            // }

            const step = document.createElement("button");
            step.classList.add('step');
            step.setAttribute('id', j);
            step.setAttribute('data-is-active', false);

            

            track.appendChild(step);
         }
   
         seq.appendChild(track);
      }
   
      return seq;
   };

   // SET UP FX-RACK
      
   const FXRack = function() {
      const controlNames = ["pitchShift", "phaser", "delay", "distortion", "reverb", "gain"]
      const rack = document.createElement("div");
      rack.classList.add('fx-rack');
      const innerRack = document.createElement("div");
      innerRack.classList.add('inner-rack');

      for (let i = 0; i < 6; i++) {
         const controlContainer = document.createElement("div");
         const control = document.createElement("input");
         const label = document.createElement("label");

         controlContainer.classList.add(`${controlNames[i]}-container`);
         control.setAttribute("type", "range");

         if (i === 0) {       // pitch gets octave values of 12
            control.setAttribute("min", "-24");
            control.setAttribute("max", "24");
         } else {
            control.setAttribute("min", "0");
            control.setAttribute("max", "100");
         }
         
         if (i !== 5) {       // only volume defaults to half open
            control.setAttribute("value", "0");
         } else {
            control.setAttribute("value", "50");
         }

         label.innerHTML = `${controlNames[i].toLowerCase()}: ${control.value}`;

         control.setAttribute("class", "slider");
         control.setAttribute("id", `${controlNames[i]}`);
         label.appendChild(control)
         controlContainer.appendChild(label);
         innerRack.appendChild(controlContainer);
      }

      rack.appendChild(innerRack);

      return rack
   };

   const visualizer = function() {
      const vis = document.createElement("div");
      const screen = document.createElement("div"); 

      vis.classList.add('visualizer');      
      screen.classList.add('screen');
      vis.appendChild(screen);

      return vis
   };

   const unit = document.querySelector(".unit");

   const mainContainer = document.querySelector(".main-container");           // ADD VISUALIZER TO THE MAIN CONTAINER
   mainContainer.appendChild(visualizer());
   mainContainer.appendChild(FXRack());

// pitchshifting
   let pitchShiftValue = 24;
   let phaserShiftValue = 0;

   const pitchShifter = new Tone.PitchShift(12).toDestination();
   // const testAnalyser = new Tone.Analyser();
   const phaser = new Tone.Phaser(phaserShiftValue);
   const delay = new Tone.Delay();
   const distortion = new Tone.Distortion();
   const reverb = new Tone.Reverb();
   // const signalPath = [pitchShift];

   const phaserControl = document.getElementById("phaser");
   console.log(phaserControl);
   phaserControl.addEventListener("mousedown", (e) => {   //THIS WORKS FOR ALL SLIDERS!!!!!!
      const slider = e.target;

               

      function mouseMover(e) {
         console.log(e.target.value);

         // pitchControl.value = e.target.value;
         // slider.parentNode.innerHTML = `pitchshift: ${e.target.value}`;
         slider.setAttribute("value", `${e.target.value}`);
         phaserShiftValue = e.target.value;
         console.log(phaserShiftValue);
         // console.log(signalPath[0].pitch);
      }

      slider.addEventListener("mousemove", mouseMover)

      slider.addEventListener("mouseup", () => {
         slider.removeEventListener("mousemove", mouseMover);
      })
         // pitchControl.value = 
         // pitchControl.innerHTML = `pitchshift : ${pitchControl.value}`;
   })

   const pitchControl = document.getElementById("pitchShift");
   console.log(pitchControl);
   pitchControl.addEventListener("mousedown", (e) => {   //THIS WORKS FOR ALL SLIDERS!!!!!!
      const slider = e.target;

               

      function mouseMover(e) {
         console.log(e.target.value);

         // pitchControl.value = e.target.value;
         // slider.parentNode.innerHTML = `pitchshift: ${e.target.value}`;
         slider.setAttribute("value", `${e.target.value}`);
         pitchShiftValue = e.target.value;
         console.log(pitchShiftValue);
         // console.log(pitchShifter.pitch);
         // console.log(signalPath[0].pitch);
      }

      slider.addEventListener("mousemove", mouseMover)

      slider.addEventListener("mouseup", () => {
         slider.removeEventListener("mousemove", mouseMover);
      })
         // pitchControl.value = 
         // pitchControl.innerHTML = `pitchshift : ${pitchControl.value}`;
   })


   
// PUSH SAMPLE PLAYER OBJECTS INTO GRID

   function masterGrid(sampleList) {
      const grid = [];

      for (let i = 0; i < 8; i++) {
         const track = [];
         for (let j = 0; j < 32; j++) {
            
            const player = {
               sample: sampleList[i].connect(pitchShifter),
               isActive: false,
               pitch: 12
            }
           
            track.push(player);
         }
         grid.push(track);
      }

      return grid;
   }
   // .chain(pitchShifter, phaser, distortion, delay, reverb, testAnalyser)
   const MG = masterGrid(hiphopSamples());
   // SET UP CONTROL BAR
   
   const controlBar = function() {
      const bar = document.createElement("div");
      bar.classList.add('control-bar')
   
      for (let i = 0; i < 3; i++) {
         const controlArea = document.createElement("div");
         if (i === 0) {
            controlArea.classList.add("FX-controls");
         } else if (i === 1) {
            controlArea.classList.add("playback-controls");
         } else {
            controlArea.classList.add("rec-controls");
         }

         for (let j = 0; j < 4; j++) {
            const button = document.createElement("button");
            button.setAttribute('id', j)
            controlArea.appendChild(button);
         }
         bar.appendChild(controlArea);
      }
   
      return bar;
   };
   
   
   
   // SET UP RECORDER
   
   const recorder = function() {
   
   };
   
   // SET UP VISUALIZER
   
   

   
   // const audioCtx = new Analyser


   
   // CREATE ALL ELEMENTS AND ATTACH TO UNIT
   
  
   // const sequencer = setupSeq();
   // const controlBar = setupControlBar();
   // const FXRack = setupFX();
   // const recorder = setupRec();
   // const visualizer = setupVis();
   
   
   // unit.appendChild(controlBar);
   // unit.appendChild(sequencer);
   // unit.appendChild(FXRack);
   // unit.appendChild(recorder);
   // unit.appendChild(visualizer);
   
   // ADD ALL LISTENERS
   


   function setupStepListeners(masterGrid) {
      const sequencer = document.getElementsByClassName("sequencer")
      const allTracks = sequencer[0].children;
      
      for (let i = 0; i < 8; i++) {
         let track = allTracks[i];

         for (let j = 0; j < 32; j++) {
            let step = track.children[j];

            step.addEventListener("click", (e) => {
               const selectedStep = e.target;
               // const stepID = selectedStep.getAttribute("data-step-id");
              
               if (selectedStep.getAttribute('data-is-active') === 'false') {
                  selectedStep.setAttribute('data-is-active', true);
                  masterGrid[i][j].isActive = true;
                  console.log(selectedStep);
                  console.log(masterGrid[i][j]);
               } else {
                  selectedStep.setAttribute('data-is-active', false);
                  masterGrid[i][j].isActive = false;
                  console.log(selectedStep);
                  console.log(masterGrid[i][j]);
               }
            })
         }
      }
      
   };

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
   
   
   const seq = sequencer();
   const bar = controlBar();
   // const fx = new FXRack();
   // const rec = new Recorder();
   // const vis = new Visualizer();

   window.view = new View(unit, seq, bar);                   //sets up all views initially

   const playback = document.getElementsByClassName("playback-controls");
   const playButton = playback[0].firstChild;
   const stopButton = playback[0].children[1];
   stopButton.innerHTML = "Stop";
   playButton.innerHTML = "Play";

   playButton.addEventListener("click", (e) => {
      const play = e.target;
      play.classList.add("active");
   })

   let currentPlayMark = 0;

   

   

   // pitchShift(pitchControl.value);

   
   
      



     //, phaser, delay, distortion, reverb, gain

   // const testContext = new Tone.Context();
  
   // console.log(testContext);


   const loop = function(time) {
      let nextStep = currentPlayMark % 32;
      const allTracks = seq.getElementsByClassName('track');
      console.log(time);
      for (let i = 0; i < 8; i++) {
         const activeColumn = [allTracks[i].children[nextStep]]


         activeColumn.forEach((step) => {
            if (step.getAttribute("data-is-active") === "true") {
               
               step.classList.toggle('highlighted-selected');
            } else {
               step.classList.toggle('highlighted');
            }
         })

            
         
         // activeColumn.classList.remove('highlighted')
         
      }
      // console.log(currentSteps);

      let masterGrid = MG;
   
      for (let i = 0; i < masterGrid.length; i++) {
         const columnStep = masterGrid[i][nextStep];
         
         if (columnStep.isActive === true) {
            columnStep.sample.start(time).toDestination();    //chain here!!??
            
            console.log(columnStep.pitch)
         }
      }
      // console.log(signalPath[0]);
      // connect(testContext)
      // console.log(testAnalyser);
      // console.log(pitchShifter.numberOfInputs);
      // console.log(pitchShifter);
      
      currentPlayMark++;

      
   }

   stopButton.addEventListener("click", () => {
      Tone.Transport.stop();
   })

   // const looper = function() {
   //    return 
   // }
   
   
   

   Tone.Transport.scheduleRepeat(loop, "32n");
   // Tone.Destination.chain(looper, pitchShift);
   // looper.chain(pitchShift(shiftValue)).toDestination();         // give the scheduled loop

   playButton.addEventListener("click", () => {
      
      Tone.start();
      Tone.Transport.start();
      Tone.Transport.loopEnd = "1m"
      Tone.Transport.bpm.value = 120;
      
      
      console.log(Tone.Transport.bpm.value)
   })

});
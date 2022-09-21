import * as Tone from 'tone';

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

// FUNCTION THAT TURNS AUDIO INTO BLOBS (THEY ARE LITTLE PLAYER OBJECTS)

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

const technoSamples = {
   kick: blobify("./src/samples/hiphop/hip_hop_kick.wav"),
   snare: blobify("./src/samples/hiphop/hip_hop_snare.wav"),
   open_hihat: blobify("./src/samples/hiphop/hip_hop_hihat_open.wav"),
   closed_hihat: blobify("./src/samples/hiphop/hip_hop_hihat_closed.wav"),
   sub_bass: blobify("./src/samples/hiphop/hip_hop_sub.wav"),
   fx_hit: blobify("./src/samples/hiphop/hip_hop_orch_hit.wav"),
   lead: blobify("./src/samples/hiphop/hip_hop_lead.wav"),
   vox: blobify("./src/samples/hiphop/hip_hop_vox.wav")
};

const pianoSamples = {
   kick: blobify("./src/samples/hiphop/hip_hop_kick.wav"),
   snare: blobify("./src/samples/hiphop/hip_hop_snare.wav"),
   open_hihat: blobify("./src/samples/hiphop/hip_hop_hihat_open.wav"),
   closed_hihat: blobify("./src/samples/hiphop/hip_hop_hihat_closed.wav"),
   sub_bass: blobify("./src/samples/hiphop/hip_hop_sub.wav"),
   fx_hit: blobify("./src/samples/hiphop/hip_hop_orch_hit.wav"),
   lead: blobify("./src/samples/hiphop/hip_hop_lead.wav"),
   vox: blobify("./src/samples/hiphop/hip_hop_vox.wav")
};

const sillySamples = {
   kick: blobify("./src/samples/hiphop/hip_hop_kick.wav"),
   snare: blobify("./src/samples/hiphop/hip_hop_snare.wav"),
   open_hihat: blobify("./src/samples/hiphop/hip_hop_hihat_open.wav"),
   closed_hihat: blobify("./src/samples/hiphop/hip_hop_hihat_closed.wav"),
   sub_bass: blobify("./src/samples/hiphop/hip_hop_sub.wav"),
   fx_hit: blobify("./src/samples/hiphop/hip_hop_orch_hit.wav"),
   lead: blobify("./src/samples/hiphop/hip_hop_lead.wav"),
   vox: blobify("./src/samples/hiphop/hip_hop_vox.wav")
};

// SAMPLE BANKS OF BLOB PLAYERS

// SET UP SEQUENCER

function setupSeq() {
   const seq = document.createElement("div");
   seq.classList.add('sequencer');
   
   for (let i = 0; i < 8; i++) {
      const track = document.createElement("div");          //DONE EXCEPT CUSTOM TRACK INPUT
      track.classList.add('track');
      track.setAttribute('data-track-id', i);

      for (let j = 0; j < 32; j++) {
         const step = document.createElement("button");
         step.classList.add('step');
         step.setAttribute('data-step-id', j);
         step.setAttribute('data-is-active', false);

         track.appendChild(step);
      }

      seq.appendChild(track);
   }

   return seq;
};

// SET UP CONTROL BAR

function setupControlBar() {
   const controlBar = document.createElement("div");
   controlBar.classList.add('control-bar')

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
         controlBar.appendChild(controlArea);
      }

   return controlBar;
};

// SET UP FX-RACK

function setupFX() {

};

// SET UP RECORDER

function setupRec() {

};

// SET UP VISUALIZER

function setupVis() {

};

// CREATE ALL ELEMENTS AND ATTACH TO UNIT

const unit = document.querySelector(".unit");
const sequencer = setupSeq();
const controlBar = setupControlBar();
// const FXRack = setupFX();
// const recorder = setupRec();
// const visualizer = setupVis();


unit.appendChild(controlBar);
unit.appendChild(sequencer);
// unit.appendChild(FXRack);
// unit.appendChild(recorder);
// unit.appendChild(visualizer);

// ADD ALL LISTENERS

function setupTrackListeners(sequencer) {
   const allTracks = document.getElementsByClassName("track");      //gives all tracks event listeners to be bubbled up to

   for (let i = 0; i < allTracks.length; i++) {
      allTracks[i].addEventListener("click", (e) => {
         const selectedStep = e.target;
         const stepID = selectedStep.getAttribute("data-step-id");
         const currentTrack = e.currentTarget;
         const trackID = currentTrack.getAttribute("data-track-id");
        
         //possibly need to add stopPropogation to prevent track click or refactor

         if (selectedStep.getAttribute('data-is-active') === 'false') {
            selectedStep.setAttribute('data-is-active', true);
            console.log(selectedStep);
            console.log(sequencer);
            let row = sequencer.grid[trackID].row;
            row[stepID].isActive = true;
         } else {
            selectedStep.setAttribute('data-is-active', false);
            console.log(selectedStep);
            let row = sequencer.grid[trackID].row;
            row[stepID].isActive = false;
            console.log(sequencer);
         }       
      })
   }
};

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

export default { Big_File };
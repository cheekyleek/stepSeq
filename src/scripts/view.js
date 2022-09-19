class View {
   constructor(unit, seq) {  //, seq, fx, rec, vis
      this.unit = unit;
      this.seq = seq;
      // this.fx = fx;
      // this.rec = rec;
      // this.vis = vis;

      const newSeq = this.setupSeq();
      const newControlBar = this.setupControlBar();
      // const newFX = this.setupFX();
      // const newRec = this.setupRec();
      // const newVis = this.setupVis();
      

      unit.appendChild(newControlBar);
      unit.appendChild(newSeq);
      // unit.appendChild(newFX);
      // unit.appendChild(newRec);
      // unit.appendChild(newVis);
      this.setupTrackListeners(this.seq);

      return unit;
   }

   setupTrack() {
      const track = doscument.createElement
   }

   setupSteps() {

   }

   setupSeq() {
      const seq = document.createElement("div");
      seq.classList.add('sequencer');
      
      for (let i = 0; i < 8; i++) {
         const track = document.createElement("div");
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
   }

   setupTrackListeners(sequencer) {
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
               sequencer.grid[trackID].row[stepID].isActive = true;
               console.log(sequencer);
            } else {
               selectedStep.setAttribute('data-is-active', false);
               console.log(selectedStep);
               sequencer.grid[trackID].row[stepID].isActive = false;
               console.log(sequencer);
            }       
         })
      }
   }

   setupSeqPlaybackControl() {
      for (let i = 0; i < 4; i++) {

      }
   }

   setupControlBar() {
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
   }
}

export {View};




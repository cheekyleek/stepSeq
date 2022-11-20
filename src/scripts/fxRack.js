import * as Tone from "tone";

export class FXRack {
   constructor() {
      this.pitchShift = new Tone.PitchShift();
      this.reverb = new Tone.Reverb();
      this.delay = new Tone.PingPongDelay();
      this.changeReverb = this.changeReverb.bind(this);
      this.changePitch = this.changePitch.bind(this);
      this.changeDelay = this.changeDelay.bind(this);
   }

   changePitch(pitchVal) {
      this.pitchShift.pitch = pitchVal;
   }

   changeReverb(reverbVal) {
      if (reverbVal / 10 <= 0.002) {
         this.reverb.decay = 0.002
      } else {
         this.reverb.decay = reverbVal / 10;
      }
      
   }

   changeDelay(feedbackVal, noteVal) {
      // this.delay.delayTime = noteVal;
      // this.delay.feedback = feedbackVal / 100;
   }
};
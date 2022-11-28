import * as Tone from "tone";

export class FXRack {
   constructor() {
      //devices
      this.pitchShift = new Tone.PitchShift({
         "windowSize": 0.03
      });
      this.distort = new Tone.Distortion({
         "distortion": 0,
         "wet": 0
      });
      this.phaser = new Tone.Phaser({
         "frequency": 1,
         "baseFrequency": 100,
         "Q": 10,
         "wet": 0
      });
      this.delay = new Tone.FeedbackDelay("8n", 0);
      this.reverb = new Tone.Reverb({
         "decay": 5,
         "wet": 0
      });
      this.gain = new Tone.Volume({
         "volume": -6
      })

      //change methods
      this.changePitch = this.changePitch.bind(this);
      this.changeDistort = this.changeDistort.bind(this);
      this.changePhaser = this.changePhaser.bind(this);
      this.changeDelay = this.changeDelay.bind(this);
      this.changeReverb = this.changeReverb.bind(this);
      this.changeGain = this.changeGain.bind(this);
   }

   changePitch(pitchVal) {
      this.pitchShift.pitch = pitchVal;
   }

   changeDistort(distortVal) {
      if (distortVal / 10 <= 0.002) {   
         this.distort.wet.value = 0.002;         
      } else {
         this.distort.wet.value = 1;      
      }
      this.distort.distortion = distortVal / 10
   }

   changePhaser(phaserVal) {
      if (phaserVal / 10 <= 0.002) {   
         this.phaser.wet.value = 0.002;         
      } else {
         this.phaser.wet.value = 1;      
      }
      this.phaser.frequency.value = phaserVal / 8;
   }

   changeDelay(feedbackVal) {
      this.delay.feedback.value = feedbackVal / 100;
   }

   changeReverb(reverbVal) {
      if (reverbVal / 10 <= 0.002) {
         this.reverb.wet.value = 0.002;         
      } else {
         this.reverb.wet.value = reverbVal / 100;      
      }
   }

   changeGain(gainVal) {
      if (gainVal <= -50) {
         this.gain.volume.value = "-1000";
      } else {
         this.gain.volume.value = gainVal;
      }
   }
};
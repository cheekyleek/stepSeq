import * as Tone from "tone";

export class Sampler {
   constructor(FXRack) {
      this.source = {
         //drums

         sound1: new Tone.Player({url: "./src/samples/drums/kick.wav"}),
         sound2: new Tone.Player({url: "./src/samples/drums/snare.wav"}),
         sound3: new Tone.Player({url: "./src/samples/drums/clap.wav"}),
         sound4: new Tone.Player({url: "./src/samples/drums/closedHiHat.wav"}),
         sound5: new Tone.Player({url: "./src/samples/drums/openHiHat.wav"}),
         sound6: new Tone.Player({url: "./src/samples/drums/rim.wav"}),
         sound7: new Tone.Player({url: "./src/samples/drums/shaker.wav"}),
         sound8: new Tone.Player({url: "./src/samples/drums/wood.wav"}),

         //synthbass

         sound9: new Tone.Player({url: "./src/samples/bass/e2.wav"}),
         sound10: new Tone.Player({url: "./src/samples/bass/g2.wav"}),
         sound11: new Tone.Player({url: "./src/samples/bass/b2.wav"}),
         sound12: new Tone.Player({url: "./src/samples/bass/d3.wav"}),
         sound13: new Tone.Player({url: "./src/samples/bass/g3.wav"}),
         sound14: new Tone.Player({url: "./src/samples/bass/a3.wav"}),
         sound15: new Tone.Player({url: "./src/samples/bass/b3.wav"}),
         sound16: new Tone.Player({url: "./src/samples/bass/e4.wav"}),
         
         //soundfx

         sound17: new Tone.Player({url: "./src/samples/fx/inhale.wav"}),
         sound18: new Tone.Player({url: "./src/samples/fx/ping.wav"}),
         sound19: new Tone.Player({url: "./src/samples/fx/scratch.wav"}),
         sound20: new Tone.Player({url: "./src/samples/fx/noiseSweepUp.wav"}),
         sound21: new Tone.Player({url: "./src/samples/fx/noiseSweepDown.wav"}),

         
      }

      this.source.sound1.volume.value = +6;
      this.source.sound6.volume.value = -6;
      this.source.sound7.volume.value = -8;

      for (let i = 1; i <= 16; i++) {      //temporarily 7!!!
         const sound = 'sound' + i;
         this.source[sound].chain(FXRack.pitchShift, FXRack.distort, FXRack.phaser, FXRack.delay, FXRack.reverb, FXRack.gain, Tone.Destination);
      }

      this.playSample = this.playSample.bind(this);
   }

   playSample(soundKey, time) {
      this.source[soundKey].start(time);
   }
};
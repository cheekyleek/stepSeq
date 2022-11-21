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

         //soundfx

         sound8: new Tone.Player({url: "./src/samples/fx/inhale.wav"}),
         sound9: new Tone.Player({url: "./src/samples/fx/ping.wav"}),
         sound10: new Tone.Player({url: "./src/samples/fx/scratch.wav"}),
         sound11: new Tone.Player({url: "./src/samples/fx/noiseSweepUp.wav"}),
         sound12: new Tone.Player({url: "./src/samples/fx/noiseSweepDown.wav"}),

         //bass

         sound13: new Tone.Player({url: "./src/samples/bass/e2.wav"}),
         sound14: new Tone.Player({url: "./src/samples/bass/g2.wav"}),
         sound15: new Tone.Player({url: "./src/samples/bass/a2.wav"}),
         sound16: new Tone.Player({url: "./src/samples/bass/b2.wav"}),
         sound17: new Tone.Player({url: "./src/samples/bass/d3.wav"}),
         sound18: new Tone.Player({url: "./src/samples/bass/e3.wav"}),
         sound19: new Tone.Player({url: "./src/samples/bass/g3.wav"}),
         sound20: new Tone.Player({url: "./src/samples/bass/a3.wav"}),
         sound21: new Tone.Player({url: "./src/samples/bass/b3.wav"}),
         sound22: new Tone.Player({url: "./src/samples/bass/d4.wav"}),
         sound23: new Tone.Player({url: "./src/samples/bass/e4.wav"})
      }

      this.source.sound1.volume.value = +6;

      for (let i = 1; i <= 23; i++) {
         const sound = 'sound' + i;
         this.source[sound].chain(FXRack.pitchShift, FXRack.distort, FXRack.phaser, FXRack.delay, FXRack.reverb, FXRack.gain, Tone.Destination);
      }

      this.playSample = this.playSample.bind(this);
   }

   playSample(soundKey) {
      this.source[soundKey].start('+0.05');
   }
};
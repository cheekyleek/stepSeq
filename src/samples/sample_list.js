import * as Tone from 'tone'

const hiphopSamples = new Tone.ToneAudioBuffer("./hiphop/hip_hop_kick.wav", () => {
   const player = new Tone.Player().toDestination();
   player.buffer = hiphopSamples
   player.start();
});

console.log(hiphopSamples);
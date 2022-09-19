import * as Tone from 'tone'

const hiphopSamples = function() {
   let kick = blobify("./src/samples/hiphop/hip_hop_kick.wav");
   let snare = blobify("./src/samples/hiphop/hip_hop_snare.wav");
   let open_hihat = blobify("./src/samples/hiphop/hip_hop_hihat_open.wav");
   let closed_hihat = blobify("./src/samples/hiphop/hip_hop_hihat_closed.wav");
   let sub_bass = blobify("./src/samples/hiphop/hip_hop_sub.wav");
   let fx_hit = blobify("./src/samples/hiphop/hip_hop_orch_hit.wav");
   let lead = blobify("./src/samples/hiphop/hip_hop_lead.wav");
   let vox = blobify("./src/samples/hiphop/hip_hop_vox.wav");

   return [kick, snare, open_hihat, closed_hihat, sub_bass, fx_hit, lead, vox];
}

function blobify(samplePath) {
   let xhr = new XMLHttpRequest();
   let player = new Tone.Player;

   xhr.open("GET", samplePath, true)
   xhr.responseType = 'blob';

   xhr.onload = function(){
      let blob = URL.createObjectURL(this.response);
      player.load(blob);
      console.log('pressed');
      console.log(blob);
   };
   
   xhr.send();
   return player;
}

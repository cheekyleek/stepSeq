import * as Tone from 'tone'

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

// export * as Samples from "./src/sample_list.js"

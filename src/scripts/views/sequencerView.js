export const sequencerView = () => {
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
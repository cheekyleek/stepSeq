export const gridView = (sampler) => {
   const grid = document.createElement("div");
   grid.classList.add('grid');
   
   for (let i = 0; i < 8; i++) {
      const track = document.createElement("div");          //DONE EXCEPT CUSTOM TRACK INPUT
      track.classList.add('track');

      if (i < 8) {
         track.setAttribute('id', `drums-${i}`);
      } else if (i >= 8 && i < 12) {
         track.setAttribute('id', `soundfx-${i}`)
      }
      

      for (let j = 0; j < 32; j++) {
         // if (j % 4 === 0 && j !== 0) {
         //    let lineBreak = document.createElement("div");
         //    lineBreak.classList.add("spacer");
         //    track.appendChild(lineBreak);
         // }

         const step = document.createElement("button");
         step.classList.add('step');

         if (i < 8) {
            // step.classList.add("custom-samples");
            // step.classList.add("sound-fx");
            // step.classList.add("synth");
            step.classList.add("drums");
         }
         
         step.setAttribute('id', j);
         step.setAttribute('data-is-active', "false");
         step.addEventListener('click', () => {
            if (step.getAttribute('data-is-active') === "false") {
               step.setAttribute('data-is-active', "true")
            } else {
               step.setAttribute('data-is-active', "false")
            }
         })

         track.appendChild(step);
      }

      grid.appendChild(track);
   }

   return grid;
};
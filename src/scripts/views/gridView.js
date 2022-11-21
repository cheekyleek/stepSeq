export const gridView = () => {
   const grid = document.createElement("div");
   grid.classList.add('grid');
   
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

      grid.appendChild(track);
   }

   return grid;
};
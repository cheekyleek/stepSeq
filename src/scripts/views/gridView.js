export const gridView = (sampler) => {
   const grid = document.createElement("div");
   grid.classList.add('grid');

   for (let i = 1; i <= 5; i++) {
      const subGrid = document.createElement("div");
      const underConstruction = document.createElement("span");
      underConstruction.classList.add("under-construction");
      underConstruction.innerHTML = "COMING SOON";
      subGrid.classList.add('sub-grid');
      subGrid.setAttribute("id", i);

      if (i === 1) {
         for (let j = 0; j < 8; j++) {
            const trackGroove = document.createElement("div");
            trackGroove.classList.add("track-groove");
            subGrid.appendChild(trackGroove);
         }
      } else if (i === 5) {    //temporary under construction message
         grid.appendChild(underConstruction);
      } else {
         for (let j = 1; j <= 8; j++) {
            const track = document.createElement("div");
            track.classList.add('track');

            switch(i) {
               case 2:
                  track.setAttribute('id', `drums-${j}`);
                  track.setAttribute('visible', "true");
                  break;
               case 3:
                  track.setAttribute('id', `synth-${j}`);
                  track.setAttribute('visible', "false");
                  break;
               case 4:
                  track.setAttribute('id', `sound-fx-${j}`);
                  track.setAttribute('visible', "false");
                  break;
               case 5:
                  track.setAttribute('id', `custom-sample-${j}`);
                  track.setAttribute('visible', "false");
                  break;
               default:
                  null;
            }

            for (let k = 0; k < 32; k++) {
               const step = document.createElement("button");
               step.classList.add('step');

               switch(i) {
                  case 2:
                     step.classList.add("drums");
                     break;
                  case 3:
                     step.classList.add("synth");
                     break;
                  case 4:
                     step.classList.add("sound-fx");
                     break;
                  case 5:
                     step.classList.add("custom-sample");
                     break;
                  default:
                     null;
               }
               
               step.setAttribute('id', k);
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

            subGrid.appendChild(track);
         }
      }

      grid.appendChild(subGrid);
   }

   return grid;
};
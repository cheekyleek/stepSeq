import { CONTROLNAMES } from "./fxView.js";

export const ctrlView = () => {
   const controlBar = document.createElement("div");
   controlBar.classList.add('control-bar')

   for (let i = 0; i < 3; i++) {
      const controlArea = document.createElement("div");
      controlArea.classList.add("control-area");

      if (i === 0) {
         controlArea.setAttribute('id', 'FX-readouts');

         for (let i = 0; i < CONTROLNAMES.length; i++) {
            const readOutContainer = document.createElement("div");
            const readOut = document.createElement("p");
            let value;
   
            readOutContainer.setAttribute('class', 'readout-container');
            readOut.setAttribute('id', `${CONTROLNAMES[i]}-readout`);

            if (i === 5) {
               readOut.innerHTML = -6;
            } else {
               readOut.innerHTML = 0;
            }

            readOutContainer.appendChild(readOut);
            controlArea.appendChild(readOutContainer);
         }

      // } else if (i === 1) {
      //    controlArea.classList.add("center-controls");

      } else {
         controlArea.classList.add("other-controls");
         for (let j = 0; j < 4; j++) {
            const button = document.createElement("button");
            if (i === 0 && j === 3) {
               button.classList.add("fx-folder");
               button.innerHTML = "FX"
            }
            button.setAttribute('id', j)
            controlArea.appendChild(button);
         }
      }

      controlBar.appendChild(controlArea);
   }

   return controlBar;
};
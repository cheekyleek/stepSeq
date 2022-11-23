import { CONTROLNAMES } from "./fxView.js";

export const ctrlView = () => {
   const controlBar = document.createElement("div");
   controlBar.classList.add('control-bar');

   for (let i = 0; i < 3; i++) {
      const controlArea = document.createElement("div");
      controlArea.classList.add("control-area");

      if (i === 0) {
         controlArea.setAttribute('id', 'FX-readouts');

         for (let controlName of CONTROLNAMES) {
            const readOutContainer = document.createElement("div");
            const readOut = document.createElement("p");
            const input = document.getElementById(controlName);
   
            readOutContainer.setAttribute('class', 'readout-container');
            readOut.setAttribute('id', `${controlName}-readout`);
            readOut.innerHTML = input.value;

            readOutContainer.appendChild(readOut);
            controlArea.appendChild(readOutContainer);
         }

      } else if (i === 1) {
         controlArea.setAttribute("id", "center-controls");

         for (let j = 0; j < 6; j++) {
            const readOutContainer = document.createElement("div");
            const button = document.createElement("button");
            const icon = document.createElement("i");
            const readOut = document.createElement("p");
            const rack = document.getElementsByClassName("fx-rack")[0];
            button.appendChild(icon);
            readOutContainer.setAttribute('class', 'readout-container');

            switch(j) {
               case 0:
                  button.setAttribute("id", "fx-folder");
                  button.innerHTML = "FX"
                  button.addEventListener("click", () => {
                     if (rack.getAttribute("folded") === "true") {
                        rack.setAttribute("folded", "false");
                     } else {
                        rack.setAttribute("folded", "true");
                     }})
                  break;
               case 1:
                  button.setAttribute("id", "play-button");
                  icon.setAttribute("class", "fa-solid fa-play");
                  break;
               case 2:
                  button.setAttribute("id", "stop-button");
                  icon.setAttribute("class", "fa-solid fa-stop");
                  break;
               case 3:
                  button.setAttribute("id", "bpm-down-button");
                  icon.setAttribute("class", "fa-solid fa-angle-left");
                  break;
               case 4:
                  readOut.setAttribute("id", "bpm-readout");
                  readOutContainer.appendChild(readOut)
                  // readOut
                  break;
               case 5:
                  button.setAttribute("id", "bpm-up-button");
                  icon.setAttribute("class", "fa-solid fa-angle-right");
                  break;
               default:
                  null;
            }

            if (j === 4) {
               controlArea.appendChild(readOutContainer);
            } else {
               controlArea.appendChild(button);
            }
         } 
      } else {
         controlArea.classList.add("right-controls");
    
         // button.setAttribute('id', j)
         // controlArea.appendChild(button);
      }

      controlBar.appendChild(controlArea);
   }

   return controlBar;
};
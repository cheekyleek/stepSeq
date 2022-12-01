import { CONTROLNAMES } from "./fxView.js";
import * as Tone from 'tone';

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

         for (let j = 0; j < 7; j++) {
            const readOutContainer = document.createElement("div");
            const button = document.createElement("button");
            const icon = document.createElement("i");
            const toolTip = document.createElement("span");
            const readOut = document.createElement("p");
            
            button.appendChild(icon);
            button.appendChild(toolTip);
            readOutContainer.setAttribute('class', 'readout-container');
            toolTip.setAttribute("class", "tooltip");

            switch(j) {
               case 0:
                  button.setAttribute("id", "fx-folder");
                  toolTip.innerHTML = "FX Folder";
                  icon.setAttribute("class", "fa-solid fa-sliders");
                  break;
               case 1:
                  button.setAttribute("id", "play-button");
                  button.setAttribute("data-is-active", "false");
                  toolTip.innerHTML = "Play";
                  icon.setAttribute("class", "fa-solid fa-play");
                  break;
               case 2:
                  button.setAttribute("id", "stop-button");
                  button.setAttribute("data-is-active", "false");
                  toolTip.innerHTML = "Stop";
                  icon.setAttribute("class", "fa-solid fa-stop");
                  break;
               case 3:
                  button.setAttribute("id", "bpm-down-button");
                  toolTip.innerHTML = "Tempo Down";
                  icon.setAttribute("class", "fa-solid fa-angle-left");
                  break;
               case 4:
                  readOut.setAttribute("id", "bpm-readout");
                  readOut.innerHTML = Tone.Transport.bpm.value;
                  readOutContainer.appendChild(readOut);
                  break;
               case 5:
                  button.setAttribute("id", "bpm-up-button");
                  toolTip.innerHTML = "Tempo Up";
                  icon.setAttribute("class", "fa-solid fa-angle-right");
                  break;
               case 6:
                  button.setAttribute("id", "clear-button");
                  toolTip.innerHTML = "Clear All Patterns";
                  icon.setAttribute("class", "fa-regular fa-circle-xmark");
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
         controlArea.setAttribute("id", "right-controls");

         for (let j = 0; j < 4; j++) {
            const button = document.createElement("button");
            const icon = document.createElement("i");
            const toolTip = document.createElement("span");
            const imgIcon = document.createElement("div");

            toolTip.setAttribute("class", "tooltip");

            switch(j) {
               case 0:
                  button.setAttribute("id", "drums-selector");
                  button.setAttribute("class", "drums");
                  button.setAttribute("data-is-active", "true");
                  button.appendChild(icon);
                  button.appendChild(toolTip);
                  toolTip.innerHTML = "Drums";
                  icon.setAttribute("class", "fa-solid fa-drum");
                  break;
               case 1:
                  button.setAttribute("id", "synth-selector");
                  button.setAttribute("class", "synth");
                  button.setAttribute("data-is-active", "false");
                  button.appendChild(imgIcon);
                  button.appendChild(toolTip);
                  toolTip.innerHTML = "Synth";
                  imgIcon.setAttribute("class", "piano-icon");
                  break;
               case 2:
                  button.setAttribute("id", "sound-fx-selector");
                  button.setAttribute("class", "sound-fx");
                  button.setAttribute("data-is-active", "false");
                  button.appendChild(icon);
                  button.appendChild(toolTip);
                  toolTip.innerHTML = "Sound FX";
                  icon.setAttribute("class", "fa-solid fa-bullhorn");
                  break;
               case 3:
                  button.setAttribute("id", "custom-samples-selector");
                  button.setAttribute("class", "custom-sample");
                  button.setAttribute("data-is-active", "false");
                  button.appendChild(imgIcon);
                  button.appendChild(toolTip);
                  toolTip.innerHTML = "Custom Samples";
                  imgIcon.setAttribute("class", "mic-icon");
                  break;
               default:
                  null;
            }

            controlArea.appendChild(button);
         }
      }

      controlBar.appendChild(controlArea);
   }

   return controlBar;
};
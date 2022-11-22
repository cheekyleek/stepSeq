import { CONTROLNAMES } from "./fxView.js";

export const ctrlView = () => {
   // console.log(CONTROLNAMES);
   // console.log(document);
   const bottomContainer = document.getElementsByClassName("bottom-container");
   console.log(bottomContainer[0], "this is the one");
   const seq = bottomContainer[0].childNodes;
   console.log(seq);
   const seqChildNodes = seq[0];
   debugger
   console.log(seqChildNodes)
   const htmlCollection = document.getElementsByClassName('slider');

   // console.log(htmlCollection[0])



   // console.log(document.getElementById('pitch'));


   const controlBar = document.createElement("div");
   controlBar.classList.add('control-bar');
   controlBar.setAttribute("id", "control-bar");
   console.log(document.getElementsByClassName("control-bar"));

   console.log(document.getElementById("control-bar"));

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
   console.log(seq)
   debugger
   return controlBar;
};
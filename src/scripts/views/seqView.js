import { ctrlView } from "./ctrlView.js";
import { gridView } from "./gridView.js";
import { fxView } from "./fxView.js";
import { visView } from "./visView.js";

export const seqView = () => {
   const sequencer = document.createElement("div");
   sequencer.classList.add("sequencer");
   
   // sequencer.appendChild(gridView());
   sequencer.appendChild(fxView());
   sequencer.appendChild(ctrlView());
   sequencer.appendChild(visView());

   return sequencer
}


export const FXRackView = () => {
   const controlNames = ["pitch", "phaser", "delay", "distort", "reverb", "gain"]
   const rack = document.createElement("div");

   rack.classList.add('fx-rack');

   for (let i = 0; i < 6; i++) {
      const controlContainer = document.createElement("div");
      const controlContainerUpper = document.createElement("div");
      const controlContainerLower = document.createElement("div");
      const controlContainerUpperLeft = document.createElement("div");
      const controlContainerUpperRight = document.createElement("div");
      const input = document.createElement("input");
      const label = document.createElement("label");
      const readOut = document.createElement("p");

      controlContainer.classList.add(`control-container`);
      controlContainerUpper.classList.add('control-container-upper');
      controlContainerLower.classList.add('control-container-lower');
      controlContainerUpperLeft.classList.add('control-container-upper-left');
      controlContainerUpperRight.classList.add('control-container-upper-right');

      input.setAttribute("type", "range");
      input.setAttribute("class", "slider");
      input.setAttribute("id", `${controlNames[i]}`);
      readOut.setAttribute("id", `${controlNames[i]}-readout`);

      if (i === 0) {                            // pitch gets octave values of 12
         input.setAttribute("min", "-24");
         input.setAttribute("max", "24");
      } else {
         input.setAttribute("min", "0");
         input.setAttribute("max", "100");
      }
      
      if (i !== 5) {                            // only volume defaults to half open
         input.setAttribute("value", "0");
      } else {
         input.setAttribute("value", "50");
      }

      label.innerHTML = `${controlNames[i].toUpperCase()}`;
      label.setAttribute("for", `${controlNames[i]}`);

      readOut.innerHTML = `${input.value}`;

      controlContainerUpperLeft.appendChild(label);
      controlContainerUpperRight.appendChild(input);
      controlContainerUpper.appendChild(controlContainerUpperLeft);
      controlContainerUpper.appendChild(controlContainerUpperRight);
      controlContainerLower.appendChild(readOut);

      controlContainer.appendChild(controlContainerUpper);
      controlContainer.appendChild(controlContainerLower);
   
      rack.appendChild(controlContainer);
   }

   rack.setAttribute("folded", true);

   return rack
};
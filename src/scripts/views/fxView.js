export const CONTROLNAMES = ["pitch", "phaser", "delay", "distort", "reverb", "gain"];

export const fxView = () => {
   const rack = document.createElement("div");

   rack.classList.add('fx-rack');

   for (let i = 0; i < 6; i++) {
      const sliderContainer = document.createElement("div");
      const sliderContainerLeft = document.createElement("div");
      const sliderContainerRight = document.createElement("div");
      const input = document.createElement("input");
      const label = document.createElement("label");
      
      sliderContainer.classList.add('slider-container');
      sliderContainerLeft.classList.add('slider-container-left');
      sliderContainerRight.classList.add('slider-container-right');

      input.setAttribute("type", "range");
      input.setAttribute("class", "slider");
      input.setAttribute("id", `${CONTROLNAMES[i]}`);
      

      if (i === 0) {                            // pitch gets octave values of 12
         input.setAttribute("min", "-24");
         input.setAttribute("max", "24");
      } else if (i === 2) {
         input.setAttribute("min", "0");
         input.setAttribute("max", "90"); // probably going to have to come down once loop is used
      } else if (i === 5) {
         input.setAttribute("min", "-50");
         input.setAttribute("max", "0"); // probably going to have to come down once loop is used
      } else {
         input.setAttribute("min", "0");
         input.setAttribute("max", "100");
      }
      
      if (i !== 5) {                            // only volume defaults to half open
         input.setAttribute("value", "0");
      } else {
         input.setAttribute("value", "-6");
      }

      label.innerHTML = `${CONTROLNAMES[i].toUpperCase()}`;
      label.setAttribute("for", `${CONTROLNAMES[i]}`);

      sliderContainerLeft.appendChild(label);
      sliderContainerRight.appendChild(input);
      sliderContainer.appendChild(sliderContainerLeft);
      sliderContainer.appendChild(sliderContainerRight);
   
      rack.appendChild(sliderContainer);
   }

   rack.setAttribute("folded", true);

   console.log(document.getElementsByClassName("bottom-container")[0].childNodes)

   console.log(document.getElementById("pitch"))
   console.log(document.getElementsByClassName("slider-container"))

   return rack
};

// const readOut = document.createElement("p");

// controlContainerLower.classList.add('control-container-lower');

// readOut.setAttribute("id", `${controlNames[i]}-readout`);

// controlContainerLower.appendChild(readOut);

// readOut.innerHTML = `${input.value}`;

// controlContainer.appendChild(controlContainerLower);
export const ctrlView = () => {
   const controlBar = document.createElement("div");
   controlBar.classList.add('control-bar')

   for (let i = 0; i < 3; i++) {
      const controlArea = document.createElement("div");
      if (i === 0) {
         controlArea.classList.add("FX-controls");
      } else if (i === 1) {
         controlArea.classList.add("playback-controls");
      } else {
         controlArea.classList.add("rec-controls");
      }

      for (let j = 0; j < 4; j++) {
         const button = document.createElement("button");
         if (i === 0 && j === 3) {
            button.classList.add("fx-folder");
            button.innerHTML = "FX"
         }
         button.setAttribute('id', j)
         controlArea.appendChild(button);
      }

      controlBar.appendChild(controlArea);
   }

   return controlBar;
};
import * as Tone from "tone";

export class Visualizer {
   constructor() {
      this.analyser = new Tone.Analyser();
   }

   connectAnalyser(output) {
      output.connect(this.analyser);
   }

   drawWaveform(canvas) {
      const dataArray = this.analyser.getValue();
      const width = canvas.width;
      const height = canvas.height;
      const barWidth = 1;
      const canvasContext = canvas.getContext('2d');
      canvasContext.clearRect(0, 0, width, height);
      let x = 0;
      dataArray.forEach((item, index, array) => {
         const y = Math.abs(item) / 255 * height * 1.5;
         canvasContext.strokeStyle = 'rgba(0, 0, 0, .3)';
         x = x + barWidth;
         canvasContext.beginPath();
         canvasContext.lineCap = "round";
         canvasContext.lineWidth = 4;
         canvasContext.moveTo(x, y);
         canvasContext.lineTo(x, height);
         canvasContext.stroke();
      })
   }
}
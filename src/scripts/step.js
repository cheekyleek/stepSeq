class Step {
   constructor(stepID, sample, pitch = 50, velocity = 100, glide = false) {
      this.stepID = stepID;
      this.pitch = pitch;
      this.velocity = velocity;
      this.glide = glide;
      this.isActive = false;
      this.sample = sample;
   }
}


export default Step;

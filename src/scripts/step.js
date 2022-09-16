class Step {
   constructor(pitch = 50, velocity = 100, glide = false) {
      this.pitch = pitch;
      this.velocity = velocity;
      this.glide = glide;
   }

   test() {
      const hello = console.log("saying hi");
      return hello;
   }
}

module.exports = Step;
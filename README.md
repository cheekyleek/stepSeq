# *stepSeq*
A step sequencer with preset style patterns/ themes, effects, and custom sample loading

---------------------------------------------------------------------------------------

This is my first attempt at building a step sequencer that runs completely in the browser. It comes shipped with at least 6 "style" presets representing
different genres of music, each made up of multiple drums and other instruments. The user is able to arrange where they want to put these audio samples in 
a 32-step grid representing a 2 bar pattern, with one row per instrument. This pattern plays, and after reaching the end, loops back again continuously.
The user can then change the sound of the audio dynamically using the different audio effect modules included.

Along with the 6 pre-loaded style patterns, the user also has the ability to use their microphone to record their own samples to be loaded into the
sequencer as they wish, tailoring it to a more custom sound. I hope to also implement the ability to load a sample from the user's device, allowing for them
to select / chop / add specific sections of that sample into the sequencer.

---------------------------------------------------------------------------------------

**In stepSeq, users will be able to:**

- Choose from an assortment of sound pallette presets
- Arrange instrument play patterns
- Dynamically change these patterns with effects as they loop
- Record / load / loop / effect their own samples


**In addition, this project will include:**

- Style-dependent theme reskins
- Note-style selection for melodical instruments
- A mini tutorial / README
- More functionality to come... :)

---------------------------------------------------------------------------------------

**Wireframe Mockup**

![stepSeq mockup1](https://user-images.githubusercontent.com/66338879/190670304-a8cf0adf-78ed-4a28-b198-710315223993.jpg)



---------------------------------------------------------------------------------------

**Technologies**

- WebAudio API
- Canvas API
- Tone.js
- Wad.js
- Howler.js
- IndexedDB

---------------------------------------------------------------------------------------

**Implementation Timeline**

- 9/16/22 > finish wireframe mockup, learn / begin canvas page structure
- 9/17/22 > finish rough canvas, begin structuring logic
- 9/18/22 > build out basic looping and audio functions, create effects if time
- 9/19/22 > get started with browser "DB" and microphone recording
- 9/20/22 > start polishing and making sure all features are working, refactoring
- 9/21/22 > add css animations/transitions
- 9/22/22 > tie up any loose ends / finishing touches


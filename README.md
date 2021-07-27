## Background:

TBD is an interactive symphonic coloring book that allows users to choose from an array of colors that correspond to a different musical loop whereby filling an empty space on the image with a color also begins playback of a particular instrument or loop.  Once the image is colored, the image will contain all of the associated sound tracks, and the user will be able to click around the image to play the music.  

## Functionality and MVPs:

* render a blank coloring book image 
* incorporate a color palette with corresponding sounds
* paint with "sound color":  each click will initialize the sound
* once image is complete, be able to click around to play different sounds via a "solo" button or "play" the whole image as a loop via the play button


## Wireframes:

<img width="1024" alt="Screen Shot 2021-07-27 at 1 58 36 PM" src="https://user-images.githubusercontent.com/77473921/127212222-6e1a3703-ecef-4646-995f-a1d87ad42f04.png">

* Below the image will be the color palette 

* On the left will be the "solo" and "play" buttons


## Technologies and APIs:

This project will be implemented with the following technologies:

* SVG to create graphic illustrations of the coloring book
* Tone.js to grab a cascade of sounds for each individual color
* Webpack and Babel to bundle and transpile the source 
* JavaScript code npm to manage project dependencies

## Implementation Timeline:

Monday: Setup project, try to learn NFL API, realize it's garbage and bail.  

Tuesday: Research SVG and Tone.js to lay framework for sound coloring; build out CSS map.

Wednesday: Pull sounds from Tone.js library and tie them to individual colors; make sounds play when color is chosen and applied to the image.  

Thursday: Finish logic for playing sounds, work on NavLinks.

Friday: Deploy to GitHub pages. If time, rewrite this proposal as a production README.

## Background:

FanStat is an interactive symphonic coloring book that allows users to choose from an array of colors that correspond to a different musical loop whereby filling an empty space on the image with a color also begins playback of a particular instrument or loop.  Once the image is colored, the image will contain all of the associated sound tracks, and the user will be able to click around the image to play the music.  

## Functionality and MVPs:

* render a blank coloring book image 
* incorporate a color palette with corresponding sounds
* paint with "sound color":  each click will initialize the sound
* once image is complete, be able to click around to play different sounds via a solo button or play the wholo image as a loop via the play button


## Wireframes:

<img width="1024" alt="Screen Shot 2021-07-27 at 1 58 36 PM" src="https://user-images.githubusercontent.com/77473921/127212222-6e1a3703-ecef-4646-995f-a1d87ad42f04.png">


The NavLinks header will include information about the functionality of the data visualizer and links to my personal pages.

* On the left will be a section of AFC teams and NFC teams that and be clicked to pull up a collection of teams that can be further sorted into players.

* On the right will be a search bar for players, as well as dropdown filters to select certain players by position.

* The middle will include the bubble chart of player stats.

## Technologies and APIs:

This project will be implemented with the following technologies:

* D3.js to render the data in a color-coded bubble map format 
* Webpack and Babel to bundle and transpile the source 
* JavaScript code npm to manage project dependencies NFL reference library for stats

## Implementation Timeline:

Monday: Setup project, including getting webpack up and running. Figure out how to reference NFL stats and get them to render on page.

Tuesday: Get search functionality implemented whereby players will be pulled from the library successfully. Once completed, successfully enhance search feature with use of dropdown tabs to search by position. Also, make sure searching players through team lineups is doable.

Wednesday: Once players are pulled successfully, localize all important stats that are deemed necessary for fantasy football standards. After a rubric is set, get those stats to utilize D3.js and render in a bubble format.

Thursday: Finish graph layout, work on NavLinks.

Friday: Deploy to GitHub pages. If time, rewrite this proposal as a production README.

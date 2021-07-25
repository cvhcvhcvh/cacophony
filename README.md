
Background:

FanStat is a classic data visualizer that utilizes D3.js to create a functional yet inspiring backdrop for statistical analysis of fantasy football data.  A player can be searched by name, position, or team.  Once selected, certain key stats are displayed on the page in a bubble and colored format.  Only stats that are deemed relevant for fantasy football will be displayed.  Successful stats will be shown proportionally as well as color-coded.  Red stats:  poor; yellow stats: neutral; green stats: good.  


Functionality and MVPs:

In FanStat, users will be able to:

1. search for a player by: name, position, team
2. categorize by season
3. toggle between NFL stats and corresponding fantasy stats/points
4. view trending players in the fantasy football landscape


Wireframes:

The NavLinks header will include information about the functionality of the data visualizer and links to my personal pages.  

On the left will be a section of AFC teams and NFC teams that and be clicked to pull up a collection of teams that can be further sorted into players.  

On the right will be a search bar for players, as well as dropdown filters to select certain players by position.

The middle will include the bubble chart of player stats.  


Technologies and APIs:

This project will be implemented with the following technologies:

D3.js to render the data in a color-coded bubble map format 
Webpack and Babel to bundle and transpile the source JavaScript code
npm to manage project dependencies
NFL reference library for stats

Implementation Timeline:

Monday: Setup project, including getting webpack up and running. Figure out how to reference NFL stats and get them to render on page. 

Tuesday: Get search functionality implemented whereby players will be pulled from the library successfully.  Once completed, successfully enhance search feature with use of dropdown tabs to search by position.  Also, make sure searching players through team lineups is doable.  

Wednesday: Once players are pulled successfully, localize all important stats that are deemed necessary for fantasy football standards.  After a rubric is set, get those stats to utilize D3.js and render in a bubble format.  

Thursday: Finish graph layout, work on NavLinks.  

Friday: Deploy to GitHub pages. If time, rewrite this proposal as a production README.

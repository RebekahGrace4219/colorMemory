W# Pre-work - *Memory Game*

**Colored Memories** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Rebekah Grace**

Time spent: **2.5** hours spent in total

Link to project: (https://glitch.com/edit/#!/iron-obvious-binder?path=index.html%3A91%3A30

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
1. The user can now select their own base colors.  This is done to help players who have color reading issues, such as color blindness.
2. The highest score the player has obtained at all is now printed on the screen.
3. I changed the background colors to my school colors. Go Aggies!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
link: https://drive.google.com/file/d/1iYgZOJhT5EUQV81OVpfGKcdoCpIhJlLK/view?usp=sharing


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
  I used this to learn how to create color picker items:
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

  I was not familiar with CSS and HTML coming into this project. I had, however, used Javascript in a limited capacity.  
  I had no idea what the various options were, though I knew I wanted to give the user the ability to change the colors themselves. 
  I had heard previously that color based games were very difficult for people with color blindness.  I suppose the tones would prevent some of 
  that issue, but I still like to be inclusive.
  
  My first idea was to simply ask for hexadecimal inputs, but that would have been quite ugly. The user would have had to give 5 different colors
  and would have needed to place the values without seeing them. My next idea was to display the color values that the user inputted in a box off 
  to the side.  It would have at least solved the issue that the user could not see their desired colors.  It still felt wrong, though, and I knew 
  there had to be a better way.  So I did what every good programmer does and I googled the issue.  I found that HTML language has a built in color 
  picker, and I thought that was an excellent idea.  Still, it did not work right away.  Even though I managed to get the HTML attributes to work, 
  I could not integrate them into JavaScript and CSS.  Eventually, I managed to call the HTML element and grab its value, something I probably should 
  have tried in the first place.  It had been years since I've looked at HTML, though.  Overall, it worked out.  I suppose I overcame my issue with a 
  lot of testing and a lot of googling.
  
3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

  I liked working with CSS and HTML. I saw the value in the ability to determine one style sheet and to not rewrite everything. However, as I went on, 
  I was diverting more and more from the CSS to the JS.  I was wondering, do people usually manage to fit things that change during the program into the 
  CSS?  Can the CSS hold changing variables?  I was not really sure, and I was running out of time to solve it (I only found the job posting one day 
  before it was due).  I decided just to research the problem later.  Additionally, how does the JS know to pull from the HTML?  Does it just look for 
  the item it wants from any HTML file in its folder? I will have to research that too.  Those were my main questions.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

  I started this project way later than I would have liked. I found the job posting literally the night before it was due, and I had other coursework in
  between.  At most, I had three hours to spare for creating it and doing these short responses.  So, I would not say that it reflects my best work. 
  I really wanted to change the shapes of the buttons. I found a file that would teach my how to do so, but I could not implement it in time. I was going 
  to make a flag, a rectangle, a circle, a star and a hexagon. I thought that would make the game even more accessible: because even people with extreme 
  colorblindness would be able to distinguish the shapes pretty easily.  On top of that, I wanted to add words on each of the buttons, describing their 
  tone.  Perhaps, I would do both. This way, the readers that blind people use to utilize the internet, could pick up on the different buttons.  If I added
  that and the ability to select buttons by number (i.e. keyboard input 1 means button 1), then blind people could play by memorizing the tones.  I wanted 
  to add more, I just did not have the time.



## License

    Copyright Rebekah Grace

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

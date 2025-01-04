# Code Quiz

[**Live Deployment**](https://nfereidooni.github.io/nf_code_quiz/)

## Description 

The goal of this project was to build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## HTML File

The HTML code is built with all pages / elements in the same file, using bootstrap to design the UI. It uses the display "none" and "inline" attributes to show and hide the different sections as you click through the quiz. The differente sections are:
* The Start Page
* The Questions Pages
* The Results Screen
* The Highscores Page

## Javascript File

The Javascript contains all of the quiz functionality.

### Start Game
* When Start Game is clicked, the timer starts (75 seconds) and you are presented with the first question

### Questions
* When the correct answer is clicked, 10 points is added to the user's score, and you are presented with the next question
* When the incorrect answer is clicked, 10 seconds is subtracted from the clock, and you are presented with the next question

### End Game
* When all the questions are answered or the timer reached 0, the game ends
* When the game ends, you can save your initials and score into the highscores list
* On the highscores page, you can restart the game or clear the highscores list

## CSS File

The CSS file is used to:
* Hide the sections not required on the initial screen - "Start Page"
* Center the Highscore Page

## Challenges & Potential Improvements

* Centering of Highscore List
* Sorting of Highscore List (highest score should be at the top)
* Timer position in Navbar moves when screen is resized

## Credits

* Fil
* Daniel
* My amazing peers!
* Groot (my 7-month old puppy)

## License

Copyright (c) 2020] [Niki Fereidooni]
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

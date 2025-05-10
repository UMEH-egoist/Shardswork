The page has a dark theme background with white text for modern look.
The <h1> heading introduces the "Tech Students Showcase" with emojis.
A container <div id="students-container"></div> is where the student cards will be dynamically inserted by JavaScript.
The CSS styles define how the cards look, including colors, spacing, fonts, and animations.
The slide-In animation moves cards from left to right with fade-in effect.
The score bar is a colored horizontal bar that visually represents the student's score.
The JavaScript file index.js is linked at the bottom of the body to ensure the DOM is loaded before the script runs

Oyetunde Daniel, [10/05/2025, 16:51]
Data Setup:
An array students contains 5 student objects, each with properties: firstName, lastName, age, score, and courses (an array of strings).
Destructuring with .map():
We use array destructuring inside .map() to extract properties from each student object and create a string description for each student. This fulfills the assignment requirement to use destructuring and .map().

Oyetunde Daniel, [10/05/2025, 16:53]
After creating the descriptions array with .map(), we log those descriptions.
Then, to explicitly demonstrate .forEach() usage on the original students array, we iterate over it directly.
Inside the .forEach() callback, we use destructuring to extract properties from each student object.
We log a formatted string with each student's full name, age, score, and courses.
This satisfies your request to use .forEach() to log each student's details to the console nicely.

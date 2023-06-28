
// Create an array of image sources
var images = [
   "images/cat1.jpg",
   "images/cat2.jpg",
   "images/cat3.jpg",
   "images/cat4.jpg",
   "images/cat5.jpg",
   "images/cat6.jpg",
   "images/cat7.jpg",
   "images/cat8.jpg",
   "images/cat9.jpg",
];

// Get a random index from the array
var randomizer = Math.floor(Math.random() * images.length);

// Get the image source from the array
var randomImage = images[randomizer];

// Get the image element from the webpage
var imageElement = document.getElementById("randomImage");

// Set the image source to the random image
imageElement.src = randomImage;




/* 
Sure, I can explain how this code works. Here is a step-by-step breakdown:

The first line creates an array of image sources. An array is a collection of data that can be accessed by an index. For example, images[0] will return “image1.jpg”.

The second line gets a random index from the array. Math.random() is a function that returns a random number between 0 and 1. Math.floor() is a function that rounds down a number to the nearest integer. So, Math.floor(Math.random() * images.length) will return a random integer between 0 and images.length - 1, which is the range of valid indexes for the array.

The third line gets the image source from the array using the random index. For example, if the random index is 2, then randomImage will be “image3.jpg”.

The fourth line gets the image element from the webpage using its id. The id is a unique identifier for an HTML element that can be used to select it with document.getElementById(). For example, if the image element has an id of “randomImage”, then document.getElementById(“randomImage”) will return that element.

The fifth line sets the image source to the random image using the src attribute. The src attribute specifies the URL of the image to display. For example, imageElement.src = randomImage will set the image source to “image3.jpg” if that was the random image.

This code will run every time the webpage is loaded, so it will display a different image each time. 
*/

// Create an array of available images. In this example they are in a subdirectory so the path includes the folder name before the file name:
var imageList = [
   "images/cookie.jpg",
   "images/demi.jpg",
   "images/gary.jpg",
   "images/ivan.jpg",
   "images/sweetie.jpg",
   "images/tia.jpg",
   "images/vlad.jpg"
];

// Generate a random number based on the number of images in the array:
var randomizer = Math.floor(Math.random() * imageList.length);

// Get the image from the array based on that random number:
var randomPick = imageList[randomizer];

// Go into the HTML and find the element with the id of "randomImage":
var imageElement = document.getElementById("randomImage");

// Add the randomly chosen image's source (src) info to that element:
imageElement.src = randomPick;




/*///////////////////////////////
// Vaiables used in this script: 
////////////////////////////////

imageList - An array (list) of all the images it can choose from

randomNumber - A random number between 0 and the number of items in the array

randomPick - The information taken from the randomly chosen item in the array

imageElement - The HTML element that has been given the id name of "randomImage"


////////////////////////////////
// How does this script work?
////////////////////////////////

The first part creates an array of the images I want it to pick from. An array is a collection (or list) of data that can be accessed by an index (number).

The second part gets a random item from the array. Math.random() is a function that returns a random number between 0 and 1. Math.floor() is a function that rounds down a number to the nearest integer. So, Math.floor(Math.random() * imageList.length) will return a random integer between 0 and imageList.length - 1, which is the range of valid indexes for the array.

The third part gets the image source from the array using the random index. For example, if the random index is 2, then randomImage will be the third image in the list. Why did the random number 2 pick the third image and not the second image? It's because in JS the first number is 0 not 1, so 2 is actually the third number. 

The fourth part gets the image element from the HTML. This is done with the code document.getElementById(). In JS, document refers to the web page itself and getElementById() tells it to look through the HTML and find the element that has the id attribute that matches what is defined inside the (). 

For example, if the image element has an id of “randomImage”, then document.getElementById(“randomImage”) will get that element. An id is similar to a class, the difference being that classes can be applied to multiple elements, but each id can only be used once per page. 

The fifth part goes into the HTML and adds a value to the source attribute (src) of the element chosen in the previous step. For example, imageElement.src = randomPick will set the image source to “image3.jpg” if that was the random image.

This code will run every time the webpage is loaded, so it will display a different image each time. 


/////////////////////////////*/

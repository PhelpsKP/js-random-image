# Pick a Random Image with JavaScript
---

## Here's how it works: 

1. The first part creates an array of image sources. An array is a collection of data that can be accessed by in different ways. In this example the array has been given the name "images":

```javascript
var images = [
   "example1.jpg",
   "example2.jpg",
   "example.jpg"
];
```
<br>
2. The second part gets a random item from the array. `Math.random()` returns a random number between 0 and 1. `Math.floor()` rounds down a number to the nearest integer. So, `Math.floor(Math.random() * images.length)` will return a random integer between 0 and images.length - 1, which is the range of valid indexes for the array.

```javascript
var randomizer = Math.floor(Math.random() * images.length);
```

<br>
3. The third part gets the image source from the array using the random index number that was generated.

```javascript
var randomImage = images[randomizer];
```

<br>
4. The fourth part gets the &lt;img&gt; element from the webpage using its id attribute. For example, if the image element has an id of “randomImage”, then ``document.getElementById(“randomImage”)`` will get that element.

```javascript
var imageElement = document.getElementById("randomImage");
```

<br>
5. The fifth part sets that image's ``src=""`` attribute to the file name of the randomly chosen file from the array. For example, ``imageElement.src = randomImage`` will set the image source to “example3.jpg” if that was the random image.

```javascript
imageElement.src = randomImage;
```

<br>
6. Adding the script to an HTML file will make this code run every time the webpage is loaded, so it will display a different image each time. Adding the defer attribute to the script tag tells it not to run the script until after all of the HTML is done loading. 

```html
<script src="random.js" defer></script>
```

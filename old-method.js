////////////////////////////////////////////////////////////////////////
// this script loads a random picture each time the page is loaded
// this script assumes your images are named pic1.jpg, pic2.jpg, etc.
// set the picCount variable equal to the number of images you want to rotate
/////////////////////////////////////////////////////////////////////////

//activates this function when the page completes loading in the browser
window.onload = ; 

//defines what the function is all about
function () {

    //set the number of pictures to rotate
    var picCount=;

    //generate a random number between 1 and the # of pics we just established
    var randomNum = Math.floor(Math.random()*picCount)+1; 

    //create the relative path and file name to load
    var mySrc=""+randomNum+".jpg" 

    //create a new <img> element
    var myImg=document.createElement(""); 

    //add a src= attribute in that new <img> with the path and file name we just established
    myImg.setAttribute("",mySrc); 

    //put that newly created image inside the element we say
    var theFigure=document.getElementById(""); //add the id name

    //put the image in the div
    theFigure.appendChild(myImg); 
}

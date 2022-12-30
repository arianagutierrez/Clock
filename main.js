/*The setInterval() method in JavaScript is used to repeat a specified function at every given time-interval (in milliseconds). It evaluates an expression 
or calls a function at given intervals. This method continues the calling of function until the window is closed or the clearInterval () method is called.
setClock - the function that we want to repeat
1000 - the time's interval*/
setInterval(setClock, 1000)

/*To set the values of our rotation of our different hands, let's add DATA attribute in our HTML file, and create the elements of the hands. 
After that, to conect the JS file to HTML file we use "document.querySelector". The document.querySelector() is a method that rolls out the first element from 
the document if it matches the specified selector or a group of selectors. It finds its application in the HTML elements when JavaScript matches 
the specific element provided in a document. If there are no matches found, NULL is returned by default.*/
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

//define the function CLOCK
function setClock() {
    /*ES6 introduced the CONST keyword, which is used to define a new variable in JavaScript. Generally, the VAR keyword is used to declare a JavaScript variable. 
    CONST is another keyword to declare a variable when you do not want to change the value of that variable for the whole program. The difference is just that VAR 
    is for normal variable declaration whose value can be changed, whereas a variable value declared using CONST keyword cannot be changed.*/
    const currentDate = new Date()
    //To control the rotation of the seconds, minutes and hour hands.
    /*The JS dates getSeconds()/Minutes()/Hours() methods returns the seconds, minutes and hour for the specified date on the basis of local time.*/
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    //call the fuction setRotation to set the rotation of the hands
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

/*To rotate our elements*/
function setRotation(element, rotationRatio) { //rotationRatio - for the rotation that we want to use
    element.style.setProperty(/*we select our variable*/'--rotation', rotationRatio * 360 /*To set the complete rotation*/)
}

/*To put the hands in the correct position of the real time when you refresh the page, so as to be perfectly synced up.*/
setClock()
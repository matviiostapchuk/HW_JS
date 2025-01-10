var str = "Wonderful, Happiness, Time, Task, Joyful,  Apple"
var re = /([B-Z])([b-z]{5,})/g; 
console.log(str + ': ' + str.match(re));
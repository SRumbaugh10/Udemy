///////////////////////////////////////
// Lecture: Hoisting -Functions
/*
//Function Declaration you can call the function before or after it has been declared in the code
calculatAge(1980);
function calculatAge(year){ 
    console.log(2016 - year);
}
calculatAge(1990);

//Function Expression you can only call the function after it has been declared in the code
var retirement = function(year){ 
    console.log(65 - (2016 - year));
}
retirement(1990);



// Lecture: Hoisting -Variables
console.log(age);
var age = 23;

function foo(){
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/


///////////////////////////////////////
// Lecture: Scoping
/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/


///////////////////////////////////////
// Lecture: The this keyword
//console.log(this);
/*
calculatAge(1985);

function calculatAge(year){ 
    console.log(2016 - year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        /*
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
    calculateAge: john.calculateAge
}

mike.calculateAge();




//Function Constructor (Capitalize first letter of var Name i.e. Person not person)
/*
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2017- this.yearOfBirth);
};

Person.prototype.lastname = 'Jennett';

Person.prototype.about = function(){
    console.log(this.name + ' ' + this.lastname +' was born in ' + this.yearOfBirth + ' she is a ' +  this.job +'.');
}

var don = new  Person('Don', '1955', 'Estimator');
var cindy = new Person('Cindy', '1957', 'Child Care Consultant');
var brena = new Person('Brena', '1984', 'Analyst');



don.about();
don.calculateAge();
cindy.about();
cindy.calculateAge();
brena.about();
brena.calculateAge();
*/



//Object.create
/*
var personProto = {
    calculateAge: function(){
        console.log(2017- this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});
*/



//Lecture: Primitives vs Objects
/*
//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
*/



//Lecture: Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i=0; i<arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2016 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (.67 * el));
    }
    else{
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/



//Lecture: Functions returning functions
/*
function interviewQuestion(job){
    if (job === 'tester'){
        return function(name, other1, test1){
            console.log('As a ' + job + name +', isn\'t this interesting ' + other1 + test1);
        }
    }
    else if(job === 'designer'){
        return function(name){
            console.log('Would you explain what UX is, ' + name + '?');
        }
    }
    else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach ' + name + '?');
        }
    }
    else{
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var miscQuestion = interviewQuestion('unknown');
var testerQuestion = interviewQuestion('tester');

teacherQuestion('Joe1');
designerQuestion('John1');
miscQuestion('Jane1');
testerQuestion('Mike1');
testerQuestion('Mike2', 'high', 'low');


interviewQuestion('tester')('Mike3');
interviewQuestion('tester')('Mike4', 'high', 'low');
interviewQuestion('singer')('Jane2');
interviewQuestion('designer')('John2')
interviewQuestion('teacher')('Joe2');
*/



//Lecture: IIFE (Immediately Invoked Function Expressions)
// Used to structure code and maintain data privacy in code
/*
(function(){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/



//Lecture: CLosures
/*
function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2017 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);


retirement(66)(1990);


function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log('Would you explain what UX is, ' + name + '?');
        }
        else if(job === 'teacher'){
            console.log('What subject do you teach ' + name + '?');
        }
        else{
            console.log('Hello ' + name + ', what do you do?');
        }
    }
} 

interviewQuestion('designer')('Betty');
interviewQuestion('teacher')('Jane');
interviewQuestion('singer')('John');
*/



//Lecture: Bind, call and apply
/*
var john = {
    name: 'John',
    age: '26',
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! My name is ' + this.name + '. I\'m ' + this.age + ' years old and I\'m a ' + this.job + '.');
        }
        else if (style === 'friendly'){
            console.log('Hey! What\'s up? My name is ' + this.name + '. I\'m ' + this.age + ' years old and I\'m a ' + this.job + '. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
emilyFormal('evening');
*/
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i=0; i<arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2016 - el;
}

function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
*/
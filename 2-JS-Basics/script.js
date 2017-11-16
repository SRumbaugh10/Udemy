//Lecture variable
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/


//Lecture variables 2
/*
var name = 'John';
var age = 26;

console.log(name + age);
console.log(age + age);

var job, isMarried;

console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');



age= 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');


var lastName = prompt('What is your last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');
*/



// Lecture: operators
/*
var now = 2016;
var birthYear = 2016 - 26;

birthYear = now - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);

var agejohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;


ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/

//Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if(isMarried === 'yes'){
    console.log(name + ' is married!');
}
else{
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = true;

if(isMarried){
    console.log('YES!');
}
else{
    console.log('NO!');
}
*/

//Lecture: boolean logic and switch
/*
var age = 20;

if(age < 20){
    console.log('John is a teenager');
}
else if (age >= 20 && age < 30) {
    console.log('John is a youg man.');
}
else{
    console.log('John is a man.');
}


var job = 'teacher';

job = prompt('What does John do?');

switch(job){
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('Johns drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.');
}
*/

//Coding Challenge 1
/*
var johnHeight = 72;
var johnAge = 25;
var markHeight = 72;
var markAge = 25;
var peterHeight = 72;
var peterAge = 25;

var johnScore = johnHeight + (johnAge*5);
var markScore = markHeight + (markAge*5);
var peterScore = peterHeight + (peterAge*5);

console.log('Johns Score:' + johnScore + ' Mark Score:' + markScore + ' Peter Score:' + peterScore);

if(johnScore > markScore && johnScore > peterScore){
    console.log('John wins! His score was ' + johnScore);
}
else if(markScore > johnScore && markScore > peterScore){
    console.log('Mark wins! His score was ' + markScore);
}
else if(peterScore > johnScore && peterScore > markScore){
    console.log('Peter wins! His score was ' + peterScore);
}
else if(johnScore === markScore && johnScore === peterScore){
    console.log('It\'s a 3 way tie!');
}
else{
    console.log('It is unclear!')
}
*/

//Lecture: Functions
/*
function calculateAge(yearOfBirth){
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMark = calculateAge(1951);
var agePeter = calculateAge(1950);


function yearsUntilRetirement(name, year){
    var age = calculateAge(year);
    var retirement = 65 -age;

    if(retirement > 0){
        console.log(name + ' retires in ' + retirement + ' years.');
    }
    else if(retirement === 0){
        console.log(name + ' is retiring this year!');
    }
    else{
        console.log(name + ' is already retired!');
    }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mark', 1951);
yearsUntilRetirement('Peter', 1950);
*/

//Lecture: Statements and expressions
/*
//Statements
function someFun(par){
    //This is a function statement, a statement just performs an action
}
if(x === 5){
    //do something
}

//Expressions
var someFun = function(par){
    //This is a function expression, a expression produces a value, an outcome
}
3 + 4;
var x = 3;
*/

//Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue');
john.unshift('Mr.');
john.pop(); //removes the last item in the array
john.shift(); //removes the first item in the array
console.log(john);

if(john.indexOf('teacher') === -1 ){
    console.log('John is NOT a teacher.')
}
*/

//Lecture: Objects
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    year: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane.isMarried = true;

console.log(jane);
*/

//Lecture: Object and methods
/*
//v1.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
        return 2016 - this.yearOfBirth;
    }
};

console.log(john.calculateAge(1970));
console.log(john.calculateAge());
var age = john.calculateAge();
john.age = age;

console.log(john);
*/
/*
//v2.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);

var mike = {
    name: 'Mike',
    lastName: 'Smith',
    yearOfBirth: 1950,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
        this.age = 2016 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);
*/

//Lecture: Loops

/*For Loops
for(var i=0; i<10; i++){
    console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
for (var i=0; i < names.length; i++){
    console.log(names[i]);
}

for (var i=names.length-1; i >= 0; i--){
    console.log(names[i]);
}
*/
/*While Loops
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
var i=0;
while(i < names.length){
    console.log(names[i]);
    i++;
}

for (var i=0; i<=5; i++){
    console.log(i);
    if(i === 3){
        break;
    }
}

for (var i=0; i<=5; i++){
    
    if(i === 3){
        continue;
    }

    console.log(i);
}
*/

//Coding Challenge 2

function printFullAge(yearBorn){
    var ages = [];
    var fullAges = [];

    for(var i=0; i<yearBorn.length; i++){
            //var age = 2017 - yearBorn[i];
            //ages.push(age);  
            ages[i] = 2017 - yearBorn[i];     
    }
    for(var i=0; i<ages.length; i++){
        if(ages[i] >= 18){
            console.log('This person is an adult. They are ' + ages[i] + ' years old.');
            fullAges.push(true);
        }
        else{
            console.log('This person is still a child. They are ' + ages[i] + ' years old.');
            fullAges.push(false);
        }
    }
    console.log(fullAges);
    return fullAges;    
}

var yearBorn = [1955, 1973, 1989, 1999, 2007, 2015];
var yearBorn2 = [1957, 1984, 1991, 2000, 2012];
var full_1 = printFullAge(yearBorn);
var full_2 = printFullAge(yearBorn2);

console.log(full_1);
console.log(full_2);
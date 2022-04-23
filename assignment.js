
//7. EX1. 4 > 3
const numOne = 4
const numTwo = 3
const numThree = '4'
let number = numOne > numTwo
console.log(number);

// 4 >= 3

let number2 = numOne >= numTwo
console.log(number2);

// 4 < 3
let number3 = numOne < numTwo
console.log(number3);

// 4 <= 3. This means that 4 not less than or equal to 3
let number4 = numOne <= numTwo
console.log(number4);

// 4 == 4. This compare the value i.e 4 is not the same as 3
let number5 = numOne == numTwo
console.log(number5);

// 4 === 4. This compare the value and the data type. i.e 4 is not the same as 3 but there are both number data type.
let number6 = numOne === numTwo
console.log(number6);

// 4 != 4. This means the 4 is not the same as 3 or not equal. 
let number7 = numOne != numTwo
console.log(number7);

// 4 !== 4.  4 amd 3 are the same data type .
let number8 = numOne !== numTwo
console.log(number8);

// 4 != '4'. This is not equal, not the same data type.
let number9 = numOne != numThree
console.log(number9);

// 4 == '4'.  This is same data type
let number10 = numOne == numThree
console.log(number10);

// 4 === '4' A number value is different from a string.
let number11 = numOne === numThree
console.log(number11);



//1.EX2 Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// let base,height,area,half;

//   base = prompt("enter the base of a triangle");
//   height = prompt('enter the height of the triangle');
//   half = 0.5
// //  area = 0.5 * number(base) * number(height);
// console.log(`The area of triangle is ${half * base * height}`);
// alert(`The area of triangle is${area}`)



// PI = 3.14
// let radius = prompt("Enter your radius to calculate the area of circle");
// areaOfCircle = PI * number(radius) *number(radius);
// console.log(`The area of circle is ${areaOfCircle}`);

// let circumference = prompt("Enter your radius to calculate the circumference  ");
// areaOfCircumference = 2 * PI * radius;
// alert(`The area of circumference is ${areaOfCircumference}`);

// const pi = 3.142
// let r,c,a
// r = prompt("Enter your radius")
// console.log(`The area of a circle is ${pi * r**2} and the circumference of a circle is ${2 * pi * r}`)

//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.




//8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// let y, x;
 
// x = prompt('Enter the value of x');
// number(x);
let y, x

x = 2
y = (x ** 2 + 6*x + 9 )
console.log(y)
console.log(`The value of x is ${y}`)



//10. If the length of your name is greater than 7 say, your name is long else say your name is short.

let usersName, user;
usersName = 'folashade'
user = usersName.length

user == 7
if (user > 7){
   console.log(`Your name is long`)
}else
{
   console.log(`Your name is short`)
}
 


//14. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let users, usersYear, now, agge, remaingYear;
now = new Date();
users = prompt('Enter your birth year');
agge = now.getFullYear() - users;
remaingYear = 18 - agge;

agge < 18
? console.log(`opps! You are to wait for ${remaingYear} year before you can drive.`)
: console.log(`wow! You are allowed to Drive`)

// if (agge < 18){
//    console.log(`opps! You are to wait for ${remaingYear} year before you can drive.`)
// }else {
//    console.log(`wow! You are allowed to Drive`)
// }

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.






//15. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.


let userNumbersOfYears = prompt('Enter your birth year');
let totalSecond = +userNumbersOfYears * (60 * 60 * 24 * 365.25);
console.log(`You've lived for ${totalSecond} on earth.`);







//1. EX3 Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05.



let hour, year, minute, months, day;

now = new Date()
hour = now.getHours()
year = now.getFullYear()
minute = now.getMinutes()
months = now.getMonth() + 1
day = now.getDate() + 1

console.log(`${year}-0${months}-${day} ${hour}:${minute}`)
// console.log(`${year}-${months}-${day} 0${hour}:0${minute}`)
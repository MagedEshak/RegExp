//------------------------ Assignment 01 ---------------------------------------
console.log(`Assignment 01
You have the following IP, do a RegExp Pattern to match this IP.`);
console.log("-".repeat(20));

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipReg = /[(\w{3,4})\:(\w{3,4})]/ig;

console.log("test(): " + ipReg.test(ip)); // true
console.log(ip.match(ipReg)); // 2,0,0,1,:,d,b,8,:,3,3,3,3,:,4,4,4,4,:,5,5,5,5,:,6,6,6,6,:,7,7,7,7,:,8,8,8,8
console.log(ip.match(ipReg).join("")); //2001:db8:3333:4444:5555:6666:7777:8888


//------------------------ Assignment 02 ---------------------------------------

console.log("-".repeat(20));
console.log(`Assignment 02
You have a variable that contains some names.
Required to create a RegExp Pattern to match names starting with Os and ending with O`);
console.log("-".repeat(20));

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesReg = /\bOs\d*O\b/g;

console.log("test(): " + specialNamesReg.test(specialNames)); // true
console.log(specialNames.match(specialNamesReg));

// Output
// ['Os10O', 'OsO', 'Os100O']

//------------------------ Assignment 03 ---------------------------------------

console.log("-".repeat(20));
console.log(`Assignment 03
You have a variable that contains a phone number in a specific format.
RegExp Pattern required to make a match for this phone`);
console.log("-".repeat(20));

let phone = "+(995)-123 (4567)";
let phoneReg = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;

console.log("test(): " + phoneReg.test(phone)); // true
console.log(phone.match(phoneReg));


//------------------------ Assignment 04 ---------------------------------------

console.log("-".repeat(20));
console.log(`Assignment 04
You have Regular Expression Pattern
It is required to divide it into parts and explain each part in a separate comment.`);
console.log("-".repeat(20));

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

//https? => https || http
//\/\/(?:[-\w]+\.)? => // then ? then : then any word or more and (.) matches any char but not \n or any escaping char followed by
//([-\w]+)\.\w+ => - then any word or more then then (.) matches any char but not \n or any escaping char then any word or more
//(?:\.\w+)?\/?.* => (? then : then any word or more then) followed by / followed by
//                   ((.) matches any char but not \n or any escaping char then any word or more ) zero or more

//i => ignore case sensitive

//------------------------ Assignment 05 ---------------------------------------

console.log("-".repeat(20));
console.log(`Assignment 05
You have a set of dates.
It is required to create only one Pattern that matches all these dates.`);
console.log("-".repeat(20));

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let dateReg = /[\d{2}(\/| -| \s)\d{2}(\/| - | \s)\d{4}]/igm; // Write Pattern Here

console.log(date1.match(dateReg)); // "25/10/1982"
console.log(date2.match(dateReg)); // "25 - 10 - 1982"
console.log(date3.match(dateReg)); // "25 10 1982"
console.log(date4.match(dateReg)); // "25 10 82"

console.log(date1.match(dateReg).join("")); // "25/10/1982"
console.log(date2.match(dateReg).join("")); // "25 - 10 - 1982"
console.log(date3.match(dateReg).join("")); // "25 10 1982"
console.log(date4.match(dateReg).join("")); // "25 10 82"


//------------------------ Assignment 06 ---------------------------------------

console.log("-".repeat(20));
console.log(`Assignment 06 challenge
You have a bunch of links.
It is required to create only one Pattern that matches all these links.`);
console.log("-".repeat(20));


let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let urlReg = /[(https?)?(:\/\/)?(\w+\.)(\W)]/g; // Write Your Pattern Here

console.log(url1.match(urlReg));
console.log(url2.match(urlReg));
console.log(url3.match(urlReg));
console.log(url4.match(urlReg));
console.log(url5.match(urlReg));

console.log(url1.match(urlReg).join(""));
console.log(url2.match(urlReg).join(""));
console.log(url3.match(urlReg).join(""));
console.log(url4.match(urlReg).join(""));
console.log(url5.match(urlReg).join(""));
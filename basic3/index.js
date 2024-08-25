//1.ARRAY
let number =[0,1,2,3,4,5]
console.log(number);
console.log(number[2]);  //indexing

//PUSH IN ARRAY in end   -->push for end
console.log(number.push(8));

//push in array in starting   -->unshift for start
console.log(number.unshift(11));

//push in array in middle by indexing   -->splice for end
console.log(number.splice(3,0,'a','b','c'));

//2.searching
console.log(number);
console.log(number.indexOf(3));   //isse hame index value pta chalegi data ki
console.log(number.indexOf(15));  //agar value hoh hii na array mei tbh bhi index find kroh toh -1 show hoga console mei

//if we want to check number exist on the array or not
if(number.indexOf(3) != -1 )
    console.log('present');    // this is not best practice

//for best practice
console.log(number.includes(3));  //this give value in true or false
 
//isme first konse number search krna hei fir shur konse index se hoga agar tbh present nhi hei toh -1 dega
console.log(number.indexOf(9,2)); 

//3.searching for object by call back function
let courses=[
    {no :1 , naam :'adi'},
    {no:2 , naam :'bisht'}

];

// let course=courses.find(function(course){         // using function inside the array
//  return course.naam==='adi';})
// console.log(course);

//this code can be more readeable using arrow parameter
let course =courses.find(course => course.naam==='bisht');
   console.log(course);


//4.removing element in array 

let shinchan=[1,2,3,4,5,6,7,8];
console.log(shinchan.pop());   //remove element from the last -->pop used

console.log(shinchan.shift());  //remove element from the start -->shift used

console.log(shinchan.splice(2,2)); //remove element by indexing -->splice used

//5.empty an array
let doremon=[1,2,3,4,5,6];
let doremon2=doremon;
//doremon=[];             //its not a good way to empty a array
//doremon.length=0;         //it a best practice to empty an array
doremon.splice(0,doremon.length);    //its a another way to empty an array

console.log(doremon);
console.log(doremon2);


//6.combining of 2 array

let nobita=[1,2,3];
let gadgets=[4,5,6];
let combine=nobita.concat(gadgets);
console.log(combine);


//another method of combining spread method
let milao=[...nobita,'a',false,...gadgets,'b'];   //issme combine aur add new element donoh hii kr skhte heii
console.log(milao);

//copy bhi kr skhte slice method ke through
let another=[...milao];




//7.slicing
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]




//8.iterating an array
let arr=[1,2,3,4,5,6];
// for(let values of arr){          //using for of loop in the array 
//     console.log(values);
// }
arr.forEach(function(value){         //USING For each loop in array
    console.log(value);
});


//9.joined in array
let neo=[1,2,3,4,5];
const joined=neo.join(',');
console.log(joined);

//split in array
let message="THIS IS THE MESSAGE"
const parts=message.split(' ');
console.log(parts);

//10.sorting in array
let oggy=[40,20,30,10,50,80];
oggy.sort();
console.log(oggy);
oggy.reverse();
console.log(oggy);


//11.filtering in array
let amazone=[1,2,0,-1,-3];
// let filtered=amazone.filter(function(value){
//     return value>=0;
// });
let filtered=amazone.filter(value=> value<=0);     //above function by arror parameter
console.log(filtered);


//12.mapping in array
let space=[3,4,5,6,7];
let mapping=space.map(value=>'student_no'+ value
);
console.log(mapping);

//mapping with objects
var swiggy=[1,2,0,-1,-3];
var filtering=swiggy.filter(value=> value>=0); 
var items=filtering.map(function(num){
    return {value:num};
});
console.log(items);


//chaining 
var swiggy=[5,6,0,-1,-3];
var items=swiggy.filter(value=> value>=0).map(num => {value:num});    //aiise krte chaining
console.log(items);
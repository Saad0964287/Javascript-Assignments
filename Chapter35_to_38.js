// Task 01

// const time = () => {
//     let today = new Date();
//     return(
//         today
//     )
// }
// alert(time())




// Task 02

// let fullName = (fname,lname) => {
//     let name = fname + '' + lname;
//     alert(name)
// }
// let fName = prompt('First Name')
// let lName = prompt('Last Name')
// fullName(fName,lName)




// Task 03

// function sum(num1,num2){
//     alert(num1+num2)
// }
// let num1 = +prompt('num1')
// let num2 = +prompt('num2')
// sum(num1,num2)



// Task 04

// function calc(num1,num2,sign){
//     let ans
//     if (sign === '+' ){
//         alert(num1+num2)
//     }else if (sign === '-' ){
//         alert(num1-num2)
//     }else if (sign === '*' || sign === 'x' || sign === 'X'){
//         alert(num1*num2)
//     }else if (sign === '/'){
//         alert(num1/num2)
//     }else{
//         alert('Enter corrent Operation')
//     }
// }
// let num1 = +prompt('num1')
// let num2 = +prompt('num2')
// let sign = prompt('sign')
// calc(num1,num2,sign)




// Task 05

// const squr = num => alert(num*num);
// let num = +prompt('Number');
// squr(num)




// Task 06

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = +prompt('number');
//   answer = factorial(n)
//  alert("The factorial of " + n + " is " + answer);



// Task 07

// function count (start,stop){
//     for(i=start; i<=stop; i++){
//         document.write(i + '<br>')
//     }
// }
// let num1 = +prompt('Num 1')
// let num2 = +prompt('Num 2')
// count(num1,num2)



// Task 08

// function calcHypotenus(base,  per) {
//     return Math.sqrt(base*base  + per*per) ;
// }
// let base = +prompt('base')
// let height = +prompt('Height')
// alert(calcHypotenus(base,height))



// Task 09

//  function area(height,width){
//     let ans = height*width;
//     return(
//         alert(ans)
//     )
//  }
//  let a= 5;
//  let b =10;
//  area(4,4)
//  area(a,b)



// Task 10

// function palindrome(word) {
//     return word == word.split("").reverse().join("");
// }
// let word = 'racecar'
// alert(palindrome(word))



// Task 11

// function capatlize(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         // You do not need to check if i is larger than splitStr length, as your for does that for you
//         // Assign it back to the array
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     // Directly return the joined string
//     return splitStr.join(' '); 
//  }
//  let str =  'the quick brown fox'
//   alert(capatlize(str))



// Task 12

//  function extract(str){
//     let loc = str.indexOf('Development');
//    return str.slice(loc,15)
//  }
//  let str = 'Web Development Tutorial' 
//  alert(extract(str))



// Task 13

// function count(para){
//     let word = /o/ig; 
//     let result = paragraph.match(word);
//     console.log(result);
//     var resultCount=0;
//     if(Array.isArray(result)){
//     for(var i=0;i<result.length;i++){
//       resultCount++;
//     }
//     alert("result count = "+resultCount);
// }
// }
// let paragraph =  'JSResourceS.com'
// count(paragraph)



// Task 14
// let PI = Math.PI
//     function calcCircumference(r){
//         return alert("Circumfernce:" + r*2* PI)
//     }
//     function calcArea(r){
//         return alert('Area:' + PI*r*r)
//     }
//     calcArea(3)
//     calcCircumference(3)

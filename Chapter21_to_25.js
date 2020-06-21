// Task 01
// var firstName = prompt("What is your first name", "Enter your first name");
// var lastName = prompt("What is your last name", "Enter your last name");
// var fullName ;
// fullName = firstName + " " + lastName;
// alert(fullName);



// Task 02
// var a = prompt("Enter mobile model", "Enter your favourate mobile model");
// var b;
// b = a.length;
// document.write("My favouriate mobile is : " + a + "<br>");
// document.write("Length of string is :" + " " + b + "<br><br>" );



// Task 03
// var pak = "Pakistani";
// var pak2;
// pak2 =  pak.indexOf("n");
// document.write("String : " +pak + "<br>");
// document.write("Index of 'n' : " + pak2);



// Task 04
// var x = "Hello World";
// var y;
// y =  x.lastIndexOf("l");
// document.write("String : " + x + "<br>");
// document.write("Index of 'l' : " + y + "<br><br>"  );



// Task 05
// var pak = "Pakistani";
// var pak2;
// pak2 =  pak[3];
// document.write("String : " +pak + "<br>");
// document.write("Character of Index '3' : " + pak2 + "<br><br>");



// Task 06
// var firstName = prompt("What is your first name", "Enter your first name");
// var lastName = prompt("What is your last name", "Enter your last name");
// alert(firstName + " " + lastName);



// Task 07
// var city = "Hyderabad";
// var city1 = city.replace("Hyder", "Islam" )
// document.write("City : " + city);
// document.write("<br>" + "After Replacement : " + city1 + "<br><br>");



// Task 08
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message1;
// message1 = message.replace( /and/g , "&");
// document.write(message1 + "<br><br>");



// Task 09
// var str = "472";
// document.write("Value : " + str + "<br>");
// document.write("Type : " + typeof(str) + "<br>");
// var conv =  parseInt(str);
// document.write("Value : " + str + "<br>");
// document.write("Type : " + typeof(conv) + "<br><br>");



// Task 10
// var inp = prompt("Enter String");
// document.write("User Input : " + inp + "<br>");
// var inp1 = inp.toLocaleUpperCase();
// document.write("Upper Case : " + inp1 + "<br><br>");



// Task 11
// var inp = prompt("Enter String");
// document.write("User Input : " + inp + "<br>");
// var inp1 = inp.toLowerCase();
// document.write("Upper Case : " + inp1 + "<br><br>");



// Task 12
// var num = 35.36 ;
// document.write("Number : " + num + "<br>");
// var num1 = num.toString();
// document.write("Result : " + num1 +"<br><br>");



// Task 13
// let name = prompt('Enter Your Name');
//  if(/^[a-zA-Z]*$/.test(name) == false){
//     alert('please enter a valid name')
// }else{
//     alert(name)
// }



// Task 14
// let items = ['cake', 'apple pie', 'chips' , 'cookies' , 'patties']
// let search = prompt('enter what you want')
//  search = search.toLowerCase();
// for(i=0; i<items.length;i++){
//     if(items[i] !== search ){
//         alert('not available');
//         break;
//     }else{
//         alert('available')
//     }
// }



//Task 15
// let pass = prompt('Enter Password')
// if (pass.match(/[a-z]/g) && pass.match( 
//     /[A-Z]/g) && pass.match( 
//     /[0-9]/g) && pass.match( 
//     /[^a-zA-Z\d]/g) && pass.length >= 6) {
//         alert('Great')
//     }else{
//         alert('please enter a valid password')
//     }
    


//Task 16
// var university = 'University of Karachi';
// for(i=0;i<university.length;i++){
//      document.write(university[i].split() + '<br>')
// }



//Task 17
// var input = prompt('Enter Something')
// var len = input.length - 1;
// alert(input[len])



// Task 18
// var para = 'The quick brown fox jumps over the lazy dog'
// let count = para.match(/the/ig)
// alert ('the appeared ' + count.length + ' times')

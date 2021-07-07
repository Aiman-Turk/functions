// 1. Write a function that displays current date & time in your
// browser.
// function time() {
//     var date = new Date();
//     alert(date);
// }
// time();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
// function greet() {
//     var a = prompt("enter");
//     var b = prompt("enter");
//     alert("WELCOME" + " " + a + " " + b)
// }
// greet("welcome");


// 3. Write a function that adds two numbers(input by user)
// and returns the sum of two numbers.
// function add() {
//     var a = +prompt("enter a first number");
//     var b = +prompt("enter a second number");
//     var c = a + b;
//     alert(c)
// }
// add();

// 4. Calculator:
//     Write a function that takes three arguments num1, num & operator & compute the desired operation.Return and show the desired result in your browser.
// function add(num1, num2, opr) 

// function calc(num1, num2, opr) {
//     var result = eval(num1 + opr + num2)
//     return result;
// }
// var numone = prompt("1st value");
// var numtwo = prompt("2nd value");
// var operator = prompt("operator");
// var showresult = calc(numone, numtwo, operator);
// document.write("the result is :" + showresult);


// 5. Write a function that squares its argument.

// function sumOfSquares(num) {
//     var i;

//     for (i=0;i<=num;i++){
//         var sum=0;
//         var i = i*i;
//         sum = i;
// }
//      document.write("The sum of squares for numbers up to and including " +num+" " +"is :" +" " +sum ) ;
// }
// var num = parseInt(prompt("Enter a number:"));
// sumOfSquares(num);


// 6. Write a function that computes factorial of a number. 
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
//   let n = prompt("enter a number");
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer);


// 7. Write a function that take start and end number as inputs & display counting in your browser
// var a=prompt("enter a start value");
// var b= prompt("enter a end value");
// function add(){

//     for(a;a<b;a++)
//     document.write(a+"<br>") ;
// }
// add();


// // 8. Write a nested function that computes hypotenuse of a right angle triangle.  Hypotenuse2 = Base2 + Perpendicular2 
// var perpendicular=prompt("enetr a perpendicular of right angle triangle");
// var base=prompt("enetr a base of right angle triangle");
// function hypotenuse(b,p){
//     var a=Math.sqrt(b*b+p*p);
//     return a;
// }
// var hypotenuseFinal=hypotenuse(base,perpendicular);
// document.write("The hypotenious of right angle triangle is;"+" "+hypotenuseFinal);


// 9. Write a function that calculates the area of a rectangle.      A = width * height     Pass width and height in following manner: i. Arguments as value ii. Arguments as variables 
// var height=+prompt("Enter height");
// var weidth=+prompt("Enter width");
// function area(w,h){
//     var a=w*h;
//     return a;
// }
// var areafinal=area(weidth,height);
// alert("The area is :"+areafinal);

// 10. Write a JavaScript function that checks whether a passed string is palindrome or not?   
// var palindrome=prompt("enter a value ");
// function checkPalindrome(string){
//     var flag="It is a Palindrome";
//     for (var i=0;i<(string.length)/2;i++){
//         if (string[i]!=string[string.length-1-i]){
//             flag ="It is not a Palindrome";
//             return flag();
//         }
//         else{
//             flag==="It is a Palindrome";
//             return flag;
//         }
//     }
// }
// var a=checkPalindrome(palindrome);
// document.write(palindrome+" "+a);

// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// var word=prompt("Enter a string");
// function str(string){
//     var first=string.charAt(0);
//     var upper_case =first.toUppercase();
//     var second=string.slice(1);
//     var lower_case=second.tolowerCase();
//     var full=upper_case+lower_case;
//     return full();
// }
// var a=str(word);
// document.write(word+":"+a);



// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  EXAMPLE STRING : 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development' 
 
// function abc() {
//     var str=prompt("enter a word");
//     var sentence = str.toLowerCase().split(' ');
//     for(var i = 0; i<sentence.length; i++){
//         sentence[i]= sentence[i][0].toUpperCase()+sentence[i].slice(1)
//     }
//     document.write(sentence.join(" "));
//     return sentence;
    
// }

// abc();

// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of 
// function | JAVASCRIPT 
 
// Page 3 of 4 
 
// occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o'  
 
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('JSResourceS.com', 'o'));



// 14. The GeometrizerCreate 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a
// function called calcCircumference: •Pass the radius to the
// function.•Calculate the circumference based on the radius, and output
//     "The circumference is NN".
// Create a
// function called calcArea: •Pass the radius to the
// function.•Calculate the area based on the radius, and output "The area
// is NN ".
// Circumference of circle = 2 πr
// Area of circle = πr2

// function Circumferenceofcircle() {
//     var r = prompt("enter a radius ")
//     var a = (Math.PI * r) * 2;
//     document.write("The circumfrence is =" + a + "." + "<br>");
// }

// function Areaofcircle() {
//     var radius = prompt("enter a radius ")
//     var b = (Math.PI * radius) * radius;
//     document.write("The area is =" + b + "." + "<br>");
// }

// Circumferenceofcircle();
// Areaofcircle();
// var firstNumber = +prompt("type you first number");
// var secondNumber = +prompt("type you second number");

// console.log(`first number is ${firstNumber}`);
// console.log(secondNumber);

// var result = firstNumber + secondNumber;

// if (result >= 13) {
//     console.log("this is bar mitzva")
// }else if(result ==12){
//     console.log("this is batmitzva")
// }else {
//     console.log("this is a kid")
// }
//==========================================/
// var yes=0;

    // while (yes<100) {
    //     console.log(yes);
    //     yes++;
    // }

//  var i=0;   
// var numFromUser= +prompt("type yor number");
// while (i<numFromUser) {
//     console.log("no");
//     i++;
// }
//=============================================/

// for(var i=0; i<1000; i++){
//     console.log(i,"javascript is not java")

// }
//=============================================/

// var firstName= prompt("enter your name");
// var number= +prompt("enter your number");

// for (var i=0; i<number;i++) {
// console.log(i,firstName);
// }
//==============================================/

// var firstName = prompt("type your first name");
// var age = +prompt("type age");
// var email= prompt("type email");
// console.log (`my first name is ${firstName}.\n,my age is ${age}.\n my email is ${email} ` )

// var numberTwo = +prompt("type your second number");

// for(var i=0;i<numberTwo ;i++ ) {
//     if(age>18){
//         console.log (`my first name is ${firstName}.\n,my age is ${age}.\n my email is ${email} ` )
//     }
   
// }
//================================/

// var numbers= [5,6,9,86,10];
// for (var i=0;i<numbers.length; i++){
//    console.log (numbers[i])
// }
//===========================/
// var numAndWords = ["oshri",24,"lior",25,"liel",21];

// for (var i=0; i<numAndWords.length; i++){
//     if(numAndWords[i] * 0 != 0){
//         numAndWords[i] = "not a number";
//     }
// }
// console.log(numAndWords);
//====================================/
// var i=0;
// var j=0;
// var numArr=[];

// while (i<9) {
//     var numFromUser = +prompt("type a number");
//     if(numFromUser % 2 == 0){
//         numArr[j]= numFromUser
//         j++
//     }
//     i++
// }
//=============================================
// שאלה לפני אחרונה
// var squareHeight = +prompt("type yor height");
// var squareWidth = +prompt("type yor height");

// var sum = squareHeight + squareWidth ;
// var numFromUser = [];
//====================================

// var positiveNumber= +prompt("type your number");
// var numArr = [];
// for(var i=0; i<positiveNumber.toString().length; i++){
//     if (positiveNumber>0){
// numArr[i]= positiveNumber.toString().charAt(i)
// console.log(numArr[i])
//     }
// }
//========================================
// var numberFromUser= +prompt("type a number");
// var secondNumber= +prompt("type a secondNumber");
// var thirdNumber= +prompt("type a thirdNumber");

// if (numberFromUser < secondNumber  && secondNumber < thirdNumber ) {
//     console.log("סדר עולה")
// } else if(numberFromUser > secondNumber  && secondNumber > thirdNumber) {
//     console.log("סדר יורד")
// }else {
//     console.log("אין סדר בכלל")
// }
//==========================================
// var array=[25, 30,20, 50, 68, 9];
// var min=array[0];

// for (var i=0; i<array.length; i++){
//     if( array[i]< min){
//         min= array[i]
//     }
   
// }
// console.log(min);
//===================================
// var myArray= [25, 30,20, 50, 68, 9];
// var max = [0];

// for (var i=1; i<myArray.length; i++) {
//     if (myArray[i] > max){
//        max=myArray[i]
//     }
// }

// console.log(max)
//====================================
// var myArray= [25, 30,20, 50, 68, 9];
// var sumNumber = 0;

// for ( var i=0; i<myArray.length; i++) {
   
//         sumNumber+=myArray[i]

    
// }

// console.log(sumNumber)
//========================================
// var myArray= [25, 30,20, 50, 68, 9];
// var avgNumber = 0;

// for (var i=0; i < myArray.length; i++){
//     avgNumber += myArray[i]
// }
// console.log(avgNumber/myArray.length)
//=====================================
// var myArray= [25, 30,20, 50, 68, 9];
//  userNumber= +prompt ("enter number");

//  for (var i=0; i<myArray.length; i++){
//      if(userNumber == myArray[i]){
//          console.log(userNumber)
//      }else{
//          console.log("not exist")
//      }
//  }

//====================================
//  var myArray= [25, 30,20, 50, 68, 9];
// var avgNumber = 1;

//  for (var i=0; i < myArray.length; i++){
//      avgNumber *= myArray[i]
//  }
//  console.log(avgNumber)
//=====================================
//   var myArray= [25, 30,20, 50, 68, 9];
// for (i=0; i < 10; i++){
//     for(j=1; j < myArray.length; j++){
//         console.log(myArray[j]);
//     }
// }
//======================================
 var myArray=[];
//  var userNumber= Number(prompt("insert numbers"));

 for (var i = 0; i < 5; i++) {
userNumber= Number(prompt("insert numbers"));
     myArray.push(userNumber) 
      
 }
 console.log(myArray);


 
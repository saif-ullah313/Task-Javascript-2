//Question No 1:
//Make an array of numbers that are doubles of the first array
 
  
//let arr = document.getElementById("number").value;
let arr = [1,2,3,4,5];
  // let splitarr =arr.split(',');
    let doublearray= arr.map(x => x*2);
    document.getElementById("result").innerHTML= " New Array:  [ " + doublearray + " ]";
   

/************************************************************************ */
//Question No 2:
//Take an array of numbers and make them strings

    
   
    let arr1 = [23,45,66,78,90,99]
    let arrString = arr1.map(x => x.toString());

   
    document.getElementById("result1").innerHTML = arrString;
    
   
   

/*************************************************************************** */
//Question No 3:
//Capitalize each of an array of names

    let arr2 = ["apple","banana","cherry","orange"];
    let caparr = arr2.map(word=> {
        let firstlett = word.charAt(0).toUpperCase();
        // console.log(firstlett);
        let restlett = word.slice(1).toLowerCase();
        
        return firstlett + restlett;
    });
    document.getElementById("result2").innerHTML=`The new array with Capitalized first word:  [ ${caparr} ]`;


/*************************************************************************** */
//Question No 4:
//Square the value of every element in the array

    let arr3 = [2,3,4,5,6,7]
   
    let squarearray= arr3.map(x => x**2);
    document.getElementById("result3").innerHTML= "New Array with Square each value: [ " + squarearray + " ]";
   

/************************************************************************** */
//Question No 05:
//If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.


 let arr4=[0,1,2,-3,-4,5];
 let findPositiveNum = arr4.filter(value=> value>0);
 document.getElementById("result4").innerHTML = `The new Array with find postive number [ ${findPositiveNum}] `;
 let sumOfPositiveNum = findPositiveNum.map((a,b)=>{
         return a+b;
 });
 document.getElementById("result5").innerHTML= `The sum of new Array elements : ${sumOfPositiveNum}`;



/************************************************************************************** */
//Question No 06:
//Calculate the mean and median values of the number elements from the input array.

// let arr5 = [2,3,5,7,9,21,25]
// function calculateMean(){
//     let searchvalue = arr5.filter(numb=> typeof numb === 'number');
//     let sum = arr5.reduce((a,b)=>a+b,0);
//     let mean = sum/arr5.length;
//     return mean;
    
    
// }
// calculateMean(numb);
// console.log(mean)

   
/******************************************************************************************* */
//Question No 07:
//
/************************************************************************************* */
//Question No 08:
//


/******************************************************************************************** */
//Question No 09:
//Any array of numbers, return a new array that has only the numbers that are 5 or greater.
let arr8 = [1,2,3,4,5,6,7,8,9];
let findgreaternum = arr8.filter(value=> value>=5);

document.getElementById("result9").innerHTML= `New Array that elements are greater and eqaual to 5: [ ${findgreaternum} ]`;

/*********************************************************************************************** */
//Question No 10:
//Any array of numbers, return a new array that only includes the even numbers.

let arr9 = [1,2,3,4,5,6,7,8,9,10,11,12];
let findeven = arr9.filter(value=> value%2===0);

document.getElementById("result10").innerHTML = `New Array with even numbers : [ ${findeven} ]`
/************************************************************************************** */
//Question No 11:
//Any array of strings, return a new array that only includes those that are 5 characters or fewer in length.

let arr10 = ['ali','usmanali','saifullah','ammadkhanjadoon'];
let checklength= arr10.filter(value=> value.length>=5);
console.log(checklength);
document.getElementById("result11").innerHTML=`New Array with check length of string: [ ${checklength} ]`;
/************************************************************************************** */
//Question No 12:
//1. a)create an array of colors and iterate it using map() . b) if color is red, show it in the browser.
let arr11= ['green','blue','white','red','purple','brown'];
let newarray = arr11.map(value);
document.getElementById("result12").innerHTML=newarray;
function value(color){
    return color;
}

   let findred= arr11.filter(value => value === 'red');
document.getElementById("result13").innerHTML=findred;
    
       

/*************************************************************************************** */
//Question No 13:
//2. create an object. const persons = [
  //  {firstname : "Malcom", lastname: "Reynolds"},
  //  {firstname : "Kaylee", lastname: "Frye"},
  //  {firstname : "Jayne", lastname: "Cobb"}
 // ]; a) iterate it with map() and print the last names in the browser. b) Add Mr  with the last name and show it in the console. 
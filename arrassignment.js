
// assignment using loops
// 1. Write a js program to read and print elements of array.
// let array=[1,2,3,4,5,6,7];
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }

// let array=[1,2,3,4,5,6,7];
// array.forEach((item)=>{
//      console.log(item);
// })
// let array=[1,2,3,4,5,6,7];
// let i=0;
// while(i<array.length){
//   console.log(array[i]);
//      i++;
// }

// let array=[1,2,3,4,5,6,7];
// let i=0;
// do {
//      console.log(array[i]);
//      i++;
// } 
// while (i<array.length);

// let arr=[1,2,3,4,5,6]
// arr.forEach((item)=>{
//      console.log(item);
     
// } )



// 2. Write a js program to print all negative elements in an array.

// let arr=[1,2,-3,-4,-5,-6,7,8,9,-10]
// for(let i=0;i<arr.length;i++){
//      if(arr[i]<0 ){
//      console.log(arr[i]);
// }
// }

// let arr=[1,2,-3,-4,-5,-6,7,8,9,-10]
// arr.map((item)=>{  
//      if(item < 0){
//      console.log(item);
// } 
// })

//positive number
// let arr=[1,2,-3,-4,-5,-6,7,8,9,-10]
// arr.map((item)=>{  
//      if(item > 0){
//      console.log(item);
// } 
// })

// let arr=[1,2,-3,-4,-5,-6,7,8,9,-10]
// arr.forEach((item)=>{
//      if(item < 0){
//      console.log(item);
// }
// })





// 3. Write a js program to find sum of all array elements.
// let sumArr=[1,2,3,4];
// let count=0;
// for(let i=0;i<sumArr.length;i++){
//     count=count+sumArr[i]
// }
// console.log(count);





// 4. Write a js program to find maximum and minimum element in an array.
// let arr=[1,2,23,44,5,5,66]
// let min,max;
// min=arr[0],max=arr[0]
// for(let i=0;i<arr.length;i++){
//      if(arr[i]<min){
//           min=arr[i]
//      }else{
//           max=arr[i]
//      }
// }
// console.log(min);
// console.log(max);











// 5. Write a js program to find second largest element in an array.

// let arr=[1,2,3,4,5,5,6,8,9,5,10]
// let scndmax=arr[0]
// for(let i=0;i<arr.length;i++){
//      if(arr[i]> scndmax)
//           scndmax=arr[i-1]
// }
// console.log(scndmax);

// 2nd largest number in array
// let arr=[1,2,3,4,5,5,6,8,9,5,10,11,33,44]
// arr.sort((a,b)=>b - a)
// console.log(arr);

// let seclargest=arr[1]
// console.log("the 2nd largest number is ",seclargest);

//2nd smallest number in array
// let smarr=[66,55,44,33.1,2,3,4,5,5,6,8,9,5,10,11,33,44]
// smarr.sort((a,b)=>a - b)
// console.log(smarr);
// let secSmallest=smarr[1];
// console.log(secSmallest);


// 6. Write a ts program to count total number of even and odd elements in an array.

// let arr=[1,1,21,2,2,5,53,55]
// // let totalEven=[0]
// let totalEven=0
// // let totaOdd=[0]
// let totaOdd=0

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){

//         totalEven++;
//     }else{
//         totaOdd++
//     }  
// }
// console.log(totaOdd);
// console.log(totalEven);

// console.log(arr);









// 7. Write a ts program to count total number of negative elements in an array.

// let arr=[1,-11,-2,-3,-4,5,-56,-6,-7,7,-4]
// let count = 0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<0){
//         count++;
//     }
// }
// console.log(count);




// 8. Write a js program to copy all elements from an array to another array.
// let arr=[1,2,3,5,,4,3,21,1];
// let copyArr=[];
// for(let i=0;i<arr.length;i++){
//     copyArr.push(arr[i])
//     // console.log(arr[i]);
// }

// console.log("the orignal array is",arr);
// console.log("the copy of array is",copyArr);
//q wht copy array is outpyt ,, undefined and orignal arr is empty item







// 9. Write a js program to insert an element at a specific index in an array.

// let arr=[1,2,3,44,55,66]
// //splice is an array method that can be add del the value
// //start index delete value option to add
// arr.splice(3,2,111)
// console.log(arr);




// 10. Write a ts program to delete an element from an array at specified position.
// let arr=[1,2,3,44,55,66]
// arr.splice(1,1)
// console.log(arr);


// 11. Write a js program to count frequency of each element in an array.
// let arr = [1, 2, 2, 3, 3, 3,7, 4, 4, 4, 4, 5, 5, 5, 5, 5];
// let frequency = {};//empty objects called frequency. objecty act as map
// where key is an element from the array. value represent the no of time that elemenet appears 


// for (let i = 0; i < arr.length; i++) {
//     //elememnt is variable that store current item in array for each iteration
//     let element = arr[i];
//     if(frequency[element]){
//         frequency[element]++;
//     }else{
//         frequency[element] = 1;
//     } 
// }

// console.log("Frequency of each element:", frequency);












// 12. Write a js program to print all unique elements in the array.
// Filter and display unique elements
// let arr = [1, 2, 2, 3, 4, 65, 3, 3, 5, 5, 6, 6];
// let uniqueElements = {}; //unitqye element object is initalized as ana empty object 
// //it will be used to store each element in the array as a key and count as the value

// for (let i = 0; i < arr.length; i++) {
//      //element is set to current item in the array
//     let element = arr[i];
//     // Count occurrences of each element

//     if (uniqueElements[element]) {
//         uniqueElements[element]++;
//     } else {
//         uniqueElements[element] = 1;
//     }
// }

// // Filter and display unique elements
// for (let key in uniqueElements) {
//     if (uniqueElements[key] === 1) {
//         console.log(key);
//     }
// }








// // 13. Write a ts program to count total number of duplicate elements in an array.
// let arr=[1,2,3,4,4,5,5,5]
// let elememntCount={};
// let duplicateCount=0;

// for(let i=0;i<arr.length;i++){
//     let elememnt=arr[i];
//     if(elememntCount[elememnt]){
//         elememntCount[elememnt]++;
//     }else{
//         elememntCount[elememnt]=1
//     }
// }
// for(let key in elememntCount){

//     if(elememntCount[key]>1){
//          duplicateCount++;
//     }
// }
// console.log(duplicateCount);














// 14. Write a js program to delete all duplicate elements from an array.

// let arr=[1,2,2,3,3,4,4,7,64]
// let elememntCount={};
// let uniqueArr=[]
// for(let i=0;i<arr.length;i++){
//     let elememnt=arr[i]
//     if(elememntCount[elememnt]){
//         elememntCount[elememnt]++
//     }else{
//         elememntCount[elememnt]=1;
//     }
// }
// for(let key in elememntCount){
//     if(elememntCount[key]===1){
//         uniqueArr.push(Number(key))
//     }
// }
// console.log(uniqueArr);










// 15. Write a js program to merge two array to third array.
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// // let arr3=arr1+arr2;//+operator is string concatenantion not merging
// // let arr3=arr1.concat(arr2)
// let arr3=[...arr1,...arr2]
// console.log(arr3);











// 16. Write a js program to find reverse of an array.
// let arr=[1,2,3,4]
// arr.reverse()
// console.log(arr);


// 17. Write a js program to put even and odd elements of array in two separate array.
// let arr = [1, 2, 2];
// let evenElement = [];
// let oddElement = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenElement.push(arr[i]);
//     } else {
//         oddElement.push(arr[i]);
//     }
// }

// console.log("Total even elements:", evenElement);
// console.log("Total odd elements:", oddElement);




// 18. Write a ts program to search an element in an array.





// 19. Write a ts program to sort array elements in ascending or descending order.

// let arrAsc=[1,5,42,23,2]
// arrAsc.sort((a,b)=>a - b)
// console.log(arrAsc);

// let arrDes=[1,5,42,23,2]
// arrDes.sort((a,b)=>b - a)
// console.log(arrDes);

// 20. Write a js program to sort even and odd elements of array separately.
// let arr = [1, 2, 5, 3, 8, 6, 4, 7, 9, 0]; // Sample array
// let evenArr = [];
// let oddArr = [];  

// for (let i=0; i<arr.length; i++) {
//     if (arr[i]%2===0) {
//         evenArr.push(arr[i])
//     } else {
//         oddArr.push(arr[i]);  
//     }
// }

// evenArr.sort((a, b) => a - b); // Sort the  evenArray in ascending order
// oddArr.sort((a, b) => a - b);   // Sort the oddArray in ascending order


// console.log("the sorted even elements:", evenArr);
// console.log("the sorted odd elements:", oddArr);




// 21. Write a js program to left rotate an array.

// 22. Write a ts program to right rotate an array.



// var firstName="awais"
// let lastName="rafiq"
// let age= 23;
// const yearOfBirth=2003;

// let userIntro="hy,  my name is "+firstName + " "+ lastName

// console.log(userIntro);

// alert("awausis")
// console.log(alert);





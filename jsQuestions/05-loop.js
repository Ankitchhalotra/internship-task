// Q1 fibonacci series
function fibonacci(n){
    for(let i=1,j=-1,k=1; i<=n; i++){
        let sum = j+k;
        console.log(sum,' ');
        j = k;
        k = sum; 
    }
}
//fibonacci(10);


// Q2 factorial 
((x)=>{
    var sum = 1;
    for(let i=x; i>0; i--){
      sum *= i; 
    }
    console.log(`factorial is : ${sum}`);
    
})(5);


// Q3 sum of array
function addValue(arr) {
    var sum = 0;
    for (let i=0; i<arr.length; i++) {
       sum += arr[i];
    }
    return sum;
}
var arr = [1,2,3,4];
console.log(addValue(arr));


//Q4 print prime number
function printPrime(x){
   
    for(let i=2; i<x; i++){
        if(x%i==0){
            return false;
        } else{
            return true;
        }
    }
}
var n = 10;
// for(var i=1; i<=n; i++){
//     if(printPrime(i)){
//         console.log(i,' ');  
//     }
// }


// Q5 Reverse Array
var arr = [1,2,3,4,5];
var start = 0;
var end = arr.length-1;

while(start<end){
   var temp = arr[start];
   arr[start] = arr[end];
   arr[end] = temp;

   start++;
   end--;
}
console.log(arr);


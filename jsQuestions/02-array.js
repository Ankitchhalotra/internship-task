
// Q1 Remove Duplicate Vales in Array\
// [Approach First]

//var arr = [1,1,5,2,2,3,4];
// var res  = [...new Set(arr)];
// console.log(res);

// [Approach Second]
let obj = {};
//arr.forEach(iterate);
function iterate(x){
    if (!obj[x]) {
        obj[x] = 1;
      } else {
        obj[x] = obj[x] + 1;
      }
}
let resultArray = [] ;
var count = 0;
// for(var key in obj){   
//  resultArray[count] = key;
//  count++;
// }
// console.log(resultArray);



// Q2 Nested Array
// let arr = [[1,2],[3,4],['amy']];
// console.log(arr.flat());



// Q3  find Maximum element
function printMax(){
    var arr = [1,1,15,2,2,3,4,9];
    var max = 0;
    for(var item of arr){
        if(item > max){
            max = item;
        }
    }

    return max;
}
//console.log('Maximum element is ',printMax());



// Q4  rotate Array
// var arr = [1,2,3,4,9]
// var num = arr.shift();
// arr.push(num);
// console.log('rotate Array are : ',arr);



// Q5 Return comman element

function unique(arr1,arr2) {
var result = [];

for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr1[i] === arr2[j]){
            result.push(arr1[i]);
        }
    }
}
return result;  
}
var arr1 = [1,2,3];
var arr2 = [1,9,5,6,7,3];
//console.log(unique(arr1,arr2));

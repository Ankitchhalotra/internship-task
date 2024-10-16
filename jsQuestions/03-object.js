// Q1 Deep clone

// var obj1 = {
//     name : 'ankit',
//     age : 22,
//     address : 'sanawad'
// };
// var obj2 = {...obj1};
// obj1.name = 'amit'

// console.log(obj1);
// console.log(obj2);



//  Q2 Merge two object

function mergreObj(){
var obj1 = { name : 'ankit', age : 22, address : 'sanawad'};
var obj2 = { name : 'ankit', stream:'CSE', state : 'MP'};
return obj3 = {...obj1, ...obj2};  
}
//console.log(mergreObj());



// Q3 count key

// var obj1 = { name : 'ankit', age : 22, address : 'sanawad'};
// var objectkeys = Object.keys(obj1).length;
// console.log('Total keys in obj1 is : ',objectkeys);



//  Q4 

var obj1 = { name : 'ankit', age : 22, address : 'sanawad'};
for(let val in obj1){
    let key = val;
    let value = obj1[val]
    
    obj1.name = value;
    obj1.name.valueOf(key);
}
var b = 5;
// console.log(obj1);
// console.log(`'data ${b}'`);


// var key = Object.keys(obj1);
// var value = Object.values(obj1);
// var a = obj1.key = key;
// var b = obj1.value = value;

// console.log(a);
// console.log(b);



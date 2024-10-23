
function checkString() {
    let str = 'py';
    if (str.charAt(0)==='p' && str.charAt(1)==='y') {
        console.log('string starting with py');
    } else{
        console.log('string not start with py');
    }
    
}
checkString();

function checkStringJava() {
    let str = 'javha';
   let str1 = str.charAt(0)==='j'
   let str2 = str.charAt(1)==='a'
   let str3 = str.charAt(2)==='v'
   let str4 = str.charAt(3)==='a'
    
    if (str1 && str2 && str3 && str4) {
        console.log('string starting with java');
    } else{
        console.log('string not start with java');
    }
    
}
checkStringJava();


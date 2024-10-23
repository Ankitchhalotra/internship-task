function check(num1, num2) {
    if ((num1>0 && num2<0) || (num1<0 && num2>0)) {
        console.log('one positive and other is negative');
    } else if(num1>0 && num2>0){
     console.log('both are positive');   
    }
     else {
        console.log('both numbers negative');
    }
}

check(-10, 5);  


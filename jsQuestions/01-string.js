var str = "raceelcar";

//    #Q1 Remove voewls in String
function removeVowels(str) {
  var string = str.replace(/[aeiouAEIOU]/g, "");
  return string;
}
// console.log(removeVowels(str););

//    #Q2  palindrom
function isPalindrome(str) {
  var start = 0;
  var end = str.length - 1;

  while (start < end) {
    if (str.charAt(start) !== str.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}
// if(isPalindrome(str)){
//     console.log('string is palindrome');
// } else{
//     console.log('string is not palindrome');
// }

//    #Q3  count occurence
function checkOccurence(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    x = str.charAt(i);
    if (!obj[x]) {
      obj[x] = 1;
    } else {
      obj[x] = obj[x] + 1;
    }
  }
}
//console.log(checkOccurence(str));


//    Q4 substring
var str = "abcd"
var sub = "bca"
console.log("substring : ",str.includes(sub));

//    Q5 check Anagram
function isAnagram() {
  let str1 = "siilent";
  let str2 = "listen";

  if (str1.length != str2.length) {
    return false;
  }

  str1 = str.split("").sort().join("");
  str2 = str.split("").sort().join("");

  if (str1 !== str2) {
    return false;
  } else {
    return true;
  }
}
// if (isAnagram()) {
//   console.log("string is anagram");
// } else {
//   console.log("string is not anagram");
// }

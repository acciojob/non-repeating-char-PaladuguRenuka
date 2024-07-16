function firstNonRepeatedChar(str) {
 // Write your code here
	str = str.toLowerCase()

for (var i = 0; i < str.length; i++) {
  let isFound = false;
  
  for( let j = 0; j< str.length; j++){
    if(i !== j && str[i] === str[j]){
      isFound = true;
      break;
    }
  }
  if(!isFound){
    //console.log(str[i])
    return str[i]
  }
}
//console.log("-1")
    return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

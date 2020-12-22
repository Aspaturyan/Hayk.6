    //Task 2 

  function getSubstring (str, digits) {
    if(str.length < digits) return str;
    if(str.length === digits) return str;
    if(digits === 1) return str.split('');
    let result = [];
    for(let i = 0; i < str.length; i++) {
      const start = str[i];
      const rest = str.substring(str.length-digits, digits);
      result.push(start.concat(rest));
    }
    return result;
  }
  console.log(getSubstring("abcdfghz", 7));
  //console.log(getSubstring("495215", 3));
    
     //task 4 

  function concatMany(arr){
    let result = [];
    arr.forEach((el)=> {
      if(Array.isArray(el)){
        result = result.concat(concatMany(el));
        return;
      }result.push(el);
    });
    return result;
  }
  //consol.log(concatMany([['1', 'hello'], [[1, 2], 2]]));
  console.log(concatMany([[1, 2], [2, 3], [3, 4]]));


   
 //task 5 (1 ktor)

function filter(arr, a) {
  let newArr = [];
  for( let i = 0; i < arr.length; i++){
    if(i >= a){
      newArr.push(arr[i])
    }
  }
  return newArr;
}
console.log(filter([1, 2, 3, 4, 5, 6, 7], 2))
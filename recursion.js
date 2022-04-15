function product(arr, idx = 0){
  if(idx == arr.length - 1){
      return arr[idx] 
  }

  return arr[idx] * product(arr, idx +1);
}

function longest(words, idx = 0, longestSoFar = 0) {
  if (idx === words.length){
      return longestSoFar;
  } 
  longestSoFar = Math.max(words[idx].length, longestSoFar);
  return longest(words, idx + 1, longestSoFar);
}

function everyOther(word, idx = 0, newStr = "") {
  if (idx >= word.length) {
      return newStr;
  }
 newStr = newStr + word[idx];
  return everyOther(word, idx + 2, newStr); 
}

function palindromeHelper(word, idx = 0) {
  if(idx === word.length - 1) {
    return word[idx];
}

newString = palindromeHelper(word, idx + 1);

return newString + word[idx];
}

function isPalindrome(word) {
  reverseWord = palindromeHelper(word); 

  if(reverseWord === word ) {
      return true;
  }

  return false;
}

function revString(word, idx = 0) {
  if(idx === word.length - 1) {
      return word[idx];
  }

  newString = revString(word, idx + 1);

  return newString + word[idx];
}

function findIndex(arr, word, idx = 0) {
  if(arr[idx] === word) {
      return idx;
  }

  if(idx === arr.length) {
      return -1;
  }

  return findIndex(arr, word, idx + 1); 
}

function gatherStrings(obj) {
  
  let stringArr = []; 
  for(let key in obj) {
    if (typeof obj[key] === "string") {
      stringArr.push(obj[key]);
    }
    if(typeof obj[key] === "object") {
      stringArr.push(...gatherStrings(obj[key]));
    }
  }
  return stringArr;
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
};

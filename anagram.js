/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function sort(str1,str2)
{
  let str_1=str1.toLowerCase();
  let str_=str2.toLowerCase();
  str_1=str_1.split("");
  str_2=str_2.split("");
  str_1=str_1.sort();
  str_2=str_2.sort();
  str_1=str_1.join("");
  str_2=str_2.join("");
  return str_1,str_2;
  
}
function isAnagram(str1, str2) {
  if(str1.length!=str2.length)
  {
    return false
  }
  else
  {
    sort(str1,str2);
    if(str1==str2){
      return true;

    }
    else
    {
      return false;
    }
  }
  

}

module.exports = isAnagram;

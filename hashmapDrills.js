const HashMap = require('./hashmap');

//#2 WhatDoesThisDo
//Overwrite the value of the key 'Hello World' --> output: 20 & 10
const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1,10);
  map1.set(str2,20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

//#3 Hash map understanding
//1. k mod m: 10 % 11 = 1, 22 % 11 = 0, 31 % 11 = 9, 4 % 11 = 7, 15 % 11 = 4, 28 % 11 = 6, 17 % 11 = 6
// 88 % 11 = 0, 59 % 11 = 4

//2. k mod 9: 5 = 5, 28 = 1, 19 = 1, 15 = 6, 20 = 2, 33 = 6, 12 = 3, 17 = 8, 10 = 1
// linked lists at index: 1 (k = 28, 19, 10), 6 (k = 15, 33)

//#4 Remove duplicates
//input: google
//output: gole 
function removeDupe(str) {
  // let arr = str.split('');
  // console.log(arr)
  let result='';
  let hash = new HashMap();
  for(let i = 0; i < str.length; i++) {
    
    if(!hash.get(str[i])){
      hash.set(str[i],true);
      result += str[i];
    }
  }
  return result;
}

function palindrome(s) {
  let oddCount = 0;
  let hash = new HashMap();
  for(let i=0; i<s.length; i++) {
    if(hash.get(s[i])) {
      hash.set(s[i], hash.get(s[i]) + 1);
      if(hash.get(s[i]) % 2 === 1){
        oddCount++;
      }else {
        oddCount--;
      }
    }
    else {
      hash.set(s[i], 1);
      ++oddCount;
    }
  }
  return oddCount === 1 || oddCount === 0;
}

// function anagram(arr){
//   const arrHash = new HashMap();
//   arr.forEach(word => {
//     let keyValue = word.split('').sort().join();
//     if(arrHash.get(keyValue) === undefined){
//       arrHash.set(keyValue,[word]);
//     } else{
//       let temp = arrHash.get(keyValue);
//       arrHash.set(keyValue,[...word,temp]);

//     }
//   });
//   return arrHash.get();
// }

function groupAnagrams(wordList) {
  const hashMap = new HashMap();
  let groupsArray = []; //Groups of anagrams will be pushed here

  const groupIndexFinder = (array, grouping) => {
    //Loop through groupsArray and find the grouping(e.s aest)
    for (let i = 0; i < array.length; i++) {
      if (
        array[i][0]
          .split("")
          .sort()
          .join("") === grouping
      ) {
        //return the index position of array
        return i;
      }
    }
  };

  for (let i = 0; i < wordList.length; i++) {
    const grouping = wordList[i]
      .split("")
      .sort()
      .join("");
    if (hashMap.get(grouping) === undefined) {
      groupsArray.push([wordList[i]]);
      hashMap.set(grouping, groupIndexFinder(groupsArray, grouping));
    } else {
      groupsArray[hashMap.get(grouping)].push(wordList[i]);
    }
  }

  return groupsArray;
}

let arr = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']
console.log(groupAnagrams(arr))

function main() {
  const lor = new HashMap();
  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Wizard', 'Gandolf');
  lor.set('Human', 'Aragon');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'Necromancer');
  lor.set('Maiar', 'Sauron');
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');
  // console.log(lor._findSlot('Hobbit'))
  console.log(lor._hashTable[13].key);
}

HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

// console.log(removeDupe('google'));
// console.log(palindrome('acecarr'));
// console.log(palindrome('north'));
console.log(anagram(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));
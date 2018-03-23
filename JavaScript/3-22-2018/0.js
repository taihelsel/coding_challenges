//https://www.codewars.com/kata/555624b601231dc7a400017a/train/javascript

//Problem
//return who is the "survivor", ie: the last element of a Josephus permutation.

//Solution
const josephusSurvivor = (n,k) =>{
    n = new Array(n).fill().map((item,index)=>index+1),
    offset = 0;
    while(n.length>1){
      offset += k-1;
      offset %= n.length
      n.splice(offset,1);
    }
    return n[0];
  }
  
  //Tests
  console.log("Expected 4 got",josephusSurvivor(7,3));
  console.log("Expected 10 got",josephusSurvivor(11,19));
  console.log("Expected 1 got",josephusSurvivor(1,300));
  console.log("Expected 13 got",josephusSurvivor(14,2));
  console.log("Expected 100 got",josephusSurvivor(100,1));
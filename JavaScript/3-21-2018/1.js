//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

//Problem 
//Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise

//Solution
const snail = arr =>{
    let newArr = [];
    let nextMove = "top";
    while(arr.length){
      let x = arr[0].length;
      let y = arr.length;
      switch(nextMove){
        case "top":
          nextMove ="right";
          newArr = newArr.concat(arr[0]);
          arr.splice(0,1);
        break;
        case "right":
          nextMove ="bottom";
          for(let i=0;i<y;i++){
            newArr.push(arr[i][x-1]);
            arr[i].splice(x-1,1);
          }
        break;
        case "bottom":
          nextMove ="left";
          newArr = newArr.concat(arr[y-1].reverse());
          arr.splice(y-1,1);
        break;
        case "left":
          nextMove ="top";
          for(let i=y-1;i>=0;i--){
            newArr.push(arr[i][0]);
            arr[i].splice(0,1);
          }
        break;
        default:
          console.log("error");
        break;
      }
      if (arr[y-1] === undefined || arr[y-1].length === 0) {
        arr.splice(y-1,1);
      }
    }
    return newArr;
  }
  //Tests
  console.log(snail([[1,2,3],
        [4,5,6],
        [7,8,9]]));
        
  console.log(snail([[1,2,3],
        [8,9,4],
        [7,6,5]]));
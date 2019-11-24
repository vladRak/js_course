// 5. найти наиболее часто встречающийся элемент(-ы) в массиве //[1,2,3,1] -> 1

function mostFrequent(array){
  var result = array[0];
  var tmp = 0;
  for(var i of array){
    var count = 0;
    for(var j of array){
      if(i===j){
        count++;
      }
    }
    if(count > tmp){
      tmp = count;
      result = i;
    }
  }
  return result;
}

console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

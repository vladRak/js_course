// 3. написать функцию, которая принимает на вход массив слов,
// на выход - список тех из них, которые по 5 символов длиной
//
// filterWords(["hello", ",", "world", "!!!"]) // ["hello", "world"]

function filterWords(array, wordLength) {
  return array.filter(word => word.length == wordLength);
}

console.log(filterWords(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], 5));

// 4. функция, которая принимает на вход массив примитивных типов, на выход - уникальные элемента этого массива

function getUniqueFromArrObjective(array) {
  return Array.from(new Set(array));
}

console.log(getUniqueFromArrObjective([1, 1, 2, 2, 3, 3, 'a', 'a', 'b', 'b']));

// 2. функция, которая принимает строку и выдает на экран к-во уникальных символов в ней.
// регистр здесь не важен
//
// showUnique('Abracadabra') //console.log('a,b,r,c,d');

function strToArr(str) {
  return str.toLowerCase().split('');
}

function getUniqueFromArrFunctional(array) {
  return array.filter((v, i, a) => a.indexOf(v) === i);
}

function showUnique(str) {
  return getUniqueFromArrFunctional(strToArr(str));
}

console.log(showUnique('Abracadabra'));

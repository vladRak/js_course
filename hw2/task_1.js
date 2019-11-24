// 1. типичная с собеседований. написать функцию, которая проверяет,
// является ли строка палиндромом (т.е. слева направо и справа налево читается одинаково с учетом пробелов,
// запятых и др.) и возвращает соответственно true или false
//
// isPalindrom('lol')  //true
// isPalindrom('hello')  //false
// isPalindrom('racecar')  //true
//
// здесь isPalindrom - функция, которую необходимо реализовать

function isPalindrom(str) {
  return str == str.split('').reverse().join('');
}
console.log(isPalindrom('lol'));

function checkPalindrome(str) {
  var lowRegStr = str.toLowerCase().replace(/[\W_]/g, '');
  return lowRegStr === lowRegStr.split('').reverse().join('');
}
console.log(checkPalindrome("A man, a plan, a canal. Panama"));

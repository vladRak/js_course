// 2. через prompt ввожу текст - перечень слов, разделенных запятой с пробелом.
// в консоль выдать список слов в обратном порядке в верхнем регистре + буквы в этих словах в обратном порядке + не через запятую, а через дефис
//
// пример:
// ввожу:
// one, two, three, four, five
// результат в консоль:
// "EVIF-RUOF-EERHT-OWT-ENO"

// let words = prompt("Type words.", 'Example, Words, For, Input');
let words = 'Example, Words, For, Input';

console.log(words.replace(/,\s*/gi, '-')
									.toUpperCase()
									.split('')
									.reverse()
									.join(''));

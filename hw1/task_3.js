// 3. со звездочкой
// через тот же prompt вводится текст в формате
// значение1: свойство1, значение2: свойство2, ...
// трансформировать это в объект и вывести в консоль
//
// пример:
// ввожу строку
// name: Dmytro, email: dmishchuk@gmail.com, city: Kyiv
//
// получаю в консоль:
// {
// name: 'Dmytro',
// email: 'dmishchuk@gmail.com',
// city: 'Kyiv'

let inputText = 'name: Dmytro, email: dmishchuk@gmail.com, city: Kyiv';
inputText = inputText.replace(/:\s/gi, ': \'')
  .replace(/(,\s)/gi, '\',\n')
  .replace(/$/, '\'');

console.log(`{\n${inputText}\n}`);

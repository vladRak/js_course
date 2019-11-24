	var array = [
	{
		name: 'Dmytro',
	  mark: 3
	},
	{
		name: 'Denis',
	  mark: 4
	 },
	{
		name: 'Alex',
		mark: 5
	}
];
// NB!
// Window
// HTMLDocument
// API and methods
function getMarks(item) {
		var result;
		if(item.mark > 3){
			result = `${item.name}:  ${item.mark}`;
		}else {
			result = `${item.name} has bad mark!`;
		}
		return result;
};

array.forEach(function printMarks(item) {
		console.log(getMarks(item));
});

// for(var i in array){
// 	if(array[i].mark > 3){
// 		console.log(array[i].name + ': ' + array[i].mark);
// 	}
// }

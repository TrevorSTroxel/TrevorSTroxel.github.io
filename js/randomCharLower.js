// binary random Integer
// save file as randomInCreate.js
// to run type "node randomInCreate.js"
var randomInteger = function() {
	var ival = Math.random()*26+97;
	// console.log(ival);
	ival = Math.floor(ival);
	return ival;
}
// main 
var i, rInt ;
var letter = ' ' ;
var tst = 0;
for (i = 0; i < 65536; i++){
rInt	= randomInteger();
if (rInt == 97)tst++;
//console.log(rInt+" ");
letter = parseInt(rInt);
letter = String.fromCharCode(rInt);
process.stdout.write(letter);
}
console.log("\n\n Count 97 = "+tst);

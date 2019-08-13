var os = require('os');
var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
//kod poniżej ma się wykonać w momencie odczytania wejścia
process.stdin.on('readable', function () {
	var input = process.stdin.read(); //wyświetla to, co wpisaliśmy
	if (input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');	
				process.exit();
				break;
			case '/version':
				console.log(process.versions);
				break;
			case '/lang':
				console.log(process.env.lang);
				break;
			case '/getOSinfo':
				OSinfo.print();
				break;
			default:
				process.stderr.write('Wrong instruction!\n'); 
		}
    }	
});

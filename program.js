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
				break
			case '/version':
				process.stdout.write(process.versions);
				break
			case '/lang':
				process.stdout.write(process.env.lang);
				break
			default:
				process.stderr.write('Wrong instruction!\n'); 
		}
}
	
});


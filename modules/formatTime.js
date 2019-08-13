function formatTime (time) {
	var hours = Math.floor(time / 3600);
	var minutes = Math.floor((time % 3600)/60);
	var seconds = (time % 3600) % 60; 
	if (time < 60) {
		return time;
	} else if (time < 3600) {
		return minutes + 'min ' + seconds + 's';
	} 
		return hours + 'h ' + minutes + 'min ' + seconds + 's';

}
exports.convert= formatTime;

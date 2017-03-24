// StopWatch Example Pure JS

function StopWatch() {
	// set some vars
	var timer = document.querySelector('.sec-big');
	var timerSm = document.querySelector('.sec-small');
	var t = [0, 0, 0, 0, 0, 0, 0, 0];
	var laps = 0;

	console.log(timer);

	// toggle start and stop function
	this.startStop = function() {
		t[t[2]] = (+new Date()).valueOf();
		t[2] = 1 - t[2];

		if (t[2] == 0) {
			clearInterval(t[4]);
			t[3] += t[1] - t[0];

			t[7]++;

			t[4] = t[1] = t[0] = 0;

			document.querySelector('#startTimer').innerHTML = "Start";
			document.querySelector('#startTimer').style.color = "green";
			document.querySelector('#reset').innerHTML = "Reset";
			display();
		}
		else {
			document.querySelector('#startTimer').innerHTML = "Stop";
			document.querySelector('#startTimer').style.color = "red";
			document.querySelector('#reset').innerHTML = "Lap";
			t[4] = setInterval(display, 40);
		}

		return false;
	};

	// reset the timer
	this.reset = function() {
		if (t[2]) {
			laps++;

			document.querySelector('.time-lapsed ul').
			insertBefore(document.createElement('li'), document.querySelector('.time-lapsed ul').firstChild);

			var firstChild = document.querySelector('.time-lapsed ul').firstChild;
			firstChild.innerHTML = '<div>Lap '+laps+'</div><div>'+document.querySelector('.sec-big').textContent+'</div>';
		}
		else {
			t[4] = t[3] = t[2] = t[1] = t[0] = 0;

			display();

			t[7] = 0;
			document.querySelector('.time-lapsed ul').innerHTML = "";
			laps = 0;
		}

		return false;
	};


	/*************************
	 * private method
	 *************************/
	// format the function
	var format = function(ms) {
		var d = new Date(ms + t[5]).toString().replace(/.*(\d{2}:\d{2}).*/, '$1');
		var x = String(ms % 1000);
		while (x.length < 3) {
			x = '0' + x;
		}
		d += '.' + x;
		return d.substr(0, d.length - 1);
	};

	// handle timer display
	var display = function() {
		if (t[2]) {
			t[1] = (new Date()).valueOf();
		}

		timer.innerHTML = format(t[3] + t[1] - t[0]);
		timerSm.innerHTML = format(t[3] + t[1] - t[0]);
	};
}

// Start the stopWatch class
var start = new StopWatch();



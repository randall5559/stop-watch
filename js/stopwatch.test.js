/*
 * Unit tests for stopwatch.js
 */
var html = `
		<header>
			<div>Stopwatch</div>
		</header>
		<main>
			<div id="time-bar">
				<h5 class="sec-small">00:00.00</h5>
				<h1 class="sec-big">00:00.00</h1>
			</div>
			<div id="controls">
				<div class="btn-group">
					<a href="javascript:void(0);" id="startTimer" onclick="start.startStop();">Start</a>
					<a href="javascript:void(0);" id="reset" onclick="start.reset();">Reset</a>
				</div>
				<div class="time-lapsed">
					<ul></ul>
				</div>
			</div>
		</main>
		<footer></footer>
`;

document.body.insertAdjacentHTML('afterbegin', html);

// append script dynamically
var head = document.getElementsByTagName("head")[0];
var sTag = document.createElement("script");
sTag.type = "text/javascript";
sTag.src = "/base/js/stopwatch.js";
head.appendChild(sTag);

describe('StopWatch', function() {

    it('should start and stop StopWatch - startStop()', function(done) {
        setTimeout(function() {
            start.startStop();

            expect(document.querySelector('#startTimer').style.color).toEqual('red');
            expect(document.querySelector('#startTimer').innerHTML).toEqual('Stop');
            expect(document.querySelector('#reset').innerHTML).toEqual('Lap');

            start.startStop();

            expect(document.querySelector('#startTimer').style.color).toEqual('green');
            expect(document.querySelector('#startTimer').innerHTML).toEqual('Start');
            expect(document.querySelector('#reset').innerHTML).toEqual('Reset');
            done();
        });
    });

    it('should reset StopWatch - reset()', function(done) {
        setTimeout(function() {
            start.startStop();
            start.reset();

            var htmlObj = document.querySelector('.time-lapsed ul').firstChild;
            expect(htmlObj.firstChild.innerHTML).toEqual('Lap 1');

            start.startStop();
            start.reset();

            var htmlObj = document.querySelector('.time-lapsed ul').firstChild;
            expect(htmlObj).toBeNull();
            done();
        });
    });
});
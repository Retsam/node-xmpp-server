function waitFor(testFunc, callback, message, maxTime) {
	message = message || "something to happen"
	maxTime = maxTime || 2000
	var endTime = new Date().getTime() + maxTime

	if(testFunc()) return callback()

	var interval = setInterval(function() {
		var now = new Date().getTime();
		if(testFunc()) {
			clearInterval(interval)
			callback()
		} else if(now > endTime) {
			clearInterval(interval)
			callback(new Error("Timed out after waiting " + maxTime + "ms for "+message))
		}
	}, 100)
}

module.exports = waitFor
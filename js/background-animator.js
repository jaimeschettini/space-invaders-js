var BackgroundAnimator = function() {
	var 
		MAX_HEIGHT_POSITION = 900,
		SCROLL_SPEED = 10,
		currentPosition = 0,

		changeBackground = function() {
			if (currentPosition === MAX_HEIGHT_POSITION) {
				currentPosition = 0;
			}

			$("body").css("background-position-y", ++currentPosition + "px");
		};

	this.animate = function() {
		setInterval(changeBackground, SCROLL_SPEED);
	}
};
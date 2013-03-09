Space = function() {

	var universe = $(document.body),
		actionListeners = [];
	
	this.add = function(element) {
		return element.appendTo(universe);
	};

	this.addActionListener = function(listener) {
		actionListeners.push(listener);
	}

	this.bindActionListener = function(specs) {
		$(document).keydown(function(event) {
			for (var i = 0; i < actionListeners.length; i++) {
			 	actionListeners[i].actionPerformed(event.which);
			 }
		});
		return this;
	};
	
	this.addInvader = function(invaders) {
		
	};

	this.boundaries = function() {
		return {
			left: 0,
			right: universe.width()
		};
	};
	
	this.animate = function() {
		new BackgroundAnimator().animate();
	};

	this.bindActionListener();
	this.animate();

};
InvadersGeneral = function(space) {

	var 

		decidePosition = function() {
			return Math.random() * (space.boundaries().right - invader.width());
		},

		sendInvader = function(invader) {
			var invader = new Invader(invader).goToPosition(decidePosition()).attack();
			space.addInvader(invader);
		};


	this.attack = function() {
		var invaders = ['futurama', 'donbot', 'clamps', 'morbo', 'nibbler'];
		for (var i = 0; i < invaders.length; i++) {
			sendInvader(invaders[i]);
		}
	};
}
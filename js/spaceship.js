Spaceship = function(space) {
	var 

		spaceship = $(['<div class="spaceship"></div>'].join('')),
		
		bullet = $(['<div class="bullet"></div>'].join('')),
		
		step = 25,

		move = function(direction) {
			var previous = spaceship.offset().left,
				next = previous + (direction * step),
				boundaries = space.boundaries();
			if(boundaries.left >= next){
				next = boundaries.left; 
			} else if(boundaries.right <= next + spaceship.width()){
				next = boundaries.right - spaceship.width();
			}
			spaceship.offset({left: next});
		},
		
		moveLeft = function(){
			move(-1);
	    };
	    
	    moveRight = function(){
	    	move(1);
	    },
    
	    fire = function(){
	    	new Bullet({
	    		spaceship: spaceship,
	    		bullet: bullet
	    	}).fire();
	    },

	    actions = {
			37: moveLeft,
			32: fire,
			38: fire,
			39: moveRight
		};

    spaceship = space.add(spaceship);
	bullet = space.add(bullet);
	space.addActionListener({
    	actionPerformed : function(action) {
			(actions[action] || function(){})();
    	}
    });
};
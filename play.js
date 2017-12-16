var cursors;
var player;

var playState = {

	preload: function(){
		//game.load.image('sky', 'assets/sky.png');
		game.load.image('player', 'assets/ball.png');
		game.load.image('background', 'assets/ForestNight.png');
		//game.load.image('surface8', 'assets/surface8.png');
		//game.load.spritsheet('player', 'assets/dude.png')
	},

	create: function() {
		
		// Add background Forest_Night
		//game.add.sprite(0, 0, 'background');

		// Map Size 1920x1080 
		game.add.tileSprite(0, 0, 1920, 1080, 'background');

		game.world.setBounds(0, 0, 1920, 1080);

		// Add physics P2JS only for tests
    	game.physics.startSystem(Phaser.Physics.P2JS);

    	//Add physics ARCADE
		//game.physics.startSystem(Phaser.Physics.ARCADE);


    	player = game.add.sprite(game.world.leftX, game.world.centerY, 'player');

   		game.physics.p2.enable(player);

		cursors = game.input.keyboard.createCursorKeys();

    	game.camera.follow(player);

	},

	update: function() {
		player.body.setZeroVelocity();

	    if (cursors.up.isDown){
	        player.body.moveUp(300)
	    }
	    else if (cursors.down.isDown){
	        player.body.moveDown(300);
	    }

		if (cursors.left.isDown){
	        player.body.velocity.x = -300;
	    }
	    else if (cursors.right.isDown){
	        player.body.moveRight(300);
	    }
	},

	render: function() {
		game.debug.cameraInfo(game.camera, 32, 32);
    	game.debug.spriteCoords(player, 32, 500);
	}
	


};
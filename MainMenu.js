
BasicGame.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;

};

var uiGroupMenu;
var uiGroupMenu2;
var gameMusic;

BasicGame.MainMenu.prototype = {

	create: function () {
        this.camera.flash('#006600');
        
        imgMenuBack = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'imgMenuBack');
        imgMenuBack.anchor.setTo(0.5, 0.5);
        imgMenuBack.scale.set(this.world.width / imgMenuBack.width)
        
        imgMenuFore = this.add.sprite(this.world.width*0.5, -this.world.height*0.5, 'imgMenuFore');
        imgMenuFore.anchor.setTo(0.5, 0.8);
        
        var txtWidth = 400 / 2;
        var txtHeight = 400 / 2;
        
		this.playButton = this.add.button(this.world.centerX, this.world.height*1.3, 'btnStart', this.continueButton, this, 'buttonOver', 'buttonOut', 'buttonOver');
        this.playButton.anchor.setTo(0.5, 0.5);

        tween = this.add.tween(imgMenuFore).to( { y: this.world.height*0.5 }, 2000, Phaser.Easing.Quadratic.Out, true);
        
        tween2 = this.add.tween(this.playButton).to( { y: 600 }, 2400, Phaser.Easing.Quadratic.Out, true);
        
        gameMusic = this.add.audio('musOpening');
        gameMusic.play();
        gameMusic.loopFull();
	},

    
    
	update: function () {

	},
    
    
    
    gameMoreInfoExit: function () {
        this.add.tween(uiGroupMenu2).to( { alpha: 0 }, 500, "Linear", true);
        //uiGroupMenu2.kill();
    },

    continueButton: function (pointer) {
        this.gameStartFunc();
        sfxButton = this.add.audio('sfxButton');
        sfxButton.play();
	},
    
    nextMenu: function (pointer) {
        this.gameStartFunc2();
        sfxButton = this.add.audio('sfxButton');
        sfxButton.play();
	},
    
	startGame: function (pointer) {
        
        this.camera.fade('#006600');
        this.camera.onFadeComplete.add(this.fadeComplete,this);
		
	},
    
    fadeComplete: function () {
        gameMusic.stop();
		this.state.start('Game1'); 

	}
    
    

};

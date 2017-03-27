
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {
        imgMenuBack = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'imgBlueBack');
        imgMenuBack.anchor.setTo(0.5, 0.5);
        imgMenuBack.scale.set(this.world.width,this.world.height);
        
        imgLogoSmall = this.add.sprite(this.world.width*0.5, this.world.height*0.5, 'imgLogoSmall');
        imgLogoSmall.anchor.setTo(0.5, 0.5);
        
        var loaderOffset = 50
		this.background = this.add.sprite(this.world.centerX, this.world.centerY + loaderOffset, 'preloaderBackground');
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY + loaderOffset, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.background.anchor.setTo(0.5, 0.5);
        
		this.load.setPreloadSprite(this.preloadBar);
        
        this.load.image('sptPeng', 'assets/sprite/peng.png');
        
        this.load.image('sptIceberg', 'assets/sprite/iceberg.png');
        this.load.image('sptIcebergTop', 'assets/sprite/icerbergtop.png');
        this.load.image('sptWater', 'assets/sprite/water.png');
        
        this.load.image('sptBackground', 'assets/sprite/background.png');
        
        this.load.atlas('sptBubble', 'assets/sprite/bubble.png', 'assets/sprite/bubble.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
        
        this.load.audio('sfxPop1', ['assets/audio/pop1.mp3', 'assets/audio/pop1.ogg']);
	},

	create: function () {

        
	},

	update: function () {
//		if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
//		{
			this.ready = true;
			this.state.start('Game');//MainMenu');
//		}

	}

};

var BasicGame = {};

    var globalScoreGame1 = 0;
    var globalScoreGame2 = 0;
    var globalScoreGame3 = 0;
        
    var globalGameWidth = 960;
    var globalGameHeight = 680;
        
    var globalCurrentGame = 1;
    var globalTotalScore = 1;

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {

    init: function () {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop){
            this.scale.pageAlignHorizontally = true;
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(480, 260, 1920, 1360); 
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
        }else{
            this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            //this.scale.setMinMax(480, 260, window.innerWidth, window.innerHeight);
            this.scale.setMinMax(480, 260, 960, 1800);
            this.scale.forceLandscape = false;
            this.scale.pageAlignHorizontally = false;
        }
    },

    preload: function () {
        var myDir = "assets/"
        this.load.image('preloaderBackground', 'assets/sprite/loadback.png');
        this.load.image('preloaderBar', 'assets/sprite/load.png');
        this.load.image('imgLogoSmall', 'assets/sprite/logo.png');
        this.load.image('imgBlueBack', 'assets/sprite/background.png');
        //this.load.text('trident', 'http://polynog.com/clients/trident.txt');
    },

    create: function () {
            this.state.start('Preloader');
    }
};

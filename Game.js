var GameCont = function(){

BasicGame.Game = function (game) {
    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)
};

var gamePause = false;
var gameComplete = false;
var gameStartable = true;
var gameActive = false;
var xSpeed = 0;
var acc = 2;
var maxSpeed = 16;
var yAcc = 3;
var ySpeed = 6;
var ySpeedDec = 1;
var ySpeedFloat = 16;    
var bubblePopSpeed = 32;
var ySpeedMax = 26;
var inWater = false;
    
var gameItem = [];
var bubble = [];
    
var waterX = 50;
    
//Utilities
    function checkOverlap(spriteA, spriteB) {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(boundsA, boundsB);
        //console.log('hit');
    }

BasicGame.Game.prototype = {
    
    
    
    loadVars: function(){

    },
    
    loadLevel: function(){
        
    },
    
    renderGame: function() {
          
    },
    
    create: function () {
        
        
        waterX = (this.world.height/2) + 60;
        
        pop1 = this.add.audio('sfxPop1');
        
        background = this.add.sprite(this.world.width/2, this.world.height/2, 'sptBackground');
        background.anchor.setTo(0.5, 0.5);
        
        iceberg1 = this.add.sprite(0, this.world.height/2, 'sptIceberg');
        iceberg1.anchor.setTo(0.5, 0.0);
        iceberg1top = this.add.sprite(0, this.world.height/2, 'sptIcebergTop');
        iceberg1top.anchor.setTo(0.5, 1);
        
        iceberg2 = this.add.sprite(this.world.width, this.world.height/2, 'sptIceberg');
        iceberg2.anchor.setTo(0.5, 0.0);
        iceberg2top = this.add.sprite(this.world.width, this.world.height/2, 'sptIcebergTop');
        iceberg2top.anchor.setTo(0.5, 1);
        
        
        for (var i = 0; i < 10; i++) {
            var myBubble;
            myBubble = this.add.sprite(this.world.width/2, waterX + 200 + (i * 80), 'sptBubble');
            animations = myBubble.animations.add('bubble');
            animations.play(30, true);
            myBubble.alive = true;
            myBubble.x = this.rnd.integerInRange(0, this.world.width);
            bubble.push(myBubble);
        }
        
        
        peng = this.add.sprite(60, 0, 'sptPeng');
        peng.anchor.setTo(0.5, 0.0);
        //peng.x = (iceberg1.y + peng.height);
        peng.y = (iceberg1.y - peng.height);
    
        water = this.add.sprite(this.world.width/2, waterX, 'sptWater');
        water.anchor.setTo(0.5, 0);
    },
    
    gameLoop: function(){
        if(inWater == true){
            if(ySpeed > -ySpeedFloat){
                ySpeed -= ySpeedDec;
            }
            if(peng.y - 200 < water.y){
                inWater = false;
                gameComplete = true;
                ySpeed = 0;
            }
        }else{
            if(peng.y - 200 > water.y){
                inWater = true;
                console.log('splash');
            }
            if(ySpeed < ySpeedMax){
                ySpeed += yAcc;
            }
        }
        
        iceberg1.y -= ySpeed;
        iceberg2.y -= ySpeed;
        iceberg1top.y -= ySpeed;
        iceberg2top.y -= ySpeed;
        water.y -= ySpeed;
        
        for (var i = 0; i < 10; i++) {
            bubble[i].y -= ySpeed;
            if(bubble[i].alive == true){
                if (checkOverlap(bubble[i], peng)){
                    //bubble[i].alive = false;
                    pop1.play();

                    ySpeed = bubblePopSpeed;
                    bubble[i].y = this.world.height + 30;
                    bubble[i].x = this.rnd.integerInRange(0, this.world.width);
                }
                if(bubble[i].y < -30){
                    bubble[i].y = this.world.height + 30;
                    bubble[i].x = this.rnd.integerInRange(0, this.world.width);
                }
            }
        }
        
    },

    update: function () { if(gamePause == false){
       if(this.input.activePointer.isDown) {
           if(gameStartable == true){
                if(gameComplete == false){
                    if(gameActive == false){
                        ySpeed = -40;
                        gameActive = true;
                    }
                    //gameActive = true;
            }
        }}
        if(gameActive == true){ 
            peng.x -= (peng.x - this.input.activePointer.x) / 10;
            this.gameLoop();
            if(peng.angle < 170){
                peng.angle += 6;
            }
        }
        
        
    }},
  
    startGame: function (){
        this.camera.fade('#006600');
        this.camera.onFadeComplete.add(this.fadeNext,this);
    },
    
};

    
}; GameCont();  //ENCAPSULATION FOR GLOBAL NAME SPACE POLUTION PREVENTION
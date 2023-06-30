var config = {
    type: Phaser.AUTO,
    width: 160,
    height: 308,
  backgroundColor: '#bdbdbd',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var gameStartXposition = 0;
var gameStartYposition = 30;
var i;
var j;
function preload ()
{

    this.load.image('box', '/imgs/box.png');
    this.load.image('stopback','/imgs/stopback.png' );
    this.load.image('bomb','/imgs/bomb.png');
    this.load.image('smileface','/imgs/smileface.png');
    this.load.image('settings','/imgs/settings.png');
    this.load.image('bombnum','/imgs/bombnum.png');
}

function create ()
{

this.add.image (110,0,'stopback').setOrigin(0, 0);
this.add.image (90,0,'bomb').setOrigin(0, 0);
this.add.image (70,0,'smileface').setOrigin(0, 0);
this.add.image (50,0,'settings').setOrigin(0, 0);
this.add.image (0,0,'bombnum').setOrigin(0, 0);



for(i=-0.65;i<17.25;i++)
{
for( j=0;j<10;j++)
{
this.add.image(j*16+gameStartXposition, i*16 + gameStartYposition, 'box').setOrigin(0, 0);
}
}

}

function update ()
{
}

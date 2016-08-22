/// <reference path="../../tsDefinitions/phaser.comments.d.ts" />
/// <reference path="./PlayState.ts" />

class MenuState extends Phaser.State
{
    static NAME: string = "Menu";

    create(): void
    {
        super.create();

        var nameLabel: Phaser.Text = this.game.add.text(80, 80, "My First Game", {font: "50px Arial", fill: "#FFFFFF"} );
        
        var startLabel: Phaser.Text = this.game.add.text(80, this.game.world.height - 80, 'press the "W" key to start', {font: '25px Arial', fill: '#FFFFFF' });

        var wkey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);

        wkey.onDown.addOnce(this.start, this);
    }

    start(): void
    {
        this.game.state.start(PlayState.NAME);
    }
}
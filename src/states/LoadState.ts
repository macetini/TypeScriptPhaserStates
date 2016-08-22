/// <reference path="../../tsDefinitions/phaser.comments.d.ts" />
/// <reference path="./MenuState.ts" />

class LoadState extends Phaser.State
{
    static NAME: string = "Load";

    preload():void
    {
        super.preload();

        var loadingLabel: Phaser.Text = this.game.add.text(80, 150, "loading...", {font: "30px Courier", fill: "#FFFFFF"});

        this.game.load.image("player", "assets/player.png");
        this.game.load.image("win", "assets/win.png");
    }

    create():void
    {
        super.create();

        this.game.state.start(MenuState.NAME);
    }
}
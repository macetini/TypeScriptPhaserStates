/// <reference path="../../tsDefinitions/phaser.comments.d.ts" />
/// <reference path="./LoadState.ts" />

class BootState extends Phaser.State
{
    static NAME: string = "Boot";

    create():void
    {
        super.create();

        this.game.state.start(LoadState.NAME);
    }
}
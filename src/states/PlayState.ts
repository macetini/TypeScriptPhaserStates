/// <reference path="../../tsDefinitions/phaser.comments.d.ts" />

class PlayState extends Phaser.State
{
    static NAME: string = "Play";

    private _keyboard: Phaser.Keyboard;
    private _player: Phaser.Sprite;
    private _win: Phaser.Sprite;

    create(): void
    {
        super.create();

        this._keyboard = this.game.input.keyboard;
        
        this._player = this.game.add.sprite(16, 16, 'player');
        this.game.physics.enable(this._player, Phaser.Physics.ARCADE);

        this._win = this.game.add.sprite(256, 256, 'win');
        this.game.physics.enable(this._win, Phaser.Physics.ARCADE);
    }
}
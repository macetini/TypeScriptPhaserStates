/// <reference path="../../tsDefinitions/phaser.comments.d.ts" />
class PlayState extends Phaser.State {
    create() {
        super.create();
        this._keyboard = this.game.input.keyboard;
        this._player = this.game.add.sprite(16, 16, 'player');
        this.game.physics.enable(this._player, Phaser.Physics.ARCADE);
        this._win = this.game.add.sprite(256, 256, 'win');
        this.game.physics.enable(this._win, Phaser.Physics.ARCADE);
    }
}
PlayState.NAME = "Play";
/// <reference path="../../tsDefinitions/phaser.comments.d.ts" />
/// <reference path="./PlayState.ts" />
class MenuState extends Phaser.State {
    create() {
        super.create();
        var nameLabel = this.game.add.text(80, 80, "My First Game", { font: "50px Arial", fill: "#FFFFFF" });
        var startLabel = this.game.add.text(80, this.game.world.height - 80, 'press the "W" key to start', { font: '25px Arial', fill: '#FFFFFF' });
        var wkey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
        wkey.onDown.addOnce(this.start, this);
    }
    start() {
        this.game.state.start(PlayState.NAME);
    }
}
MenuState.NAME = "Menu";
/// <reference path="../../tsDefinitions/phaser.comments.d.ts" />
/// <reference path="./MenuState.ts" />
class LoadState extends Phaser.State {
    preload() {
        super.preload();
        var loadingLabel = this.game.add.text(80, 150, "loading...", { font: "30px Courier", fill: "#FFFFFF" });
        this.game.load.image("player", "assets/player.png");
        this.game.load.image("win", "assets/win.png");
    }
    create() {
        super.create();
        this.game.state.start(MenuState.NAME);
    }
}
LoadState.NAME = "Load";
/// <reference path="../../tsDefinitions/phaser.comments.d.ts" />
/// <reference path="./LoadState.ts" />
class BootState extends Phaser.State {
    create() {
        super.create();
        this.game.state.start(LoadState.NAME);
    }
}
BootState.NAME = "Boot";
/// <reference path="../tsDefinitions/phaser.comments.d.ts" />
/// <reference path="states/BootState.ts" />
/// <reference path="states/LoadState.ts" />
/// <reference path="states/MenuState.ts" />
/// <reference path="states/PlayState.ts" />
class Game {
    constructor() {
        this._game = new Phaser.Game(480, 320, Phaser.AUTO, "content");
        this._game.state.add(BootState.NAME, new BootState());
        this._game.state.add(LoadState.NAME, new LoadState());
        this._game.state.add(MenuState.NAME, new MenuState());
        this._game.state.add(PlayState.NAME, new PlayState());
        this._game.state.start(BootState.NAME);
    }
}
window.onload = () => {
    var game = new Game();
};
//# sourceMappingURL=game.js.map
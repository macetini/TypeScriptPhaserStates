/// <reference path="../tsDefinitions/phaser.comments.d.ts" />
/// <reference path="states/BootState.ts" />
/// <reference path="states/LoadState.ts" />
/// <reference path="states/MenuState.ts" />
/// <reference path="states/PlayState.ts" />
/// <reference path="states/WinState.ts" />

class Game {

    private _game: Phaser.Game;

    constructor() {

        this._game = new Phaser.Game(480, 320, Phaser.AUTO, "content" );

        this._game.state.add(BootState.NAME, new BootState());
        this._game.state.add(LoadState.NAME, new LoadState());
        this._game.state.add(MenuState.NAME, new MenuState());
        this._game.state.add(PlayState.NAME, new PlayState());
        this._game.state.add(WinState.NAME, new WinState());
        
        this._game.state.start(BootState.NAME);
    }
}

window.onload = () => {

    var game = new Game();
}
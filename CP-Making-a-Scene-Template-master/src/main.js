// Code Practice: Making a Scene
// Name:
// Date: 

"use strict"

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    scene:[ MainMenu, Play ]
}

let game = new Phaser.Game(config)
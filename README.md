![IMAGE ERROR](https://n30n.netlify.app/background.png)

# NEON

### WELCOME TO NEON, AN (UNSURPRISINGLY) NEON PLATFORMER GAME

- It's actually very easy to play!
- It is a platformer.
- Use arrow keys to move.
- Press the up arrow key to jump.
- Don't touch lava.
- Press the X to exit.
- Collect all the coins to go to the next level.
- Supported devices: Chrome OS, MacOS, and Windows.
- Use the Enter key to scroll up and the shift key to scroll down in the level.

# PLAY THE GAME [HERE](https://n30n.netlify.app)

### AAAAAND if you want to fork it, it's very easy to change!

- You definitely need some JavaScript knowledge to change these settings!
- Honestly the only things you really need are physics settings and levels
- To add levels, just copy paste one of the arrays inside of the arrays inside of the `LEVELS` variable in ./game/main.js
- Here's a nice chart to show you what each char does:

| **SYMBOL** | **DESCRIPTION**                                                       |
| ---------- | --------------------------------------------------------------------- |
| `x`        | Wall                                                                  |
| `!`        | Lava                                                                  |
| `o`        | Coin                                                                  |
| `@`        | Spawn Point (if there are multiple, it will create that much players) |

- There are many things you can change about the physics, here are the basic variables you can change:

| **VARIABLE**   | **DESCRIPTION**                |
| -------------- | ------------------------------ |
| `jumpSpeed`    | Jump Speed                     |
| `gravity`      | Gravity                        |
| `playerXSpeed` | The player's horizontal speed. |
| `wobbleDist`   | Coin wobble distance           |
| `wobbleSpeed`  | Coin wobble speed              |
| `maxStep`      | Maximum acceleration speed     |

###### CREDITS TO KHAN ACADEMY FOR THE FRAMEWORK USED IN THIS GAME

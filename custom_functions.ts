function testBlock(block: number): boolean {
    let posBelowAgent = agent.getPosition().add(world(0, -1, 0))
    return blocks.testForBlock(block, posBelowAgent)
}

const wrong = () => {
    player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
    player.execute(`scoreboard players add @a correctBlocks -100`)
}


//% color="#0178D6" weight=100 icon="\uf20a" block="PlayerExtension"
namespace PlayerExtension {
    //% block="say something"
    export function playerSay() {
        if (!testBlock(SAND) && !testBlock(CLAY)) {
            player.execute(`say Not standing on sand or clay`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }
}


//% color="#D83B01" weight=100 icon="\uf20a" block="AgentExtension"
namespace AgentExtension {
    //% block="agent move forward (test)"
    export function agentMoveForward() {
        player.execute(`scoreboard players set @a level_timer 0`)
        player.execute(`scoreboard players add @a agent_moved 1`)
        loops.pause(100)
        agent.move(FORWARD, 1)
    }
    
    //% block="agent turn 360 degrees"
    export function agent360_ex2() {
        if (!testBlock(GRAVEL) && !testBlock(CRACKED_STONE_BRICKS)) {
            for (let i = 0; i < 4; i++) {
                agent.turn(RIGHT_TURN)
            }
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
        player.execute(`scoreboard players set @a level_timer 0`)
    }

    //% block="agent turn 360 degrees"
    export function agent360_ex4() {
        if (testBlock(SAND)) {
            for (let i = 0; i < 4; i++) {
                agent.turn(RIGHT_TURN)
            }
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
        player.execute(`scoreboard players set @a level_timer 0`)
    }
    
    //% block="agent turn 360 degrees"
    export function agent360_extra2() {
        if (testBlock(CLAY)) {
            for (let i = 0; i < 4; i++) {
                agent.turn(RIGHT_TURN)
            }
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
        player.execute(`scoreboard players set @a level_timer 0`)
    }
    
    //% block="agent turn left"
    export function agent_turn_left() {
        if (testBlock(GOLD_BLOCK)) {
            agent.turn(LEFT_TURN)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
        player.execute(`scoreboard players set @a level_timer 0`)
    }
    
    //% block="agent turn right"
    export function agent_turn_right() {
        if (testBlock(IRON_BLOCK)) {
            agent.turn(RIGHT_TURN)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
        player.execute(`scoreboard players set @a level_timer 0`)
    }
    
    //% block="agent turn right"
    export function agent_break_down() {
        if (testBlock(BLOCK_OF_QUARTZ)) {
            agent.destroy(DOWN)
            agent.move(DOWN, 1)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
        player.execute(`scoreboard players set @a level_timer 0`)
    }
}


//% color="#5B99A5" weight=100 icon="\uf20a" block="CodeCosmos"
namespace CodeCosmos {
    //% block="is block %block=block below agent"
    //% block.shadow=minecraftBlock
    export function testForBlock_belowAgent(block: number): boolean {
        let posBelowAgent = agent.getPosition().add(world(0, -1, 0))
        player.execute(`scoreboard players set @a level_timer 0`)
        return blocks.testForBlock(block, posBelowAgent)
    }

    //% block="place blue coral"
    export function placeCoralBlue() {
        if (testBlock(TUBE_CORAL_BLOCK)) {
            player.execute(`function levels/place/tube_coral`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }

    //% block="place sand and kelp"
    export function placeSandAndKelp() {
        if (!testBlock(TUBE_CORAL_BLOCK)) {
            player.execute(`execute @v ~ ~ ~ setblock ~ ~-1 ~ sand`)
            player.execute(`function levels/place/kelp`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }

    //% block="place sea pickle"
    export function placeSeaPickle() {
        if (testBlock(GRAVEL)) {
            player.execute(`function levels/place/sea_pickle`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }
    
    //% block="place seagrass"
    export function placeSeagrass() {
        if (testBlock(CRACKED_STONE_BRICKS)) {
            player.execute(`function levels/place/seagrass`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }
    
    //% block="spawn squid"
    export function spawnSquid() {
        if (testBlock(SAND)) {
            player.execute(`execute @v ~ ~1 ~ summon squid`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }

    //% block="spawn fish"
    export function spawnFish() {
        if (testBlock(CLAY)) {
            player.execute(`execute @v ~ ~1 ~ summon tropicalfish`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }

    //% block="spawn dolphin"
    export function spawnDolphin() {
        if (testBlock(RED_TERRACOTTA)) {
            player.execute(`execute @v ~ ~1 ~ summon dolphin`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }

    //% block="spawn axolotl"
    export function spawnAxolotl() {
        if (!testBlock(RED_TERRACOTTA) && !testBlock(SAND)) {
            player.execute(`execute @v ~ ~1 ~ summon axolotl`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }

    //% block="place purple coral"
    export function placeCoralPurple() {
        if (testBlock(BUBBLE_CORAL_BLOCK)) {
            player.execute(`function levels/place/bubble_coral`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }
    
    //% block="spawn turtle"
    export function spawnTurtle() {
        if (!testBlock(GOLD_BLOCK) && !testBlock(IRON_BLOCK)) {
            player.execute(`execute @v ~ ~1 ~ summon turtle`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }
}
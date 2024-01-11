let blockBelowAgent = agent.getPosition().add(world(0, -1, 0))

const wrong = () => {
    player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
    player.execute(`scoreboard players add @a correctBlocks -100`)
}

//% color="#0178D6" weight=100 icon="\uf20a" block="PlayerExtension"
namespace PlayerExtension {
    //% block="say something"
    export function playerSay() {
        if (!blocks.testForBlock(SAND, blockBelowAgent) && !blocks.testForBlock(CLAY, blockBelowAgent)) {
            player.execute(`say Not standing on sand or clay`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }
}


//% color="#D83B01" weight=100 icon="\uf20a" block="AgentExtension"
namespace AgentExtension {
    //% block="agent move forward"
    export function agentMoveForward() {
        player.execute(`scoreboard players set @a level_timer 0`)
        player.execute(`scoreboard players add @a agent_moved 1`)
        agent.move(FORWARD, 1)
    }
    
    //% block="agent turns 360 degrees"
    export function agent360_ex2() {
        if (!blocks.testForBlock(FIRE_CORAL_BLOCK, blockBelowAgent) && !blocks.testForBlock(HORN_CORAL_BLOCK, blockBelowAgent)) {
            for (let i = 0; i < 4; i++) {
                agent.turn(RIGHT_TURN)
            }
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
        player.execute(`scoreboard players set @a level_timer 0`)
    }

    //% block="agent turns 360 degrees"
    export function agent360_ex4() {
        if (!blocks.testForBlock(RED_TERRACOTTA, blockBelowAgent) && !blocks.testForBlock(SAND, blockBelowAgent)) {
            for (let i = 0; i < 4; i++) {
                agent.turn(RIGHT_TURN)
            }
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
        player.execute(`scoreboard players set @a level_timer 0`)
    }
}


//% color=190 weight=100 icon="\uf20a" block="CodeCosmos"
namespace CodeCosmos {
    //% block="is block %block=block below agent"
    //% block.shadow=minecraftBlock
    export function testForBlock_belowAgent(block: number): boolean {
        player.execute(`scoreboard players set @a level_timer 0`)
        return blocks.testForBlock(block, blockBelowAgent)
    }

    //% block="place blue coral"
    export function placeCoralBlue() {
        if (blocks.testForBlock(TUBE_CORAL_BLOCK, blockBelowAgent)) {
            player.execute(`execute @v ~ ~ ~ setblock ~ ~ ~ tube_coral`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }

    //% block="place sand"
    export function placeSand() {
        if (!blocks.testForBlock(TUBE_CORAL_BLOCK, blockBelowAgent)) {
            player.execute(`execute @v ~ ~ ~ setblock ~ ~-1 ~ sand`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }


    //% block="place red coral"
    export function placeCoralRed() {
        if (blocks.testForBlock(FIRE_CORAL_BLOCK, blockBelowAgent)) {
            player.execute(`execute @v ~ ~ ~ setblock ~ ~ ~ fire_coral`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }
    
    //% block="place yellow coral"
    export function placeCoralYellow() {
        if (blocks.testForBlock(HORN_CORAL_BLOCK, blockBelowAgent)) {
            player.execute(`execute @v ~ ~ ~ setblock ~ ~ ~ horn_coral`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }
    
    
    //% block="spawn squid"
    export function spawnSquid() {
        if (blocks.testForBlock(SAND, blockBelowAgent)) {
            player.execute(`execute @v ~ ~1 ~ summon squid`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }

    //% block="spawn fish"
    export function spawnFish() {
        if (blocks.testForBlock(CLAY, blockBelowAgent)) {
            player.execute(`execute @v ~ ~1 ~ summon tropicalfish`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }

    player.say("kek")


    //% block="spawn dolphin"
    export function spawnDolphin() {
        if (blocks.testForBlock(RED_TERRACOTTA, blockBelowAgent)) {
            player.execute(`execute @v ~ ~1 ~ summon dolphin`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }
    //% block="spawn axolotl"
    export function spawnAxolotl() {
        if (!blocks.testForBlock(RED_TERRACOTTA, blockBelowAgent) && !blocks.testForBlock(SAND, blockBelowAgent)) {
            player.execute(`execute @v ~ ~1 ~ summon axolotl`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }
}
const wrong = () => {
    player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
    player.execute(`scoreboard players add @a correctBlocks -100`)
}

//% color="#0178D6" weight=100 icon="\uf20a" block="PlayerExtension"
namespace PlayerExtension {
    //% block="say something"
    export function playerSay() {
        let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (!blocks.testForBlock(SAND, posBelowAgent) && !blocks.testForBlock(CLAY, posBelowAgent)) {
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
    
    //% block="agent turn 360 degrees"
    export function agent360_ex2() {
        let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (!blocks.testForBlock(FIRE_CORAL_BLOCK, posBelowAgent) && !blocks.testForBlock(HORN_CORAL_BLOCK, posBelowAgent)) {
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
        let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (!blocks.testForBlock(RED_TERRACOTTA, posBelowAgent) && !blocks.testForBlock(SAND, posBelowAgent)) {
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
        let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(GOLD_BLOCK, posBelowAgent)) {
            agent.turn(LEFT_TURN)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
        player.execute(`scoreboard players set @a level_timer 0`)
    }
    
    //% block="agent turn right"
    export function agent_turn_right() {
        let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(IRON_BLOCK, posBelowAgent)) {
            agent.turn(RIGHT_TURN)
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
        let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        player.execute(`scoreboard players set @a level_timer 0`)
        return blocks.testForBlock(block, posBelowAgent)
    }

    //% block="place blue coral"
    export function placeCoralBlue() {
        let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(TUBE_CORAL_BLOCK, posBelowAgent)) {
            player.execute(`execute @v ~ ~ ~ setblock ~ ~ ~ tube_coral`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }

    //% block="place sand"
    export function placeSand() {
        let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (!blocks.testForBlock(TUBE_CORAL_BLOCK, posBelowAgent)) {
            player.execute(`execute @v ~ ~ ~ setblock ~ ~-1 ~ sand`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }


    //% block="place red coral"
    export function placeCoralRed() {
        let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(FIRE_CORAL_BLOCK, posBelowAgent)) {
            player.execute(`execute @v ~ ~ ~ setblock ~ ~ ~ fire_coral`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }
    
    //% block="place yellow coral"
    export function placeCoralYellow() {
        let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(HORN_CORAL_BLOCK, posBelowAgent)) {
            player.execute(`execute @v ~ ~ ~ setblock ~ ~ ~ horn_coral`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }
    
    
    //% block="spawn squid"
    export function spawnSquid() {
        let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(SAND, posBelowAgent)) {
            player.execute(`execute @v ~ ~1 ~ summon squid`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }

    //% block="spawn fish"
    export function spawnFish() {
        let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(CLAY, posBelowAgent)) {
            player.execute(`execute @v ~ ~1 ~ summon tropicalfish`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }

    //% block="spawn dolphin"
    export function spawnDolphin() {
        let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(RED_TERRACOTTA, posBelowAgent)) {
            player.execute(`execute @v ~ ~1 ~ summon dolphin`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }
    //% block="spawn axolotl"
    export function spawnAxolotl() {
        let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (!blocks.testForBlock(RED_TERRACOTTA, posBelowAgent) && !blocks.testForBlock(SAND, posBelowAgent)) {
            player.execute(`execute @v ~ ~1 ~ summon axolotl`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }

    //% block="place purple coral"
    export function placeCoralPurple() {
        let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(BUBBLE_CORAL_BLOCK, posBelowAgent)) {
            player.execute(`execute @v ~ ~ ~ setblock ~ ~ ~ bubble_coral`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }
    
    //% block="spawn turtle"
    export function spawnTurtle() {
        let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (!blocks.testForBlock(GOLD_BLOCK, posBelowAgent) && !blocks.testForBlock(IRON_BLOCK, posBelowAgent)) {
            player.execute(`execute @v ~ ~1 ~ summon turtle`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }
}
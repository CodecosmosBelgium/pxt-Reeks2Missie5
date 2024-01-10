//% color="#D83B01" weight=100 icon="\uf20a" block="AgentExtension"
namespace AgentExtension {
    //% block="agent move forward"
    export function agentMoveForward() {
        player.execute(`scoreboard players set @a level_timer 0`)
        player.execute(`scoreboard players add @a agent_moved 1`)
        agent.move(FORWARD, 1)
    }

    //% block="agent turns 360 degrees"
    export function agent360() {
        player.execute(`scoreboard players set @a level_timer 0`)
        for (let i = 0; i < 4; i++) {
            agent.turn(RIGHT_TURN)
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
        return blocks.testForBlock(block, agent.getPosition().add(world(0, -1, 0)))
    }

    //% block="place blue coral"
    export function placeCoralBlue() {
        player.execute(`execute @v ~ ~ ~ setblock ~ ~ ~ tube_coral`)
    }

    //% block="place yellow coral"
    export function placeCoralYellow() {
        player.execute(`execute @v ~ ~ ~ setblock ~ ~ ~ horn_coral`)
    }
    //% block="place red coral"
    export function placeCoralRed() {
        player.execute(`execute @v ~ ~ ~ setblock ~ ~ ~ fire_coral`)
    }
    //% block="place sand"
    export function placeSand() {
        player.execute(`execute @v ~ ~ ~ setblock ~ ~-1 ~ sand`)
    }
    
    //% block="spawn squid"
    export function spawnSquid() {
        player.execute(`execute @v ~ ~ ~ summon squid`)
    }
    //% block="spawn fish"
    export function spawnFish() {
        player.execute(`execute @v ~ ~ ~ summon tropicalfish`)
    }
    //% block="spawn dolphin"
    export function spawnDolphin() {
        player.execute(`execute @v ~ ~ ~ summon tropicaldolphin`)
    }
    //% block="spawn axolotl"
    export function spawnAxolotl() {
        player.execute(`execute @v ~ ~ ~ summon tropicalaxolotl`)
    }
}
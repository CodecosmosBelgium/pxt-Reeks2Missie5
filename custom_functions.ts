//% color="#D83B01" weight=100 icon="\uf20a" block="AgentExtension"
namespace AgentExtension {
    //% block="agent move forward"
    export function agentMoveForward() {
        player.execute(`scoreboard players set @a level_timer 0`)
        player.execute(`scoreboard players add @a agent_moved 1`)
        agent.move(FORWARD, 1)
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

    
    //% block="place coral"
    export function placeCoral() {
        player.execute(`scoreboard players set @a level_timer 0`)
        player.execute(`execute at @v run setblock ~ ~ ~ tube_coral`)
    }
    //% block="place sand"
    export function placeSand() {
        player.execute(`scoreboard players set @a level_timer 0`)
        player.execute(`execute at @v run setblock ~ ~-1 ~ sand`)
    }


}
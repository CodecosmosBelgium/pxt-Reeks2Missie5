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
    //% block="is blok %block=block onder agent"
    export function testForBlock_belowAgent(block: number): boolean {
        player.execute(`scoreboard players set @a level_timer 0`)
        return blocks.testForBlock(block, agent.getPosition().add(world(0, -1, 0)))
    }
}
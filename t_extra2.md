### @hideIteration true
### @flyoutOnly true
# Mission 5

```blocks
player.onChat("extraLevel2", function () {
    for (let index = 0; index < 12; index++) {
        AgentExtension.agentMoveForward()
        if (CodeCosmos.testForBlock_belowAgent(CLAY)) {
            AgentExtension.agent360_extra2()
        } else if (CodeCosmos.testForBlock_belowAgent(GOLD_BLOCK)) {
            AgentExtension.agent_turn_left()
        } else if (CodeCosmos.testForBlock_belowAgent(IRON_BLOCK)) {
            AgentExtension.agent_turn_right()
        } else if (CodeCosmos.testForBlock_belowAgent(BLOCK_OF_QUARTZ)) {
            AgentExtension.agent_break_down()
        } else {
            CodeCosmos.spawnTurtle()
        }
    }
})
```

```template
player.onChat("extraLevel2", function () {
    
})
```

## Multiple Selection
Use the learning platform to solve the exercise.
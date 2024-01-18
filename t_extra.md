### @hideIteration true
### @flyoutOnly true
# Mission 5

```blocks
player.onChat("extraLevel1", function () {
    for (let index = 0; index < 12; index++) {
        AgentExtension.agentMoveForward()
        if (CodeCosmos.testForBlock_belowAgent(BUBBLE_CORAL_BLOCK)) {
            CodeCosmos.placeCoralPurple()
        } else if (CodeCosmos.testForBlock_belowAgent(GOLD_BLOCK)) {
            AgentExtension.agent_turn_left()
        } else if (CodeCosmos.testForBlock_belowAgent(IRON_BLOCK)) {
            AgentExtension.agent_turn_right()
        } else {
            CodeCosmos.spawnTurtle()
        }
    }
})
```

```template
player.onChat("extraLevel1", function () {
    
})
```

## Multiple Selection
Use the learning platform to solve the exercise.
IF the Agent steps on a purple coral block (Bubble Coral Block), then he places a purple coral. ELSE IF he steps on a gold block, then the Agent turns left. ELSE IF he steps on an iron block, THEN the Agent turns right. ELSE he spawns a turtle.
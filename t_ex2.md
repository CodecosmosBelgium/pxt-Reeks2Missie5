### @hideIteration true
### @flyoutOnly true
# Mission 5

```blocks
player.onChat("level2", function () {
    for (let index = 0; index < 8; index++) {
        AgentExtension.agentMoveForward()
        if (CodeCosmos.testForBlock_belowAgent(GRAVEL)) {
            CodeCosmos.placeSeaPickle()
        } else if (CodeCosmos.testForBlock_belowAgent(CRACKED_STONE_BRICKS)) {
            CodeCosmos.placeSeagrass()
        } else {
            AgentExtension.agent360_ex2()
        }
    }
})
```

```template
player.onChat("level2", function () {
    
})
```

## Multiple Selection
Use the learning platform to solve the exercise.
IF the Agent steps on gravel, THEN he places a sea pickle. ELSE IF he steps on a cracked stone brick, THEN he places seagrass. ELSE the Agent spins around one time.
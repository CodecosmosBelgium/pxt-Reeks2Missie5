### @hideIteration true
### @flyoutOnly true
# Mission 5

```blocks
player.onChat("level2", function () {
    for (let index = 0; index < 8; index++) {
        AgentExtension.agentMoveForward()
        if (CodeCosmos.testForBlock_belowAgent(FIRE_CORAL_BLOCK)) {
            CodeCosmos.placeCoralRed()
        } else if (CodeCosmos.testForBlock_belowAgent(HORN_CORAL_BLOCK)) {
            CodeCosmos.placeCoralYellow()
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
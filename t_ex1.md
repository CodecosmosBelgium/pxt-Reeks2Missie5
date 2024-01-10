### @hideIteration true
### @flyoutOnly true
# Mission 5

```blocks
player.onChat("level1", function () {
    for (let index = 0; index < 6; index++) {
        AgentExtension.agentMoveForward()
        if (CodeCosmos.testForBlock_belowAgent(TUBE_CORAL_BLOCK)) {
            CodeCosmos.placeCoralBlue()
        } else {
            CodeCosmos.placeSand()
        }
    }
})
```

```template
player.onChat("level1", function () {
    
})
```

## Multiple Selection
Use the learning platform to solve the exercise.
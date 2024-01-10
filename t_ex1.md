### @hideIteration true
### @flyoutOnly true
# Mission 5

```blocks
player.onChat("level1", function () {
    AgentExtension.agentMoveForward()
    for (let index = 0; index < 4; index++) {
        if (CodeCosmos.testForBlock_belowAgent(GRASS) || CodeCosmos.testForBlock_belowAgent(DIRT)) {
            CodeCosmos.placeSand()
            CodeCosmos.placeCoralBlue()
        }
    }
})
```

```template
player.onChat("level1", function () {
    AgentExtension.agentMoveForward()
    for (let index = 0; index < 4; index++) {
        if (CodeCosmos.testForBlock_belowAgent(GRASS) || CodeCosmos.testForBlock_belowAgent(DIRT)) {
            CodeCosmos.placeSand()
            CodeCosmos.placeCoralBlue()
        }
    }
})
```

## Multiple Selection
Use the learning platform to solve the exercise.
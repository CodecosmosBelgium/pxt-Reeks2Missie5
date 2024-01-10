### @hideIteration true
### @flyoutOnly true
# Mission 5

```blocks
player.onChat("level2", function () {
    
})
```

```template
player.onChat("level2", function () {
    AgentExtension.agentMoveForward()
    for (let index = 0; index < 4; index++) {
        if (CodeCosmos.testForBlock_belowAgent(GRASS) || CodeCosmos.testForBlock_belowAgent(DIRT)) {
            AgentExtension.agent360()
            CodeCosmos.placeCoralBlue()
            CodeCosmos.placeCoralYellow()
            CodeCosmos.placeCoralRed()
            CodeCosmos.placeSand()
            CodeCosmos.spawnSquid()
            CodeCosmos.spawnFish()
            CodeCosmos.spawnDolphin()
            CodeCosmos.spawnAxolotl()
        }
    }
})
```

## Multiple Selection
Use the learning platform to solve the exercise.
### @hideIteration true
### @flyoutOnly true
# Mission 5

```blocks
player.onChat("level3", function () {
    for (let index = 0; index < 8; index++) {
        AgentExtension.agentMoveForward()
        if (CodeCosmos.testForBlock_belowAgent(SAND)) {
            CodeCosmos.spawnSquid()
        } else if (CodeCosmos.testForBlock_belowAgent(CLAY)) {
            CodeCosmos.spawnFish()
        } else {
            PlayerExtension.playerSay()
        }
    }
})
```

```template
player.onChat("level3", function () {
    
})
```

## Multiple Selection
Use the learning platform to solve the exercise.
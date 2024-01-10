### @hideIteration true
### @flyoutOnly true
# Mission 5

```blocks
player.onChat("level1", function () {
    for (let index = 0; index < 4; index++) {
        if (Codecosmos.testForBlock_belowAgent(GRASS) || Codecosmos.testForBlock_belowAgent(DIRT)) {
            AgentExtension.agentMoveForward()
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
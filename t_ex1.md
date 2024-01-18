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
            CodeCosmos.placeSandAndKelp()
        }
    }
})
```

```template
player.onChat("level1", function () {
    for (let index = 0; index < 6; index++) {
        AgentExtension.agentMoveForward()
        
    }
})
```

## Multiple Selection
Use the learning platform to solve the exercise.
IF the Agent steps on a blue coral block (Tube Coral Block), THEN he places a blue coral. ELSE he replaces the block with sand and places kelp.
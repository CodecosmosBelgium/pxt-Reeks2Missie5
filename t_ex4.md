### @hideIteration true
### @flyoutOnly true
# Mission 5

```blocks
player.onChat("level4", function () {
    for (let index = 0; index < 10; index++) {
        AgentExtension.agentMoveForward()
        if (CodeCosmos.testForBlock_belowAgent(RED_TERRACOTTA)) {
            CodeCosmos.spawnDolphin()
        } else if (CodeCosmos.testForBlock_belowAgent(SAND)) {
            AgentExtension.agent360_ex4()
        } else {
            CodeCosmos.spawnAxolotl()
        }
    }
})
```

```template
player.onChat("level4", function () {
    
})
```

## Multiple Selection
Use the learning platform to solve the exercise.
IF the Agent steps on a block of red terracotta, THEN he spawns a dolphin. ELSE IF he steps on a block of sand, he spins around one time. ELSE he spawns an axolotl.
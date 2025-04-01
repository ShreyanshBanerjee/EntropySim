# A Visual Entropy Simulation
## What is Entropy:
Entropy is a crucial force that powers all life. Without it, everything in this universe - from stars to planets to life - couldn't form.
But what really is entropy? Most people may know it as the force which increases disorder over time. However, practically, this doesn't make sense in many cases.
Take a cup of hot water. Given enough time, heat would spread out, eventually causing all the heat to be equal in the area, however this arragement of heat would be most orderly, correct?
Furthermore, entropy isn't even a force at all; there is no action physically compelling objects to arrange themselves equally. Then how can it be explained?
Simply put, entropy is a statistical property of randomly-moving objects to scatter out over time. And entropy is everywhere. Osmosis, the process used to maintain the balance of water in one's cells,
is simply entropy applied within life. Same with the diffusion of heat or scents in a room; it all ties back to entropy. When talking about particles, entropy is specifically caused by Brownian motion;
as thousands of particles collide with eachother, their movement is so chaotic that it appears to be random.

## Basic Overview of Simulation:
This project is a simulation of how, via random walks, objects distribute themselves equally in a space given enough time.
The simulation is rendered via a 2d grid. Each square starts off completely white, representing an absence of heat.
Clicks or holding and dragging the mouse adds heat to a specific grid, increasing the color until it becomes completely red.
Once you are satisfied with the intial setup of the simulation, you can run it with the `Start` button or only progress it one step with the `Tick` button.
Statistics about the simulation, such as amount of heat cells and ticks elapsed, are displayed at the bottom of the screen.

## For Programmers
If one knows about the basics of Javascript, the simulation can be further tuned. For example, for controlling the speed of which particles move at, one can change the `heat_transfer_prob`
variable located within the Env object. The size of the environment can also be changed in the `Env` object. This can be used to finetune the simulation for more specific environmental conditions
for observing specific effects.

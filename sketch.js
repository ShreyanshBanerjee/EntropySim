class Heat {
  constructor(x, y, maxX, maxY) {
    this.x = x;
    this.y = y;
    this.maxX = maxX;
    this.maxY = maxY;
  }
  
  move() {
    let directions = [];
    if (this.x > 0) {
      directions.push([-2, 0]);
    }
    if (this.x < this.maxX) {
      directions.push([ 2, 0]);
    }
    if (this.y > 0) {
      directions.push([ 0,-2]);
    }
    if (this.y < this.maxY) {
      directions.push([ 0, 2]);
    }
    
    let action = directions[Math.floor(random() * directions.length)];
    this.x += action[0];
    this.y += action[1];
  }
}

const Env = {
  grid_side_count: 16,
  cell_size: 400 / 16,
  heat_transfer_prob: 0.25,
  elapsed_ticks: 0,
  heats: [],
};

function buildHeatMap() {
  let heatMap = [];
  
  for (let i=0; i<Env.grid_side_count; i++) {
    let c_row = [];
    for (let j=0; j<Env.grid_side_count; j++) {
      c_row.push(0);
    }
    heatMap.push(c_row);
  }
  
  for (let i=0; i<Env.heats.length; i++) {
    let c_heat = Env.heats[i];
    heatMap[c_heat.x][c_heat.y]++;
  }
  
  return heatMap;
}

function render() {
      
  let heatmap = buildHeatMap();
  
  for (let i=0; i<heatmap.length; i++) {
    for (let j=0; j<heatmap.length; j++) {
      let x = heatmap[i][j] * 20;
      fill(250, -0.019 * x * x -0.65 * x +255, 250- 2.5 * x);
      rect(j * Env.cell_size, i * Env.cell_size, Env.cell_size, Env.cell_size);
    }
  }
}

function tick() {
  for (let i=0; i<Env.heats.length; i++) {
    if (Math.random() < Env.heat_transfer_prob) {
      Env.heats[i].move();
    }
  }
  Env.elapsed_ticks++;
}

let running = false;
function run() {
  running = !running;
  if (running) {
    runbtn.html('Stop');
  } else {
    runbtn.html('Run');
  }
}

let stepped = true;
function step() {
  stepped = false;
}

function reset() {
  stepped = true;
  if (running) {
    run();
  }
  Env.heats = [];
  Env.elapsed_ticks = 0;
}

function setup() {
  createCanvas(400, 500);
  background(225);
  fill(200);
  rect(0, 400, 500, 100);
  
  runbtn = createButton('Run');
  runbtn.position(275, 410);
  runbtn.mousePressed(run);
  
  stepbtn = createButton('Step');
  stepbtn.position(175, 410);
  stepbtn.mousePressed(step);
  
  resetbtn = createButton('Reset');
  resetbtn.position(75, 410);
  resetbtn.mousePressed(reset);
  
  textSize(16);  // Set text size
  textAlign(CENTER, CENTER);  // Align text to center
}

function mousePressed() {
  if (mouseX < 400 && mouseY < 400 && mouseY > 0 && mouseX > 0) {
    Env.heats.push(
      new Heat(Math.floor(mouseY / Env.cell_size), Math.floor(mouseX / Env.cell_size), Env.grid_side_count-1, Env.grid_side_count-1)
    );
  }
}
function draw() {
  fill(200);
  rect(0, 400, 550, 100);
  render();
  if (mouseIsPressed && mouseX < 400 && mouseY < 400 && mouseY > 0 && mouseX > 0) {
    Env.heats.push(
      new Heat(Math.floor(mouseY / Env.cell_size), Math.floor(mouseX / Env.cell_size), Env.grid_side_count-1, Env.grid_side_count-1)
    );
  }
  
  if (running) {
    tick();
  }
  if (!stepped) {
    tick();
    stepped = true;
  }
  
  fill(0);
  text("Heat cells: "+Env.heats.length, 125,450);
  text("Elapsed Ticks: "+Env.elapsed_ticks, 275, 450);
  let rightCells = 0;
  let leftCells = 0;
  for (let i=0; i<Env.heats.length; i++) {
    if (Env.heats[i].y > 7) {
      rightCells++;
    } else {
      leftCells++;
    }
  }
  
  text("Left Side Cells: "+leftCells, 125, 470);
  text("Right Side Cells: "+rightCells, 275, 470);
}


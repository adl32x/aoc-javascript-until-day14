const testInput = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;

const input = `8624818384
3725473343
6618341827
4573826616
8357322142
6846358317
7286886112
8138685117
6161124267
3848415383`;

// const data = testInput;
const data = input;

class Octopus {
  constructor(number) {
    this.number = number;
    this.flashed = false;
  }

  toString() {
    return `${this.number}`;
  }

  increase(grid, x, y) {
    if (this.flashed) return;

    this.number += 1;
    if (this.number > 9) {
      this.flashed = true;
      this.number = 0;

      grid[y - 1]?.[x]?.increase(grid, x, y - 1);
      grid[y + 1]?.[x]?.increase(grid, x, y + 1);
      grid[y]?.[x - 1]?.increase(grid, x - 1, y);
      grid[y]?.[x + 1]?.increase(grid, x + 1, y);

      grid[y - 1]?.[x - 1]?.increase(grid, x - 1, y - 1);
      grid[y + 1]?.[x - 1]?.increase(grid, x - 1, y + 1);
      grid[y - 1]?.[x + 1]?.increase(grid, x + 1, y - 1);
      grid[y + 1]?.[x + 1]?.increase(grid, x + 1, y + 1);
    }
  }

  reset() {
    this.flashed = false;
  }
}

const octopusGrid = data
  .split("\n")
  .map((row) => row.split("").map((x) => new Octopus(parseInt(x))));

const height = octopusGrid.length;
const width = octopusGrid[0].length;
const nOctopi = height * width;

let step = 0;
let flashCount = 0;
let lastFlashCount = 0;

while (true) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      octopusGrid[y][x].increase(octopusGrid, x, y);
    }
  }

  lastFlashCount = octopusGrid.flat(2).filter((o) => o.flashed).length;
  flashCount += lastFlashCount;
  octopusGrid.flat().map((o) => o.reset());
  step++;

  if (step === 100) {
    console.log("Part 1:", flashCount);
  }

  if (lastFlashCount === nOctopi) {
    console.log("Part 2:", step);
    return;
  }
}

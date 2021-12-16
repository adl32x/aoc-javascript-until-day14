const testInput = [3, 4, 3, 1, 2];
const input = [
  1, 4, 2, 4, 5, 3, 5, 2, 2, 5, 2, 1, 2, 4, 5, 2, 3, 5, 4, 3, 3, 1, 2, 3, 2, 1,
  4, 4, 2, 1, 1, 4, 1, 4, 4, 4, 1, 4, 2, 4, 3, 3, 3, 3, 1, 1, 5, 4, 2, 5, 2, 4,
  2, 2, 3, 1, 2, 5, 2, 4, 1, 5, 3, 5, 1, 4, 5, 3, 1, 4, 5, 2, 4, 5, 3, 1, 2, 5,
  1, 2, 2, 1, 5, 5, 1, 1, 1, 4, 2, 5, 4, 3, 3, 1, 3, 4, 1, 1, 2, 2, 2, 5, 4, 4,
  3, 2, 1, 1, 1, 1, 2, 5, 1, 3, 2, 1, 4, 4, 2, 1, 4, 5, 2, 5, 5, 3, 3, 1, 3, 2,
  2, 3, 4, 1, 3, 1, 5, 4, 2, 5, 2, 4, 1, 5, 1, 4, 5, 1, 2, 4, 4, 1, 4, 1, 4, 4,
  2, 2, 5, 4, 1, 3, 1, 3, 3, 1, 5, 1, 5, 5, 5, 1, 3, 1, 2, 1, 4, 5, 4, 4, 1, 3,
  3, 1, 4, 1, 2, 1, 3, 2, 1, 5, 5, 3, 3, 1, 3, 5, 1, 5, 3, 5, 3, 1, 1, 1, 1, 4,
  4, 3, 5, 5, 1, 1, 2, 2, 5, 5, 3, 2, 5, 2, 3, 4, 4, 1, 1, 2, 2, 4, 3, 5, 5, 1,
  1, 5, 4, 3, 1, 3, 1, 2, 4, 4, 4, 4, 1, 4, 3, 4, 1, 3, 5, 5, 5, 1, 3, 5, 4, 3,
  1, 3, 5, 4, 4, 3, 4, 2, 1, 1, 3, 1, 1, 2, 4, 1, 4, 1, 1, 1, 5, 5, 1, 3, 4, 1,
  1, 5, 4, 4, 2, 2, 1, 3, 4, 4, 2, 2, 2, 3,
];

//let array = testInput;
let array = input;

/*
let newSpawn = []
let day = 0
while (day < 80 ) {
  // console.log(array.join(','))
  for (let i = 0; i < array.length; i++) {    
    if (array[i] == 0) {
      array[i] = 6
      newSpawn.push(8)
    } else {
      array[i] -= 1
    }
  }
  day++
  array = array.concat(newSpawn)
  newSpawn = []
}
*/

let day = 0;
let fish = [0, 0, 0, 0, 0, 0, 0, 0, 0];
array.map((n) => fish[n]++);

while (day <= 256) {
  console.log(day, fish.join(','), fish.reduce((a, b) => a + b));
  fish = [
    fish[1],
    fish[2],
    fish[3],
    fish[4],
    fish[5],
    fish[6],
    fish[7] + fish[0],
    fish[8],
    fish[0],
  ];
  day++;
}


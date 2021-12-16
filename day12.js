const testInput = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;

const testInput2 = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`

const input = `ax-end
xq-GF
end-xq
im-wg
ax-ie
start-ws
ie-ws
CV-start
ng-wg
ng-ie
GF-ng
ng-av
CV-end
ie-GF
CV-ie
im-xq
start-GF
GF-ws
wg-LY
CV-ws
im-CV
CV-wg`

function isSmallCave(str) {
  return str === str.toLowerCase();
}

// const data = testInput;
const data = input;

const pathsArray = data.split("\n").map((r) => r.split("-"));
const paths = {};

pathsArray.map(([a, b]) => {
  if (paths[a]) {
    paths[a].push(b);
  } else {
    paths[a] = [b];
  }

  if (paths[b]) {
    paths[b].push(a);
  } else {
    paths[b] = [a];
  }
});

/**
 * @param {string} cave 
 * @param {array} visited
 */
let count = 0;
function traverse(cave, visited) {
  if (cave === 'end') {
    count++;
    return
  }

  if (isSmallCave(cave) && visited.includes(cave)) {
    return null;
  }
  paths[cave].map(c => traverse(c, [...visited, cave]))
}

function visitedSmallCaveMaxOnce(arr) {
  const duplicates = arr.filter(c => isSmallCave(c)).filter((e, i, a) => a.indexOf(e) !== i)
  return duplicates.length <= 1
}

/**
 * @param {string} cave 
 * @param {array} visited
 */
function traverse2(cave, visited) {
  if (cave === 'end') {
    count++;
    return
  }

  if (cave === 'start' && visited.length > 0) {
    return;
  }

  if (isSmallCave(cave) && !visitedSmallCaveMaxOnce([...visited, cave])) {
    return null;
  }

  paths[cave].map(c => traverse2(c, [...visited, cave]))
}

traverse('start', [])
console.log('Part 1:', count)
count = 0;
traverse2('start', [])
console.log('Part 2:', count)
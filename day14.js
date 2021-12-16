const testInput = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`;

const input = `OHFNNCKCVOBHSSHONBNF

SV -> O
KP -> H
FP -> B
VP -> V
KN -> S
KS -> O
SB -> K
BS -> K
OF -> O
ON -> S
VS -> F
CK -> C
FB -> K
CH -> K
HS -> H
PO -> F
NP -> N
FH -> C
FO -> O
FF -> C
CO -> K
NB -> V
PP -> S
BB -> N
HH -> B
KK -> H
OP -> K
OS -> V
KV -> F
VH -> F
OB -> S
CN -> H
SF -> K
SN -> P
NF -> H
HB -> V
VC -> S
PS -> P
NK -> B
CV -> P
BC -> S
NH -> K
FN -> P
SH -> F
FK -> P
CS -> O
VV -> H
OC -> F
CC -> N
HK -> N
FS -> P
VF -> B
SS -> V
PV -> V
BF -> V
OV -> C
HO -> F
NC -> F
BN -> F
HC -> N
KO -> P
KH -> F
BV -> S
SK -> F
SC -> F
VN -> V
VB -> V
BH -> O
CP -> K
PK -> K
PB -> K
FV -> S
HN -> K
PH -> B
VK -> B
PC -> H
BO -> H
SP -> V
NS -> B
OH -> N
KC -> H
HV -> F
HF -> B
HP -> S
CB -> P
PN -> S
BK -> K
PF -> N
SO -> P
CF -> B
VO -> C
OO -> K
FC -> F
NV -> F
OK -> K
NN -> O
NO -> O
BP -> O
KB -> O
KF -> O`;

// const data = testInput;
const data = input;

const template = data.split("\n")[0];
const pairInsertations = data
  .split("\n")
  .slice(2)
  .map((t) => t.split(" -> "))
  .reduce((a, b) => {
    return { ...a, [b[0]]: b[1] };
  }, {});

console.log(template, pairInsertations);

let mutableTemplate = template;
for (let step = 0; step < 10; step++) {
  for (let i = 0; i < mutableTemplate.length-1; i++) {
    const char0 = mutableTemplate[i];
    const char1 = mutableTemplate[i+1];

    const insert = pairInsertations[`${char0}${char1}`]
    if (insert) {
      const tempA = mutableTemplate.split('')
      tempA.splice(i+1, 0, insert)
      mutableTemplate = tempA.join('');
      i++;
    }
  }

  console.log(`Step ${step+1}: ${mutableTemplate.length}`);
}

const occurrences = mutableTemplate.split('').reduce(function (acc, curr) {
  return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, {});

console.log(occurrences);

console.log(Math.max(...Object.values(occurrences))- Math.min(...Object.values(occurrences)))
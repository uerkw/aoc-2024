// Start with reading the input file
const input = Deno.readTextFileSync("./day1/input1.txt");

// Split the input into lines
const lines = input.split("\n");

// Push into two lists
const list1: number[] = [];
const list2: number[] = [];
lines.map((line) => {
  // Split the line into two numbers
  const [a, b] = line.split("   ").map((n) => parseInt(n));
  list1.push(a);
  list2.push(b);
});

// This time calculate a total by adding up each number in the left list multiplied
// by the amount of times it appears in the right list

// We can use a Map to keep track of the number of times it appears in the right list
const map = new Map<number, number>();

// For this map, the key represents the item in the list, and the value is the frequency count
for (let i = 0; i < list2.length; i++) {
  const currentNumber = list2[i];
  if (map.has(currentNumber)) {
    const currentCount = map.get(currentNumber);
    if (currentCount === undefined) {
      map.set(currentNumber, 1);
    } else {
      map.set(currentNumber, currentCount + 1);
    }
  } else {
    map.set(currentNumber, 1);
  }
}

// Total as we go the similarity score

let totalSimScore = 0;

// Now iterate through the left list and multiply each number by the amount of times it appears in the right list
for (let i = 0; i < list1.length; i++) {
  const list1value = list1[i];
  let frequency: number = 0;
  if (map.has(list1value)) {
    frequency = map.get(list1value)!;
  }
  const list1occurences = list1value * frequency;
  totalSimScore += list1occurences;
}

console.log(totalSimScore);

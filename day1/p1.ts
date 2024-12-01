// Pair up the numbers and measure how far apart they are

// Pair up the smallest number in the left list with the smallest number in the right list
// Second smallest number on the left with second smallest on the right, and so on.

// Within each pair, figure out how far apart the two numbers are
// Then, add up the distances

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

// Sort the lists
list1.sort();
list2.sort();

// Add up the distances
let totalDistance: number = 0;
for (let i = 0; i < list1.length; i++) {
  const currentDistance = Math.abs(list1[i] - list2[i]);
  totalDistance += currentDistance;
}

console.log(totalDistance);

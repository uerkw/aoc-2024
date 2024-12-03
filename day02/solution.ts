const input = Deno.readTextFileSync("./day02/input.txt");

const lines = input
  .split("\n")
  .map((line) => line.split(" ").map((n) => parseInt(n)));

function part1() {
  let validEntries = 0;

  for (const line of lines) {
    if (isSafe(line)) {
      validEntries++;
    }
  }

  return validEntries;
}

function part2() {
  let validEntries = 0;

  for (const line of lines) {
    if (isSafeWithDampener(line)) {
      validEntries++;
    }
  }

  return validEntries;
}

function isSafe(line: number[]) {
  const isIncreasing = line[0] < line[1] && line[1] < line[2];
  for (let i = 1; i < line.length; i++) {
    const difference = Math.abs(line[i] - line[i - 1]);

    const invalidAdjacent = (a: number, b: number) =>
      isIncreasing ? a < b : a > b;

    const isWithinRange = 1 <= difference && difference <= 3;

    if (invalidAdjacent(line[i], line[i - 1]) || !isWithinRange) {
      return false;
    }
  }
  return true;
}

function isSafeWithDampener(line: number[]) {
  if (isSafe(line)) return true;
  for (let i = 0; i < line.length; i++) {
    if (isSafe([...line.slice(0, i), ...line.slice(i + 1)])) {
      return true;
    }
  }
  return false;
}

console.log(`Part 1: ${part1()}`);
console.log(`Part 2: ${part2()}`);

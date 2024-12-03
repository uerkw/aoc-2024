function preprocess(inputPath: string) {
  const input = Deno.readTextFileSync(inputPath);
  const lines = input.split("\n");
  const joinedLines = lines.join("");
  return joinedLines;
}

function part1(input: string) {
  const regExed = input.match(/mul\(\d+,\d+\)/g);
  const numbersToMul = regExed!.map((mul) => mul.match(/\d+/g)!.map(Number));
  const reduced = numbersToMul.reduce((accum, [x, y]) => accum + x * y, 0);
  return reduced;
}

function part2(input: string) {
  const enabledStatements = input.split("do()");
  const withoutDisabled = enabledStatements.map(
    (statement) => statement.split("don't()")[0]
  );
  const reduced = withoutDisabled.reduce(
    (accum, line) => accum + part1(line),
    0
  );
  return reduced;
}

const filePath = "./day3/input.txt";
const input = preprocess(filePath);
console.log(`Part 1: ${part1(input)}`);
console.log(`Part 2: ${part2(input)}`);

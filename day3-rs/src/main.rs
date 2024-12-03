use regex::Regex;
use std::fs;

fn preprocess(input_path: &str) -> String {
    let input = fs::read_to_string(input_path).expect("Failed to read the input file");
    input.lines().collect::<Vec<_>>().join("")
}

fn part1(input: &str) -> i32 {
    let re = Regex::new(r"mul\(\d+,\d+\)").expect("Invalid regex");
    let re_nums = Regex::new(r"\d+").expect("Invalid regex for numbers");
    
    re.captures_iter(input)
        .map(|cap| {
            re_nums
                .find_iter(&cap[0])
                .map(|m| m.as_str().parse::<i32>().expect("Invalid number"))
                .collect::<Vec<_>>()
        })
        .map(|nums| nums[0] * nums[1])
        .sum() 
}

fn part2(input: &str) -> i32 {
    input
        .split("do()")
        .map(|statement| statement.split("don't()").next().unwrap_or(""))
        .map(|line| part1(line) )
        .sum()    
}

fn main() {
    let input_path = "../day3/input.txt";
    let input_contents = preprocess(input_path);
    let part1 = part1(&input_contents);
    let part2 = part2(&input_contents);
    println!("Part 1: {}", part1);
    println!("Part 2: {}", part2);
}

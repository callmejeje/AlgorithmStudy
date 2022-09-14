let input = ["5", "20 10 35 30 7"];
let nums = input[1].split(" ").map(Number);
console.log(Math.min(...nums), Math.max(...nums));

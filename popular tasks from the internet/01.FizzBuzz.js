for (let i = 1; i <= 100; i++) {
  console.log(
    `${i} ${(i % 3 === 0 && "Fizz") || ""}${(i % 5 === 0 && "Buzz") || ""}`
  );
}

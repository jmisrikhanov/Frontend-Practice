// If you want check how much time it takes for a piece of code to run and execute, you can use the method performance.now().

var start = performance.now();

// Your piece of code starts here
for (let i = 0; i < 100; i++) {
  console.log(i);
}

// Your piece of code ends here
var duration = performance.now() - start;
console.log(duration); //54.89999

/*
 * Create the function factorial here
 */
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

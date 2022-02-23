// Use console.trace instead of console.log.
// It will show you the complete call stack when debugging.

const outer = () => {
  const inner = () => console.trace("Hello");
  inner();
};

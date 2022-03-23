// use object destructuring on an array to find the first element and the last element

const findFirstLast = (arr) => {
  const {
    0: firstElement,
    length: arrLength,
    [arrLength - 1]: lastElement,
  } = arr;
  return { firstElement, lastElement };
};

findFirstLast("Banana");
// {firstElement: "B", lastElement: "a"}

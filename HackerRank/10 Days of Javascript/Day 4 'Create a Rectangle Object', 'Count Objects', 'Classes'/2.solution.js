/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let pairCount = 0;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x === objects[i].y) {
      pairCount++;
    }
  }
  return pairCount;
}

// 2nd method

function getCount(objects) {
  return objects.reduce((target, item) => {
    item.x === item.y && (target += 1);

    return target;
  }, 0);
}

// 3rd method
function getCount(objects) {
  return objects.filter(function (o) {
    return o.x == o.y;
  }).length;
}

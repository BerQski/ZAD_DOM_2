let array = [1, 1, 1, 1, 1, 3, 1, 1];
let ballsObject = array.map((val, ind) => {
  return { value: val, index: ind };
});
// console.log(ballsObject);

let scale1 = [];
let scale2 = [];
let scale3 = [];
function untillEnd(aRa, cOn, ff) {
  let i = 1;
  while (i <= cOn) {
    ff.push(aRa.splice(Math.floor(Math.random() * aRa.length), 1));
    i++;
  }
  return ff.flat();
}

// console.log(untillEnd(ballsObject, 3, scale1));
// console.log(untillEnd(ballsObject, 3, scale2));
// console.log(untillEnd(ballsObject, 3, scale3));
// console.log(array);

function theOneOf8(Obj) {
  let sumLeft = 0;
  let sumRight = 0;
  let a = untillEnd(ballsObject, 3, scale1);
  let b = untillEnd(ballsObject, 3, scale2);
  let c = untillEnd(ballsObject, 3, scale3);

  for (let i = 0; i < a.length; i++) {
    sumLeft += a[i].value;
  }
  for (let j = 0; j < b.length; j++) {
    sumRight += b[j].value;
  }
  if (sumLeft === sumRight) {
    if (c[0].value < c[1].value) {
      return c[1].index;
    } else {
      return c[0].index;
    }
  } else if (sumLeft > sumRight) {
    if (a[0].value < a[1].value) {
      return a[1].index;
    } else if (a[0].value > a[1].value) {
      return a[0].index;
    } else {
      return a[2].index;
    }
  } else {
    if (b[0].value < b[1].value) {
      return b[1].index;
    } else if (b[0].value > b[1].value) {
      return b[0].index;
    } else {
      return b[2].index;
    }
  }
}
console.log(theOneOf8(ballsObject));

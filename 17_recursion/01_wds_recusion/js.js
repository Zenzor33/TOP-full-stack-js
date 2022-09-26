function countdown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log("Hooray");
}

function recursive(n) {
  if (n <= 0) {
    console.log("hooray");
    return;
  }
  console.log(n);
  recursive(n - 1);
}

function sumRange(n) {
  let total = 0;
  for (let i = n; i > 0; i--) {
    total += i;
  }
  return total;
}

function sumRangeRecursive(n, total = 0) {
  if (n <= 0) {
    return total;
  }
  return sumRangeRecursive(n - 1, total + n);
}

/*
How that works ^^

sumRangeRecursive(3) = 6

sumRangeRecursive(3, 0)
  sumRangeRecursive(2, 3)
    sumRangeRecursive(1, 5)
      sumRangeRecursive(0, 6)
        return 6
*/

function printChildren(t) {
  // ??
}

function printChildrenRecursive(t) {
  //
  if (t.children.length === 0) {
    return;
  }
  t.children.forEach((child) => {
    console.log(child.name);
    printChildrenRecursive(child);
  });
}

const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};

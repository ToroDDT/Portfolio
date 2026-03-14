#!/usr/bin/env node

function multiple_test(n) {
  return !Boolean(n % 5) || !Boolean(n % 3);
}

cons;

function foo() {
  let max_value = 1000;
  let good_numbers = [];
  let list = {};
  for (let number = 0; number < max_value; number++) {
    if (multiple_test(number)) {
      if (list.number != number) {
        list.number = number;
        good_numbers.push(number);
      } else {
        continue;
      }
    }
  }

  let sum = 0;
  for (let i = 0; i < good_numbers.length - 1; i++) {
    sum += good_numbers[i];
  }
  console.log(sum);
}

foo();

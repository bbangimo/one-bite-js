// mission1
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

// mission2
let book = {
  bookTitle: "책 제목",
  author: "책 저자",
};

const getSummary = (key) => {
  console.log(book[key]);
};

getSummary("bookTitle");

// mission3
function sumNumbers(a, b) {
  function addFive(number) {
    return number + 5;
  }

  let result = addFive(b) + a;
  return result;
}

console.log(sumNumbers(3, 7));
console.log(sumNumbers(10, 5));
